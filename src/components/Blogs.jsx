import React from 'react'
import { useGetBlogsQuery } from '../feature/services/blogApi'
import BlogsCard from './BlogsCard'
import { Link } from 'react-router-dom'

const Blogs = () => {
    
    const {data:blogs} = useGetBlogsQuery()
    console.log(blogs)
  return (
    <div className='p-4'>
      <Link to={`/create`}>
      <button className='bg-slate-600 px-6 text-white  py-1'>Create Blogs</button>
      </Link>
      <div className='flex  flex-wrap justify-center  mt-20 gap-10'>
      {
      blogs?.map(blog => {
        return (
            <BlogsCard key={blog.id} blog = {blog} />
        )
      })
      }
    </div>
    </div>
  )
}

export default Blogs
