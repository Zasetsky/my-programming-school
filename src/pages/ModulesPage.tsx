import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Module } from '../components/modules/types';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { selectModulesBySubjectId } from '../slices/modulesSlice';
import { selectSubjectById } from '../slices/subjectsSlice';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Tooltip,
} from '@mui/material';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { CheckList } from '../assets/icons/index';

import '../assets/styles/components/modules-page.scss';

const ModulesPage: React.FC = () => {
  const { subjectId } = useParams();

  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const modules = useSelector((state: RootState) =>
    selectModulesBySubjectId(state, subjectId || ''),
  );

  const subject = useSelector((state: RootState) =>
    selectSubjectById(state, subjectId || ''),
  );

  const handleExpandClick = (id: string, comment: string | null) => {
    if (!comment) return;
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <div className="modules-page">
      <div className="modules-page__title">
        <CheckList />
        <h1>{subject?.name}</h1>
      </div>
      <div className="modules-page__table-header">
        <div className="modules-page__table-title">
          <Typography variant="h6">Имя модуля</Typography>
          <Typography variant="h6">Оценка</Typography>
        </div>
      </div>

      <BackButton top={'18%'} />
      {Array.isArray(modules) &&
        modules.map((module: Module) => (
          <Accordion
            className="modules-page__accordion"
            key={module.id}
            expanded={expandedModuleId === module.id}
            onChange={() => handleExpandClick(module.id, module.comment)}
          >
            <AccordionSummary>
              <div className="modules-page__info">
                <Typography variant="body1">
                  {module.name}
                  {module.comment && (
                    <Tooltip
                      title="Учитель оставил комментарий"
                      classes={{ tooltip: 'comment' }}
                    >
                      <FeedbackIcon
                        sx={{ color: 'var(--info-main)', marginLeft: 2 }}
                      />
                    </Tooltip>
                  )}
                </Typography>
                <Tooltip
                  title={
                    module.grade === 'danger'
                      ? 'Стоит изменить подход'
                      : module.grade === 'repeat'
                      ? 'Стоит повторить пройденный материал'
                      : module.grade === 'success'
                      ? 'Материал усвоен'
                      : 'Оценка ещё не поставлена'
                  }
                  classes={{ tooltip: module.grade }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 24,
                      border: '2px solid',
                      borderColor:
                        module.grade === 'danger'
                          ? 'error.main'
                          : module.grade === 'repeat'
                          ? 'warning.main'
                          : module.grade === 'success'
                          ? 'success.main'
                          : 'text.primary',
                      opacity: module.grade === 'not_set' ? 0.5 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {module.grade === 'danger' && (
                      <SentimentVeryDissatisfiedIcon
                        sx={{ color: 'error.main' }}
                      />
                    )}
                    {module.grade === 'repeat' && (
                      <SentimentSatisfiedIcon sx={{ color: 'warning.main' }} />
                    )}
                    {module.grade === 'success' && (
                      <SentimentSatisfiedAltIcon
                        sx={{ color: 'success.main' }}
                      />
                    )}
                    {/* Здесь не будет иконки для 'not_set' */}
                  </Box>
                </Tooltip>
              </div>
            </AccordionSummary>

            <AccordionDetails>
              <Typography variant="body2">{module.comment}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default ModulesPage;
