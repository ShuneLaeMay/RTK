import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../feature/services/blogApi'

const BlogsCard = ({blog}) => {
    const [deleteBlog] = useDeleteBlogMutation()
  return (
    <div >
      <div className='flex flex-col gap-4  w-72 p-4 border-2 '> 
      <img className='w-[300px]' src={blog.image} />
      <div className='flex flex-wrap gap-4'>
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <div className='flex gap-4'>
        <Link to={`/detail/${blog?.id}`}>
            <button className='bg-slate-500  px-6 py-1 text-white'>Detail</button>
        </Link>
        <button onClick={() => deleteBlog(blog?.id)} className='bg-red-600 px-4 py-1 text-white'>Delete</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BlogsCard
