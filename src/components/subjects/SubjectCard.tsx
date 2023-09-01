import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Subject } from './types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{subject.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
