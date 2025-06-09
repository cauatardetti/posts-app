import React, { useEffect, useState } from 'react';
import { Container, CircularProgress, Box } from '@mui/material';
import { getPosts, Post } from '../utils/api';
import PostCard from '../components/PostCard';
import HeaderBanner from '../components/HeaderBanner';

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
      <HeaderBanner></HeaderBanner>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
          mt: 2,
        }}
      >
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PostListPage;
