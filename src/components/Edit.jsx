import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEditBlogMutation, useGetSingleBlogsQuery } from '../feature/services/blogApi'

const Edit = () => {
    const {id} = useParams()
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [image,setImage] = useState('')
    const nav = useNavigate()
    const [editBlog] = useEditBlogMutation()
    const { data:blog }  = useGetSingleBlogsQuery(id)
    useEffect(() => {
      setTitle(blog?.title)
      setDesc(blog?.desc)
      setImage(blog?.image)
    },[blog])
    const editBlogHandler = (e) => {
      e.preventDefault()
      const newData = {id,title,image,desc}
      editBlog(newData)
      nav('/')
          }
          

  return (
    <div className='flex justify-center shadow-lg items-center h-screen' >
      <form onSubmit={editBlogHandler} className='flex flex-col gap-10 shadow w-96 p-6' action="">
        <h2 className='text-2xl text-slate-500 font-semibold'>Edit Blogs</h2>
        <input placeholder='Title...' defaultValue={title} onChange={(e) => setTitle(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <input placeholder='Description...' defaultValue={desc} onChange={(e) => setDesc(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <input placeholder='Image...' defaultValue={image} onChange={(e) => setImage(e.target.value)} type='text' className='border-slate-600 border-b outline-none' />
        <div className='flex gap-4'>
        <button type='submit' className='bg-slate-600 text-white px-4 py-1'>Done</button>
        <Link to={'/'} >
        <button type='submit' className='bg-red-600 text-white px-4 py-1'>Back</button>
        </Link>
        </div>

      </form>
    </div>
  )
}

export default Edit
