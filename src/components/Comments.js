import {useEffect, useState} from "react"


function Comments(){
    const [comments, setComments] =useState([])
    const[formData, setFormData] = useState({
        comment:"",
        user:"", 
    })
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
                 <p >Name:{comment.user}</p>
           </div>
           
        )
    })


    //Handle Change and submit
    function handleCommentChange(e){
        setFormData({
            ...formData, [e.target.name]:e.target.value
          });
    }
    function handleSubmit(e){
        e.preventDefault();
        const createdComment ={
          comment:formData.comment,
          user:formData.user
        };
    
        fetch("https://phase2blogs-api.herokuapp.com/comments",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(createdComment),
        })
        .then(res => res.json())
        .then(newp =>{
            const newComments =  [...comments, newp]
            setComments(newComments);
            setFormData({
              ...formData,
              comment:"",
              user:""
            })
        })
      }
    
    
    
    return(

     <div className="commentForm">
         <h1>Leave a Comment</h1>
         {allComments}
         <hr></hr>
         <form className="updateForm">
         <textarea value={formData.comment} placeholder="Comment" name="comment" onChange={handleCommentChange} rows="15" ></textarea><br/>
         <input value={formData.user} placeholder="name" name="user"  onChange={handleCommentChange}></input><br/>
         <input type="submit"className="submit"  onClick={handleSubmit}/>
         </form>
     </div>
     )
}
export default Comments