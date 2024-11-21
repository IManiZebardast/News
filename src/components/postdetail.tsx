import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

type PostItem = {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  image: string;
};

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostItem | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('http://localhost:3000/json/dataPost.json');
        const data = await response.json();
        const postItem = data.items.find((item: PostItem) => item.id === parseInt(id!));
        setPost(postItem || null);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardMedia
        component="img"
        image={post.image}
        alt={post.title}
        sx={{ height: 300, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Published at: {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          URL: <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
