function Article({image, content, title, author}){

    return(
        <>
        <div className="article">
        <h3>{title}</h3>
        <img src={image} alt="Test"></img>
        <p>{content}</p>
        <p>{author}</p>
        </div>
        </>
    )
}
export default Article;