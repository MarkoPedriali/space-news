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
    console.log(mainNws)
    var secoundaryNws = posts.slice(3);
               
    return(
        <section id="section-posts">          
            <h1 id='main-title'>The 10 importants news about the Space</h1>
            <div id="main-news">   
            {/* AQUI COMEÇA O CARROSSEL  --------------------------------------*/}
            {mainNws.length> 0 ?
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="6000">
                    <img src={mainNws[0].imageUrl} class="d-block w-100" alt={mainNws[0].title}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>{mainNws[0].title}</h1>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                    <img src={mainNws[1].imageUrl} class="d-block w-100" alt={mainNws[1].title}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>{mainNws[1].title}</h1>
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                    <img src={mainNws[2].imageUrl} class="d-block w-100" alt={mainNws[2].title}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>{mainNws[2].title}</h1>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>   
                :
                    <div></div>
                }           
                {/* {mainNws.map((post, index) => (                                                                     
                    <SPost                          
                        i={index}                
                        title={post.title}
                        imgUrl={post.imageUrl}
                        url={post.url}
                    />                    
                ))} */}
            </div>
            <h2 id='relatedNws' >____________ Related News ____________</h2>
            <div id="secoundaryNws">
                {secoundaryNws.map((post, index) => (                                                        
                    <SPost className="card-post"                       
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