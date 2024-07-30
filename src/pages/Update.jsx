import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Update = () => {

  const {id} = useParams() // fetching blog id from url params

  const [title, setTitle] = useState ("")
  const [body, setBody] = useState ("")
  const [author, setAuthor] = useState ("")

  const navigate = useNavigate()

  const fetchBlog = async() => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`)
      if(!response.ok){
        throw new Error("Failed to fetch blog")
      }
      const data = await response.json()
      setTitle(data.title)
      setBody(data.body)
      setAuthor(data.author)

    } catch (error) {
      console.log(error);
    }
  }
//all hooks are function
  useEffect(() => {
    fetchBlog()
  },[id])


  const updateBlog = async(e) => {
    e.preventDefault()

    try {
      const updateBlog = {title, body, author}

      const updateresponse = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(updateBlog)
      })

      if(!updateBlog.ok){
        alert("Failed to update blog")
      } 

      alert("Blod updated successfully")

      navigate("/")


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='min-h-screen flex justify-center items-center'>
     <div className='min-w-[700px] mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Update Blog</h2>


        <form onSubmit={updateBlog}>
            <div className="mb-4">
                <label className='block text-sm font-medium text-gray-500'>Blog Title</label>
                <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm outline-none focus:ring'
                value={title}
                placeholder='type your title' 
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-800 '>Blog Body</label>
                <textarea
                name='body'
                onChange={(e) => setBody(e.target.value)}
                className='mt-1 block w-full p-2 border outline-none border-gray-300 rounded-md shadow-sm focus:ring'
                value={body}
                placeholder='type here'
                rows="5"
                />
            </div>

            <div className="mb-4">
                <label className='block text-sm font-medium text-gray-800'>Blog Author</label>
                <input
                type="text"
                name='author'
                onChange={(e) => setAuthor(e.target.value)}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring outline-none'
                value={author}
                placeholder='author name'
                />
            </div>

            <button type='submit' className='w-full bg-blue-950 text-white p-2 rounded-md shadow-md hover:bg-blue-400 focus:ring focus:ring-blue-400 focus:bg-blue-800'>
                Update Blog
            </button>

            

        </form>
     </div>
    </main>
  )
}

export default Update
