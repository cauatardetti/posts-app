import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import { getPosts, Post } from '../utils/api';
import PostCard from '../components/PostCard';

const PostListPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Posts
      </Typography>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </Container>
  );
};

export default PostListPage;
