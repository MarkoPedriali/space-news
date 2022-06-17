/* eslint-disable react/style-prop-object */
import { useState, useEffect } from 'react';
import React from 'react';
import './output.css';


function HomePosts(){
 
    const [posts, setPosts] = useState([])
    
    useEffect(() =>{
        fetch('https://api.spaceflightnewsapi.net/v3/articles').then(response => {
            response.json().then(data => {
                setPosts(data)
            })
        }).catch(error =>{console.log(error)})
    },[])


    return(
        <section id="section-posts">

            <h1 id='main-title'>The 10 importants news about the Space</h1>
            {posts.map(post => (
                post === posts[0] ?
                <div id='main-news'>
                        <a href={post.url} target='/blank' className='firstNews'>
                            <article className=''>
                                <div >
                                    <img className='imgCard'  src={post.imageUrl} alt={post.title} />
                                </div>
                                <div className="post-infos">
                                    <h2 className='post-title'>{post.title}</h2>
                                </div>
                            </article>
                        </a>
                </div>
                : post === posts[1] || post === posts[2] ?
                <div id='wrap-3'>
                    <a href={post.url} target='/blank' className='firstNews'>
                        <article className="card-post">
                            <div className='imgCard'>
                                <img src={post.imageUrl} alt={post.title} />
                            </div>
                            <div className="post-infos">
                                <h2 className='post-title'>{post.title}</h2>
                            </div>
                        </article>
                    </a>
                </div>
                : <div>kdsljfk</div>
            ))}
        </section>
    )
}

export default HomePosts