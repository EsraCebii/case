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
              
             <CardInformation />
             
          </Row>
    </div>
  )
}

export default Payment