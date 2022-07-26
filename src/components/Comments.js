function Comments(){
    return(

     <div className="commentForm">
         <h1>Leave a Comment</h1>
         <div className="displayComment">
         <p>comment: High</p>
         <p>Author: Hello valentine</p>
         </div>
         <form className="updateForm">
         <textarea placeholder="Comment"></textarea><br/>
         <input placeholder="name"></input>
         </form>
    
     </div>
     )
}
export default Comments