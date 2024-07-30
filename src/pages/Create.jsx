import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Create = () => {
    const [title, setTitle] = useState ("")
    const [body, setBody] = useState ("")
    const [author, setAuthor] = useState ("")
    
    const endPoint = "http://localhost:3000/blogs"

    const navigate = useNavigate()

    //how to add alert
    const addBlog = async(e) => {
        e.preventDefault()

        if(!title || !body || !author){
            alert("Fill in all fields")
        }

        //use to catch error when the code is not inputed properly
        try {
            const newBlog = {title, body, author}

            const blogResponse = await fetch(endPoint,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newBlog)
            })

            if(!blogResponse.ok){
                alert("Failed to add blog")
            }

            alert("Blog added successfully")

            navigate("/")

        } catch (error) {
            console.error(error)

        }
    
    }

  return (
    <main className='min-h-screen flex justify-center items-center'>
     <div className='min-w-[700px] mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Add New Blog</h2>


        <form onSubmit={addBlog}>
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
                Add Blog
            </button>

            

        </form>
     </div>
    </main>
  )
}

export default Create
