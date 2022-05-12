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
        <section id="section-posts">

            {posts.map(post => (
                <a href={post.url} target='/blank' className='linker'>
                    <article className="card-post">
                        <div className='imgCard'>
                            <img src={post.imageUrl} alt={post.title} />
                        </div>
                        <div className="post-infos">
                            <h2 className='post-title'>{post.title}</h2>
                            <spam className='link-refer'>{post.newsSite}</spam>
                            <p className='post-sumary generals-fonts'>{post.summary}</p>
                        </div>
                    </article>
                </a>
            ))}
        </section>
    )
}

export default HomePosts