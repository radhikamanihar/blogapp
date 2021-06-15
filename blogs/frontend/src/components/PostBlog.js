import React, {useEffect, useState} from 'react'
import {Row, Card, Col, Form, Input, Button, message} from 'antd'
import {Link } from 'react-router-dom'
import axios from 'axios'



const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };
  const tailLayout = {
    wrapperCol: { span: 16 },
  };

const PostBlog = () => {
    const [form] =Form.useForm();
    const [formData, setFormData] = useState([]);
    const initialValues={ name:"", title:"" ,description:"", image:"", author_image:""}
    const onFinish = (values) =>{

        setFormData(values)
        // console.log("onfinish executing",formData);
        axios.post("http://localhost:8000/bloggers",values)
        .then((res) =>{
          console.log("data is",res.data)
          setFormData(res.data.id)
          console.log("formdata",formData)
      })
        .catch((err) =>{console.log(err)})
    }
    

    return (
        <div>
          <Row
            style={{
              display: "flex",
              minHeight: "90vh",
              alignItems: "self-start",
              justifyContent: "center",
            }}
          >
          <Card title="Create your own Blog" style={{ background:'#ececec' , width:"600px", margin:"10px auto" ,minWidth:"200", borderRadius:"10px", textAlign:"center"}}>
            <Form
                {...layout}
                form = {form}
                name="addblog"
                initialValues={initialValues}
                onFinish= {onFinish}
            >
                <Form.Item required name="name"  label="Author" style={{width :"500px"}} initialValue={formData.name}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Name!',
                    },
                  ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item required name="title" label="Title" style={{width :"500px"}} initialValue={formData.title}
                  rules={[
                    {
                      required: true,
                      message: 'Please add title of blog!',
                    },
                  ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item required name="description" label="Description" style={{width :"500px"}} initialValue={formData.description}
                  rules={[
                    {
                      required: true,
                      message: 'Please add description of blog!',
                    },
                  ]}
                >
                    {/* <Input.TextArea minLength={50}/> */}
                    <input className="ant-input" minLength="100"/>
                </Form.Item>
                <Form.Item required name="image" label="Post Image" style={{width :"500px"}} initialValue={formData.image}
                  rules={[
                    {
                      required: true,
                      message: 'Please add an image!',
                    },
                  ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item required name="author_image" label="Author Image" style={{width :"500px"}} initialValue={formData.author_image}
                  rules={[
                    {
                      required: true,
                      message: 'Please add your image!',
                    },
                  ]}
                >
                    <Input/>
                </Form.Item>
                <div style={{display:"flex"}}>
                <Form.Item>
                    <Button style={{marginLeft:"200px", borderRadius:"6px"}} type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
                <Form.Item>
                    <Button style={{marginLeft:"20px", borderRadius:"6px"}} type="primary" htmlType="reset">Reset</Button>
                </Form.Item>
                </div>
            </Form>
            </Card>
        </Row>
            
        </div>
    )
}

export default PostBlog
