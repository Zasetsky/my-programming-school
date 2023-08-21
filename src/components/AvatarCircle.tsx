import React from 'react';
import { SchoolLogo } from '../assets/icons/index';
import '../assets/styles/components/avatar-circle.scss';

const Avatar: React.FC = () => {
  return (
    <div className="avatar-circle">
      <SchoolLogo />
    </div>
  );
};

export default Avatar;
