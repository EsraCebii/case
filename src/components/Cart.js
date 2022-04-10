import React from 'react';
import {  Button, Card, List} from 'antd'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pay } from '../store/actions/payAction';

function Agreement({form}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedPackages = useSelector((state) => state.package.selectedPackages);
 const handlePay = () => {
   dispatch(pay(form))
   navigate("/success")
 }
  
  return (
    <Card style={{ width: 500 , marginTop: 100}}>
    <h4>Products in the Cart</h4>
    <Card>
    <List
          dataSource={selectedPackages}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.name}
              />
              <div>{item.amount} TL</div>
            </List.Item>
          )}
        />
      <Button type="primary" htmlType="submit" className="pay-button" onClick={handlePay}>
      Pay
      </Button>

    </Card>

  </Card>
  )
}

export default Agreement