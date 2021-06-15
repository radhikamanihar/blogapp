import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  
} from '@ant-design/icons';
import "./App.css"
import 'antd/dist/antd.css';
import {BrowserRouter, Link, Redirect, Switch, Route} from 'react-router-dom'
import SideBar from './components/SideBar';
import BlogList from "./components/BlogList"
import PostBlog from "./components/PostBlog"
import BlogDetails from "./components/BlogDetails"
import Home from "./components/Home"


const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () =>{
    setCollapsed(!collapsed)
  }
  return (
    <BrowserRouter>
    <Layout style={{minHeight:"100vh"}}>
        <SideBar collapsed={!collapsed}/>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <UserOutlined style={{float:"right", margin:"20px 20px"}}/>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px 0',
              padding: 24,
              minHeight: 280,
              overflow:"initial"
            }}
          >
            <Switch>
                <Route exact path="/postblog">
                  <PostBlog />
                </Route>
                <Route exact path="/bloglist">
                  <BlogList />
                </Route>
                
                <Route exact path="/blog/:id">
                  <BlogDetails />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                {/* <Redirect to="/"/> */}
              </Switch>
          </Content>
        </Layout>
      </Layout>
      </BrowserRouter>
  )
}

export default App
