import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/navigation'

type PostItem = {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  image: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [page, setPage] = useState(1); 
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchMorePosts();
  }, []);

  const fetchMorePosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/json/dataPost.json');
      const data = await response.json();
      console.log("this is data", data);
      const newPosts = data.items.slice((page - 1) * 5, page * 5);
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage(page + 1); 
      if (newPosts.length === 0) setHasMore(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePostClick = (id: number) => {
    router.push(`/posts/${id}`);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore} 
        loader={<h4>Loading...</h4>}
      >
        <Grid container direction="column" spacing={2}>
          {posts.map((item) => (
            <Grid item key={item.id} xs={12} onClick={() => handlePostClick(item.id)}>
              <Card sx={{ display: 'flex', boxShadow: 'none', cursor: 'pointer' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: 150, height: 'auto', objectFit: 'cover' }}
                />
                <CardContent sx={{ display: 'inline', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
}
