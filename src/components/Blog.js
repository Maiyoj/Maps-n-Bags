import Article from "./Article";
import {useEffect, useState} from "react";



function Blog(){
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/blogs")
        .then((res)=> res.json())
        .then((data) =>{
           setBlogs(data)
        })
    },[]);


const allBlogs = blogs.map((blog) =>{
    return <Article 
    key={blog.id}
    title={blog.title}
    image={blog.image}
    content={blog.content}
    author={blog.author}
    />
})

  
    return(
         <div className="blogs">
            <h1>Blogs</h1> 
             {allBlogs}
        </div>
    )

}
export default Blog;