function Article({image, content, title}){

    return(
        <>
        <h3>{title}</h3>
        <img src={image} alt="Test"></img>
        <p>{title}</p>
        <p>{content}</p>
        </>
    )
}
export default Article;