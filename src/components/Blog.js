import Article from "./Article";
import {useEffect, useState} from "react";
import Search from "./Search";
import Comments from "./Comments";
import { FaSpinner } from 'react-icons/fa';



function Blog(){
    const [blogs, setBlogs] = useState([])
    const [searchData, setData] = useState("")
    const[load, setLoad] = useState(null)
 
  
    useEffect(()=>{
        fetch("https://phase2blogs-api.herokuapp.com/blogs")
        .then((res)=> res.json())
        .then((data) =>{
           setBlogs(data)
           setLoad(data)
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
            {load?allBlogs: <div className="load"><FaSpinner className="icon" /><h1>PLease Wait Loading ...</h1></div>}
            <Comments />
        </div>
    )

}
export default Blog;