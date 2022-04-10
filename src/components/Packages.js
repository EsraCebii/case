import React from "react";
import AppHeader from "./AppHeader";
import {
  Row,
  Col,
  Card,
  Badge,
  Avatar,
  Divider,
  List,
  Typography,
  Button,
} from "antd";
import { Link } from "react-router-dom";

function Packages() {
  const { Meta } = Card;
  return (
    <>
      <AppHeader />

      <Card style={{ width: "800px", marginLeft: "20%", marginTop: "5%" }}>
        <Row gutter={16}>
        
 
          <Col span={12}>
            <Divider type="vertical" />
            <Card
              style={{ marginTop: "20px" }}
              title="Card Name"
              actions={[
                <Badge
                  className="site-badge-count-109"
                  status="default"
                  text="Ticket 1"
                  title="Ticket 1"
                />,
              ]}
            >
              <Meta
                title="Package Name"
                description={
<div className="menu">
                  <li>
                    Detail 1
                  </li>
                  <li>
                  Detail 1
                  </li>
                  <li>
                  Detail 1
                  </li>
                </div>
                }
              />
            </Card>
          </Col>
          
        </Row>
        <Divider type="horizontal" />
        <Row justify="space-between">
          <Col span={12}>
            <Typography>Selected package Amount:100tl</Typography>
          </Col>
          <Col span={4}>
                <Link to={`/payment/`}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Go on
            </Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Packages;
