import React from 'react';
import { Button } from '@mui/material';

interface Props {
  icon: React.ReactElement;
  url: string;
}

const MenuButtonComponent: React.FC<Props> = ({ icon, url }) => {
  return (
    <Button
      sx={{
        height: '100px',
        width: '100px',
        backgroundColor: 'var(--primary-main)',
        '&:hover': {
          backgroundColor: 'var(--primary-dark)',
        },
      }}
      variant="contained"
      href={url}
    >
      {React.cloneElement(icon, {
        style: { fontSize: 60 },
      })}
    </Button>
  );
};

export default MenuButtonComponent;
