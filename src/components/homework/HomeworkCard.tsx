import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HomeworkCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Домашнее задание</Typography>
        {/* Информация о домашнем задании */}
      </CardContent>
    </Card>
  );
};

export default HomeworkCard;
