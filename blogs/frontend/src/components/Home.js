import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {List, Row, Col,Image,Title, Typography, Card, Input, Button, Carousel} from 'antd'
import BlogCard from './BlogCard'



const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:"cover",
    backgroundImage: 'url(https://media.istockphoto.com/photos/remote-work-concept-working-at-home-telework-picture-id1223790456?b=1&k=6&m=1223790456&s=170667a&w=0&h=ws_5eH3nb5dfErTEWwBQyXRb56N0xQKvtAULO4jGR_g=)'
  };
const Home = () => {
    const[allPostsData,setAllPosts]= useState([])
    useEffect(() => {
        console.log("inside useeffect");
        
          axios.get("http://localhost:8000/bloggers")
          .then((res) => {
            console.log(res.data);
            setAllPosts(res.data);
            localStorage.setItem("blogs",JSON.stringify(res.data))
    
          })
          .catch((err) => {
            console.log("errrrrrr+++",err);
            
          });
      }, []);

      function onChange(a, b, c) {
        console.log(a, b, c);
      }
    return (
        <div className="container-fluid" >
            {/* {allPostsData.map((blog)=>{
                <Row>
                    <Col span={6} key={blog.id} className="mt-10 mb-10">
                            <BlogCard id={blog.id} title={blog.title} name={blog.name} description={blog.description} image={blog.image} avatar={blog.author_image} />
                        </Col>


                </Row>
            })} */}
            <div style={{width:"100%", height:"65px",backgroundSize:"cover", backgroundRepeat:"no-repeat",width:"100%",marginBottom:"2px", backgroundImage:"url(https://picsum.photos/seed/picsum/536/354)"}}>
                        <div style={{textAlign:"center",fontSize:"40px"}}>Latest Blogs</div>
                    </div>
            {/* <Carousel afterChange={onChange} autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel> */}
            
            
                    
                    {/* <Card style={{background:"pink", display:"flex"}}>  
                        <Typography style={{fontSize:"20px", display:"flex"}} >Want to get weekly tips??</Typography>
                        <Input type="email" placeholder="Your Email" style={{}}></Input>
                    </Card> */}
                    {/* <h2 style={{borderBottom: "0",marginTop: "4px", textAlign:"center", padding: "10px 0", background: "#003333",color:"white"}}>Some Featured Blogs</h2> */}

                   
                     <Row gutter={16,{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ minHeight: "100vh", marginLeft:"15px", marginTop:"10px" }}>
                        {allPostsData.map((blog) => (
                        <Col span={6} key={blog.id} className="mt-10 mb-10">
                            <BlogCard id={blog.id} title={blog.title} name={blog.name} description={blog.description} image={blog.image} avatar={blog.author_image} />
                        </Col>
                        ))}
                    </Row>
                    <Link to="/bloglist"><Button style={{background:"pink",width:"20%", marginLeft:"40%", marginRight:"40%"}}> See All BlogPosts</Button></Link>

                
        </div>
    )
}

export default Home
