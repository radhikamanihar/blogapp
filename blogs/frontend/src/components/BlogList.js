import React,{useState, useEffect } from 'react'
import axios from 'axios'
import {Card, Avatar, Row ,Col} from 'antd'
import { Pagination } from 'antd';
import BlogCard from './BlogCard'
import "antd/dist/antd.css";

import {HeartOutlined,CommentOutlined, DislikeOutlined } from '@ant-design/icons'
const { Meta } = Card;
const blogsperPage= 10

const BlogList = () => {
    const [allPostsData, setAllPosts] = useState([]);
    const[totalPage, setTotalPage] = useState(false)
    const[currentpage, setCurrentPage] =useState(1);
    const[minIndex, setMinIndex] =useState(1);
    const[maxIndex, setMaxIndex] =useState(1);
    
    const onChange = (page) =>{
      setCurrentPage(page)
    }
    useEffect(() => {
        
        const data = axios.get("http://localhost:8000/bloggers")
        .then((res) =>{
            console.log("data+++++++",res)
            const data = res.data
            
            setAllPosts(data)
            setTotalPage({
              totalPage : data.length/ blogsperPage
            })
            setMinIndex({minIndex:0})
            setMaxIndex({maxIndex:blogsperPage})
            
            console.log("data is",data)
            
        })
        .catch((err) =>{
            console.log(err)
        })
        
    }, [allPostsData])

    const handleChange = (page) =>{
      setCurrentPage({currentpage:page})
      setMinIndex({minIndex: (page-1)*blogsperPage})
      setMaxIndex({maxIndex: page*blogsperPage})
    }
    return (
      <>
        
        <Row gutter={16,{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{minHeight: "100vh" }}>
        {allPostsData.map((blog) => (
          <Col span={6} key={blog.id} className="mt-10 mb-10">
            <BlogCard id={blog.id} title={blog.title} name={blog.name} description={blog.description} image={blog.image} avatar={blog.author_image} />
          </Col>
        ))}
      </Row>
      <Pagination pageSize={blogsperPage} current={currentpage} total={allPostsData.length} style={{textAlign:"center"}} current={currentpage} onChange={handleChange} total={50} />
      </>
     
    )
}

export default BlogList
