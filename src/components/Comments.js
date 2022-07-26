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
                 <p >User:{comment.user}</p>
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
            title:"",
            content:"",
            author:""
          });
        })
      }
    
    
    
    return(

     <div className="commentForm">
         <h1>Leave a Comment</h1>
         {allComments}
         <form className="updateForm">
         <textarea placeholder="Comment" name="comment" onChange={handleCommentChange} ></textarea><br/>
         <input placeholder="name" name="name"  onChange={handleCommentChange}></input>
         <input type="submit"   onClick={handleSubmit}/>
         </form>
     </div>
     )
}
export default Comments