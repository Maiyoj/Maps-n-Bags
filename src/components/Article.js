function Article({image, content, title}){

    return(
        <>
        <img src={image} alt="Test"></img>
        <p>{title}</p>
        <p>{content}</p>
        </>
    )
}
export default Article;