import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { getPostById, Post } from '../utils/api';

const PostDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (id) {
          const data = await getPostById(Number(id));
          setPost(data);
        }
      } catch (error) {
        console.error('Erro ao buscar post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h6">Post não encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4, maxWidth: 'md' }}>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          p: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            {post.title}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              {post.body}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostDetailsPage;
