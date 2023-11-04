import React from 'react';
import { Card, CardContent, Skeleton } from '@mui/material';
import '../../assets/styles/components/subjects/subject-card-skeleton.scss';

const SubjectCardSkeleton = () => {
  return (
    <Card className="subject-card-skeleton">
      <Skeleton
        variant="rectangular"
        height={'10px'}
        style={{ borderRadius: '10px 10px 0 0' }}
      />
      <CardContent className="subject-card-skeleton__content">
        <Skeleton variant="rectangular" height={30} width="45%" />

        <Skeleton
          style={{ padding: '10px', margin: '10px 0', borderRadius: '5px' }}
          variant="rectangular"
          height={40}
          width="95%"
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Skeleton variant="rectangular" height={30} width="30%" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCardSkeleton;
