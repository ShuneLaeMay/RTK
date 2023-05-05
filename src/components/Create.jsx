import React, { useState } from 'react'
import { useGetCreateBlogsMutation } from '../feature/services/blogApi'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [image,setImage] = useState('')
    const [getCreateBlogs] = useGetCreateBlogsMutation()
    const nav = useNavigate()
    const createBlogHandler = (e) => {
        e.preventDefault()
        console.log(title,desc,image)
        const newData = {id:Date.now(),title,image,desc}
        getCreateBlogs(newData)
        nav('/')
    }

   

  return (
    <div className='flex justify-center items-center h-screen' >
      <form onSubmit={createBlogHandler} className='flex flex-col gap-10 shadow w-96 p-6' action="">
        <h2 className='text-2xl text-slate-500 font-semibold'>Create Blogs</h2>
        <input placeholder='Title...' value={title} onChange={(e) => setTitle(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <input placeholder='Description...' value={desc} onChange={(e) => setDesc(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <input placeholder='Image...' value={image} onChange={(e) => setImage(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <button type='submit' className='bg-slate-600 text-white px-4 py-1'>Create</button>
      </form>
    </div>
  )
}

export default Create
