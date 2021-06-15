import React, { useState } from "react";
import {
  Layout,
  Typography,

  Menu,
} from "antd";
import {
    HomeOutlined,
    OrderedListOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";
const {Sider } = Layout;
const { Title } = Typography;


const SideBar = (props) => {
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed} collapsedWidth="0">
          <div style={{color:"white", textAlign:"center",marginBlock:"10px"}} > BlogAPp</div> 
          <div style={{marginLeft:'10px',marginRight:"10px"}}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Link to="/">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            </Link>
            <Link to="/bloglist">
            <Menu.Item key="2" icon={<OrderedListOutlined />}>
              BlogList
            </Menu.Item>
            </Link>
            <Link to="/postblog">
            <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
              Post Blog
            </Menu.Item>
            </Link>
          </Menu>
          </div>
        </Sider>
        
    )
}

export default SideBar
