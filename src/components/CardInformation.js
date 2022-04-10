import {  Card, Col, Form, Input, Row, Typography } from 'antd'
import React from 'react'

function CardInformation() {
  const { Paragraph } = Typography;
  return (
    <Card style={{ width: 700 , marginTop: 100}}>
    <h4>Card Information</h4>
    <Card style={{ marginBottom: 10}}>
    <Form
      layout="vertical"
    >
      <Form.Item label="Card Name" >
        <Input  />
      </Form.Item>
      <Row>
      <Col span={14}><Form.Item style={{marginRight: 5}}
        label="Card Number"
      >
        <Input />
      </Form.Item></Col>
  
      <Col span={4}><Form.Item style={{marginRight: 5}}
        label="Expiration Date"
      >
        <Input />
      </Form.Item></Col>
      <Col span={4}><Form.Item
        label="CVV/CVC"
      >
        <Input />
      </Form.Item></Col>
    </Row>
      
    </Form>
    </Card>
    <h4>Agreement</h4>
    <Card>
   
    <Typography>
    
    <Paragraph>
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    </Paragraph>
    </Typography>
    </Card>

  </Card>
  )
}

export default CardInformation