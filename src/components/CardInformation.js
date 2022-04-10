import {  Card, Col, Form, Input, Row, Typography } from 'antd'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getAgreement} from "../store/actions/agreementAction"
import Cart from './Cart'

function CardInformation() {
  const { Paragraph } = Typography;
  const [form, setForm] = useState({});
  const [totalAmount, setTotalAmount] =useState(0)
  const [selectedIDs, setSelectedIDs] = useState([]);
  const dispatch = useDispatch();
  const agreement = useSelector((state) => state.agreement.data);
  const selectedItems = useSelector((state) => state.selectedPackages);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < selectedItems?.length; i++) {
      sum += selectedItems[i].amount;
    }
    setTotalAmount(sum);
    setForm({...form, totalAmount: totalAmount })
    let packageIds = [...selectedIDs];
    selectedItems?.map(item => {
      packageIds.push(item.id)
    })
    setForm({...form, packageIds: packageIds })
  }, [selectedItems])
  useEffect(() => {
    dispatch(getAgreement())
  }, [])
  
  return (
    <>
    <Col span={10} style={{ marginLeft: "5%"}}>

    <Card style={{ width: 700 , marginTop: 100}}>
    <h4>Card Information</h4>
    <Card style={{ marginBottom: 10}}>
    <Form
      layout="vertical"
    >
      <Form.Item label="Card Name" >
        <Input  value={form.cardHolderName}
              onChange={(e) => setForm({...form, cardHolderName: e.target.value })}  />
      </Form.Item>
      <Row>
      <Col span={14}><Form.Item style={{marginRight: 5}}
        label="Card Number"
      >
        <Input value={form.cardNumber}
              onChange={(e) => setForm({...form, cardNumber: e.target.value })}  />
      </Form.Item></Col>
  
      <Col span={4}><Form.Item style={{marginRight: 5}}
        label="Expiration Date"
      >
        <Input value={form.expireDate}
              onChange={(e) => setForm({...form, expireDate: e.target.value })} />
      </Form.Item></Col>
      <Col span={4}><Form.Item
        label="CVV/CVC"
      >
        <Input value={form.cvv}
              onChange={(e) => setForm({...form, cvv: e.target.value })} />
      </Form.Item></Col>
    </Row>
      
    </Form>
    </Card>
    <h4>Agreement</h4>
    <Card>
   
    <Typography>
    
    <Paragraph>
      {agreement}
    </Paragraph>
    </Typography>
    </Card>

  </Card>
  </Col>
   <Col  span={6}style={{  marginLeft: "15%"}}>
   <Cart form={form}/>
   </Col>
   </>
  )
}

export default CardInformation;