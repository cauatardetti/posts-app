import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Bookmark from '@mui/icons-material/Bookmark';

type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <Card
      sx={{
        height: 220,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: '#fff',
        color: '#333',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          boxShadow: '0 0 8px rgba(103, 58, 183, 0.4)', 
          transform: 'scale(1.01)',
        },
      }}
    >
      <CardContent
        sx={{
          padding: '10px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Bookmark color="primary" fontSize="small" />
          
          </Box>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{
              fontSize: '1rem',
              lineHeight: 1.2,
              mb: '6px',
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              lineHeight: 1.3,
              opacity: 0.85,
            }}
          >
            {body.length > 100 ? `${body.substring(0, 100)}...` : body}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            ID: {id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;
