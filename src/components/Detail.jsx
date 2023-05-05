import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetCreateBlogsMutation, useGetSingleBlogsQuery } from '../feature/services/blogApi'

const Detail = () => {
    const {id} = useParams()
    const {data:blog} = useGetSingleBlogsQuery(id)
    // console.log(data)
    
  return (
    <div className='gap-10 mt-24 flex justify-center' >
      <div className='flex flex-col gap-4  w-72 p-4 border-2 '> 
      <img className='w-[300px]' src={blog?.image} />
      <div className='flex flex-wrap gap-4'>
        <h2>{blog?.title}</h2>
        <p>{blog?.desc}</p>
        <div className='flex gap-2'>
        <Link to={`/`}>
            <button className='bg-slate-500  px-6 py-1'>Back</button>
        </Link>
        <Link to={`/edit/${blog?.id}`}>
        <button className='bg-slate-900 text-white px-6 py-1'>Edit</button>
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Detail
