import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Module } from '../components/modules/types';
import { useParams } from 'react-router-dom';
import { selectModulesBySubjectId } from '../slices/modulesSlice';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import '../assets/styles/components/modules-page.scss';

const ModulesPage: React.FC = () => {
  const { subjectId } = useParams();
  const modules = useSelector((state: RootState) =>
    selectModulesBySubjectId(state, subjectId || ''),
  );
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  const handleExpandClick = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  return (
    <div className="modules-page">
      <div className="modules-page__header">
        <Typography variant="h6">Имя модуля</Typography>
        <Typography variant="h6">Оценка</Typography>
      </div>
      {Array.isArray(modules) &&
        modules.map((module: Module) => (
          <Accordion
            key={module.id}
            expanded={expandedModuleId === module.id}
            onChange={() => handleExpandClick(module.id)}
          >
            <AccordionSummary>
              <div className="modules-page__info">
                <Typography variant="body1">{module.name}</Typography>
                <Typography variant="body1">{module.grade}</Typography>
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
