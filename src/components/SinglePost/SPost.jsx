import '../HomePosts/output.css';

function SPost(props){
    console.log(props);
    var idd 
    props.i === 0 ?  idd = 'firstNews' : idd = 'others';
    
    return(
        <a href={props.url} target='/blank' className={idd}>
            <article className=''>
                <div >
                    <img className='imgCard'  src={props.imgUrl} alt={props.title} />
                </div>
                <div className="post-infos">
                    <h2 className='post-title'>{props.title}</h2>
                </div>
            </article>
        </a>
    )
}

export default SPost;