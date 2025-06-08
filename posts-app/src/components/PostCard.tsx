import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dados/${id}`);
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body.length > 100 ? body.substring(0, 100) + '...' : body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
