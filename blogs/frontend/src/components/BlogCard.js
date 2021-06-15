import React from 'react'
import {Card, Avatar, Row } from 'antd'
import {HeartOutlined,CommentOutlined, DislikeOutlined, HeartFilled, ArrowRightOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
const { Meta } = Card;

const BlogCard = (props) => {
  const toggleIcon = () =>{<HeartFilled/>}
   
    return (
        <>
        {console.log("image link",props.image)}
        <Card
          style={{width:"300px", borderRadius:"20px"}}
          cover={
            <img
              style={{width:"300px", height:"200px"}}
              alt="example"
              src={props.image}
            />
          }
          actions={[
            
              <HeartOutlined key="like" onClick={toggleIcon}/>,
              <Link to={"/blog/"+props.id}>
              <CommentOutlined key="comment" />
              </Link>,
              <DislikeOutlined key="dislike" />,
              
          ]}
        >
          <Meta
            avatar={
              <Avatar src={props.avatar} />
            }
            title={props.title}
            description={
              <div>
                <p style={{ marginBottom: "0" }}>Posted by - {props.name}</p>
                <p style={{ marginBottom: "0" }}>{props.description.substring(0,100)}<Link to={"/blog/"+props.id}>Read More</Link></p>
              </div>
            }
          />
          {/* <Card>{<ArrowRightOutlined/>}</Card> */}
        </Card>
      </>
    )
}

export default BlogCard
