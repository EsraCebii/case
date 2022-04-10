import React from 'react'
import { Header } from 'antd/lib/layout/layout';
import { Menu, Row,Col} from 'antd';
import {  useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';

function AppHeader() {
    const { data, loading}=useSelector((state)=> state.user)
    const username = localStorage.getItem("name")
  return (
    <Header style={{ position: "fixed", zIndex:1, width: "100%",backgroundColor: "white"}}>

    <Menu theme="light" mode="vertical"   >
    <Row >
      <Col  span={8} > <Menu.Item  key="logo"><img src="https://www.ecozum.com.tr/wp-content/uploads/2018/04/e%C3%A7%C3%B6z%C3%BCm-logo.png" /></Menu.Item></Col>
      <Col  span={8} offset={8} style={{marginTop: 5}} >
        
      <Menu.Item key="kullanıcı"  icon={<UserOutlined />} >{username}</Menu.Item>
      </Col>
    </Row>

      {data?.username &&
      <React.Fragment>
           
        <Menu.Item key="/records">esra</Menu.Item>
      </React.Fragment> 
      }
    </Menu>
  </Header>
  )
}

export default AppHeader