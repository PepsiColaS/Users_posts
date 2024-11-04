import React, { useEffect, useState } from 'react';
import Post from "./Post";
import GetPosts from "./GetPosts";

function App() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            const data = await GetPosts();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    if (!posts) {
        return <div>Loading...</div>;
    }

    return (
        <>
             {posts.map((post) => (
                <Post 
                    key={post.id}
                    title={post.title} 
                    body={post.body} 
                    userName={post.userName} 
                />
            ))}
        </>
    );
}

export default App;