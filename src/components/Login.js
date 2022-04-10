import React, { useEffect, useState } from 'react';
import { Form, Input,  Button } from "antd";
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/userAction';
import {   useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values);
    dispatch(login(values));
    navigate("/packages");
    localStorage.setItem("name", values.fullName)

  };
  // useEffect(() => {
  //   data.username && showSuccess("You have successfully logged in!");
  // }, [data.username]);
    
  return (
    <Form
    name="normal_login"
    className="login-form"
    layout="vertical"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    style={{ marginTop: "5%", marginRight: "20%",width: '500px', marginLeft:'35%'}}
  >
    <Form.Item
      name="fullName"
      label= "Name Surname"
      rules={[{ required: true, message: "Please input your fullname!" }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} />
    </Form.Item>
    <Form.Item
      name="email"
      label= "E-mail Address"
      rules={[{ required: true, message: "Please input your email!" }]}
    >
      <Input
        prefix={<MailOutlined className="site-form-item-icon" />}
        type="mail"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
       Go on
      </Button>
    </Form.Item>
  </Form>
  )
}

export default Login