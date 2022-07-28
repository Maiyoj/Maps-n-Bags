import Article from "./Article";
import {useEffect, useState} from "react";
import Search from "./Search";
import Comments from "./Comments";



function Blog(){
    const [blogs, setBlogs] = useState([])
    const [searchData, setData] = useState("")
 
  
    useEffect(()=>{
        fetch("https://phase2blogs-api.herokuapp.com/blogs")
        .then((res)=> res.json())
        .then((data) =>{
           setBlogs(data)
        })
    },[]);


    const filterData = blogs.filter((blog)=>{
        if (searchData=== ""){
            
            return true;
        }
        else{
        
         return blog.title.toLowerCase().includes(searchData.toLowerCase())
        }
    });


const allBlogs = filterData.map((blog) =>{
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
            <Search setData={setData}/>
            {allBlogs}
            <Comments />
        </div>
    )

}
export default Blog;