import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UpcomingClassesCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Предстоящие занятия</Typography>
        {/* Информация о занятиях */}
      </CardContent>
    </Card>
  );
};

export default UpcomingClassesCard;
