import {  Row, Col, Typography } from 'antd'
import React from 'react'
import AppHeader from './AppHeader'
import CardInformation from './CardInformation'
import Cart from './Cart'

function Payment() {
  return (
    <div>
          <AppHeader />
          <Row  >
              <Col span={10} style={{ marginLeft: "5%"}}>
             <CardInformation />
              </Col>
              <Col  span={6}style={{  marginLeft: "15%"}}>
              <Cart />
              </Col>
          </Row>
    </div>
  )
}

export default Payment