import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'



const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const endPoint = "http://localhost:3000/blogs"
    //async: every function carrying async needs time to execute

    const fetchBlog = async() => {
        try {
            const fetchResponse = await fetch(endPoint)
            const convertedResponse =await fetchResponse.json()
            setBlogs(convertedResponse);

        } catch (error){
            console.error(error)

        }
    }

    useEffect(() => {
        fetchBlog()
    },[])

    const deleteBlog = async(id) => {

      try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`, {
          method: "DELETE"
        })

        if(!response.ok) {
          throw new Error ("Failed to delete blog")
        }

        // Remove the deleted blog from the state
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));


      } catch (error) {
        console.error(error)
        
      }
    }
  return (
    <>
      {
        blogs && blogs.map((blog) => (
            <Blog id={blog.id} key={blog.id} titleProp={blog.title} bodyProp={blog.body} authorProp={blog.author} deleteProp={() => deleteBlog(blog.id)} /> //pass in deleteBog
        ))
      }
    </>
  )
}

export default Home
