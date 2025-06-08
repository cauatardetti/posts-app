export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error('Erro ao buscar posts');
  }

  const data: Post[] = await response.json();
  return data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar post');
  }

  const data: Post = await response.json();
  return data;
};
