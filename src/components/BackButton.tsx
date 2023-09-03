import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface BackButtonProps {
  top: string;
}

const BackButton: React.FC<BackButtonProps> = ({ top }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      startIcon={<KeyboardReturnIcon style={{ fontSize: 30 }} />}
      onClick={handleGoBack}
      variant="outlined"
      sx={{
        position: 'absolute',
        zIndex: 999,
        left: '1%',
        top: top,
      }}
    />
  );
};

export default BackButton;
