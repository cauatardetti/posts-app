import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderBanner: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2,
        p: 2,
        mb: 4,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(270deg, #0d47a1, #42a5f5)',
        backgroundSize: '400% 400%',
        animation: 'moveGradient 10s ease infinite',
        height: 120,
        '@keyframes moveGradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight="bold">
          Lista de Posts
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
          Por: Cauã Tardetti
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderBanner;
