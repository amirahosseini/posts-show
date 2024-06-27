import React, { useState } from 'react'
import { useEffect } from 'react'
export default function App() { 
  const [posts , setPosts]= useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>response.json())
    .then(data =>{
      setPosts(data)
    })
  },[])
  return (
    <div className="relative overflow-x-auto container m-auto mt-5">
      
      {posts.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    title
                </th>
                <th scope="col" className="px-6 py-3">
                    body
                </th>
            </tr>
        </thead>
        <tbody>
          {posts.map((post)=>{
            return(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {post.id}
                </th>
                <td className="px-6 py-4">
                    {post.title}
                </td>
                <td className="px-6 py-4">
                    {post.body}
                </td>

            </tr>
            )
          })}
        </tbody>
      </table>
      ) : (
        <div>Loading </div>
      )}
    
</div>

  
)}
