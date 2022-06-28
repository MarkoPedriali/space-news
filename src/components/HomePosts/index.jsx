import { useState, useEffect } from 'react';
import React from 'react';
import './output.css';
import SPost from '../SinglePost/SPost';


function HomePosts(){
 
    const [posts, setPosts] = useState([])
    
    useEffect(() =>{
        fetch('https://api.spaceflightnewsapi.net/v3/articles').then(response => {
            response.json().then(data => {
                setPosts(data)
            })
        }).catch(error =>{console.log(error)})
    },[]);

    var mainNws = posts.slice(0,3);
    var secoundaryNws = posts.slice(3);

    console.log(posts)
               
    return(
        <section id="section-posts">          
            <h1 id='main-title'>The 10 importants news about the Space</h1>
            <div id="main-news">               
                {mainNws.map((post, index) => (                                                                     
                    <SPost  
                        
                        i={index}                
                        title={post.title}
                        imgUrl={post.imageUrl}
                        url={post.url}
                    />                    
                ))}
            </div>
            <div id="secoundaryNws">
                {secoundaryNws.map((post, index) => (                                                        
                    <SPost 
                        
                        i={index+1} 
                        title={post.title}
                        imgUrl={post.imageUrl}
                        url={post.url}
                        newsSite={post.newsSite}
                        summary={post.summary}
                    />             
                ))}
            </div>
            
        </section>
    )
}

export default HomePosts