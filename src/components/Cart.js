import React, { useEffect, useState } from 'react';
import {  Button, Card, List} from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Agreement() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const selectedPackages = useSelector((state) => state.package.selectedPackages);

  
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
  <Link to="/success">
      <Button type="primary" htmlType="submit" className="pay-button">
      Pay
      </Button>
      </Link>

    </Card>

  </Card>
  )
}

export default Agreement