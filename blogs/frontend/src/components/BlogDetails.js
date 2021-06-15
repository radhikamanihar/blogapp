import { FacebookFilled, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import { Card, Row,Col ,Paragraph, Typography} from 'antd';

import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
const { Title } = Typography;

const BlogDetails = () => {

    const { id } = useParams();
    const [showblog, setShowBlog] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/bloggers/${id}`)
        .then((res) =>{
            console.log("particular blog",res.data)
            setShowBlog(res.data)
            console.log("description is",showblog.description)
        })
        .catch((err)=>{
            console.error(err)
        })

    }, [])
    
    return (
        <>
        
            <Row>
                <Col  md={24} sm={24} style={{margin:"auto"}}>
                   
                        <img style={{width:"100%", height:"500px"}} src={showblog.image}/>
                        <Row style={{textAlign:"center", marginBlock:"10px"}}>
                            <Col span={8}> <Link to="/bloglist">Back To Blog</Link></Col>
                            <Col span={8}> <Link to="/bloglist">Subscribe</Link></Col>
                            <Col span={8}> 
                                <Typography>Share
                                    <Link onClick={
                                        window.open("https://www.instagram.com/")
                                    }><InstagramOutlined/></Link>
                                    <Link onClick={
                                        window.open("https://www.facebook.com/")
                                    }>
                                        <FacebookOutlined/>
                                    </Link>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                        <Title level style={{textAlign:"center", textTransform:"uppercase", float:"left"}}>{showblog.title}</Title>
                        </Row>
                        <Typography>{showblog.description}</Typography>


                    
                </Col>
            </Row>
            
        </>
    )
}

export default BlogDetails
