import React from 'react';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import Badge from '@mui/material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import { Dayjs } from 'dayjs';

interface CustomDayProps extends PickersDayProps<Dayjs> {
  isLessonDay?: boolean;
}

const CustomDay: React.FC<CustomDayProps> = ({ isLessonDay, ...props }) => {
  return (
    <Badge
      overlap="circular"
      badgeContent={
        isLessonDay ? (
          <SchoolIcon
            fontSize="small"
            style={{ color: 'var(--primary-main)' }}
          />
        ) : undefined
      }
    >
      <PickersDay {...props} />
    </Badge>
  );
};

export default CustomDay;
