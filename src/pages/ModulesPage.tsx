import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Module } from '../components/subjects/types';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { selectSubjectBySubjectCode } from '../slices/subjectsSlice';
import { selectModules, fetchModulesForSubject } from '../slices/modulesSlice';
import { AppDispatch } from '../redux/store';

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Tooltip,
  Card,
  CardContent,
} from '@mui/material';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { CheckList } from '../assets/icons/index';

import '../assets/styles/components/subjects/modules-page.scss';

const ModulesPage: React.FC = () => {
  const { subject_code } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const subject = useSelector((state: RootState) =>
    selectSubjectBySubjectCode(state, subject_code || ''),
  );

  const modules = useSelector(selectModules);

  const handleExpandClick = (id: string, comment: string | null) => {
    if (!comment) return;
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  useEffect(() => {
    if (subject) {
      dispatch(fetchModulesForSubject(subject.id));
    }
  }, []);

  return (
    <div className="modules-page">
      <div className="modules-page__title">
        <CheckList />
        <h1>{subject?.name}</h1>
      </div>

      <BackButton top={'130px'} />

      {Array.isArray(modules) && modules.length > 0 ? (
        <>
          <div className="modules-page__table-header">
            <div className="modules-page__table-title">
              <Typography variant="h6">Имя модуля</Typography>
              <Typography variant="h6">Оценка</Typography>
            </div>
          </div>
          {modules.map((module: Module) => (
            <Accordion
              className="modules-page__accordion"
              key={module.id}
              expanded={expandedModuleId === module.id}
              onChange={() => handleExpandClick(module.id, module.comment)}
            >
              <AccordionSummary
                style={{ cursor: module.comment ? 'pointer' : 'default' }}
              >
                <div className="modules-page__info">
                  <Typography variant="body1">
                    {module.name}
                    {module.status === 'unpaid' && (
                      <span
                        style={{
                          marginLeft: '8px',
                          fontSize: '12px',
                          color: 'var(--error-main)',
                        }}
                      >
                        Не оплачено
                      </span>
                    )}
                    {module.comment && (
                      <Tooltip
                        title="Учитель оставил комментарий"
                        classes={{ tooltip: 'comment', arrow: 'comment-arrow' }}
                        arrow
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
                    classes={{
                      tooltip: module.grade,
                      arrow: module.grade + '-arrow',
                    }}
                    arrow
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
                        <SentimentSatisfiedIcon
                          sx={{ color: 'warning.main' }}
                        />
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
        </>
      ) : (
        <Card className="modules-page__empty-message">
          <CardContent>
            <Typography variant="body2">У вас пока нет модулей</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ModulesPage;
