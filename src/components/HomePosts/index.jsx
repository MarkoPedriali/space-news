import { useState, useEffect } from 'react';
import React from 'react';
import './styles.css';

function HomePosts(){
 
    const [posts, setPosts] = useState([])
    
    useEffect(() =>{
        fetch('https://api.spaceflightnewsapi.net/v3/articles').then(response => {
            response.json().then(data => {
                console.log(data)
                setPosts(data)
            })
        }).catch(error =>{console.log(error)})
    },[])


    return(
        <section id="home-posts">
            <h1>Space News</h1>

            {posts.map(post => (

                <article className="home-post">
                    <img src={post.imageUrl} alt={post.title} />

                    <div className="post-infos">
                        <h2>{post.title}</h2>
                        <spam>{post.newsSite}</spam>
                        <p>{post.summary}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default HomePosts