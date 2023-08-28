import React from 'react';
import { SchoolLogo } from '../assets/icons/index';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useAuth } from '../hooks/useAuth';
import '../assets/styles/components/avatar.scss';

const Avatar: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="avatar">
      <div className="avatar__circle">
        {isAuthenticated ? (
          <TagFacesIcon
            sx={{ fontSize: 100, color: 'var(--text-primary)', opacity: 0.5 }}
          />
        ) : (
          <SchoolLogo />
        )}
      </div>
      <div className="avatar__background"></div>
    </div>
  );
};

export default Avatar;
