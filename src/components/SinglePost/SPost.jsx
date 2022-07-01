import '../HomePosts/output.css';

function SPost(props){
    console.log(props);
    var summary = props.summary
    console.log(summary)
    var idd; 
    props.i === 0 ? idd = 'firstNews' : idd = 'others';
    
    return(
        <a href={props.url} target='/blank' className={idd}>
            <article className=''>
                    <img className='imgCard'  src={props.imgUrl} alt={props.title} />
                <div className="post-infos">
                    <h2 className='post-title'>{props.title}</h2>
                    <spam>{props.newsSite}</spam>
                    <p>{summary}</p>
                </div>
            </article>
        </a>
    )
}

export default SPost;