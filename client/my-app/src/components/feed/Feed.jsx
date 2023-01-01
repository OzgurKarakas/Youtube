import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Post } from '../post/Post';
import './feed.css';


export const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/videos");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  console.log(posts);

  return ( 
    <div className='feed'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
