import {useEffect, useState} from "react"


function Comments(){
    const [comments, setComments] =useState([])
    useEffect(()=>{
        fetch("https://phase2blogs-api.herokuapp.com/comments")
        .then((res)=> res.json())
        .then((data) =>{
         setComments(data)
        },[comments,setComments])
        
    });

    const allComments = comments.map((comment) =>{
        return (
           <div key={comment.id} className="displayComment">
                 <p >Comment:{comment.comment}</p>
                 <p >User:{comment.user}</p>

           </div>
        )

    })


    return(

     <div className="commentForm">
         <h1>Leave a Comment</h1>
         {/* <div className="">
         <p>comment: {comment}</p>
         <p>Author: Hello valentine</p>
         </div> */}

         {allComments}
         <form className="updateForm">
         <textarea placeholder="Comment"></textarea><br/>
         <input placeholder="name"></input>
         </form>
     </div>
     )
}
export default Comments