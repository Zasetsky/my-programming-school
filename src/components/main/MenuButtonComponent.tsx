import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import '../../assets/styles/components/menu-button.scss';

interface Props {
  icon: React.ReactElement;
  url: string;
  name: React.ReactNode;
}

const MenuButtonComponent: React.FC<Props> = ({ icon, url, name }) => {
  return (
    <div className="menu-button">
      <Button
        component={Link}
        to={url}
        sx={{
          height: '100px',
          width: '100px',
          backgroundColor: 'var(--primary-main)',
          '&:hover': {
            backgroundColor: 'var(--primary-dark)',
          },
        }}
        variant="contained"
      >
        {React.cloneElement(icon, {
          style: { fontSize: 60 },
        })}
      </Button>
      <span className="menu-button--name">{name}</span>
    </div>
  );
};

export default MenuButtonComponent;
