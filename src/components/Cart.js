import React, { useEffect, useState } from 'react';
import {  Button, Card, List} from 'antd'
import { Link } from 'react-router-dom';

function Agreement() {
  const [data, setData] = useState([]);
  
  const appendData = () => {
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    .then(res => res.json())
    .then(body => {
      setData([...data, ...body.results]);
    })
  };

  useEffect(() => {
    appendData();
  }, []);
  return (
    <Card style={{ width: 500 , marginTop: 100}}>
    <h4>Products in the Cart</h4>
    <Card>
    <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.name.last}
                description={item.email}
              />
              <div>Content</div>
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