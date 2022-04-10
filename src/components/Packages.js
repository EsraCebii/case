import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../store/actions/packageAction";

function Packages() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.package.data);
  console.log(packages);

  useEffect(() => {
    dispatch(getPackages());
  }, []);
  return (
    <>
      <AppHeader />

      <Card
        style={{
          width: "90%",
          marginLeft: "5%",
          marginTop: "7%",
          borderRadius: 5,
        }}
      >
        <Row gutter={16}>
          {packages.map((item) => (
            <Col span={12}>
              <Divider type="vertical" />
              <Card>
                <Row>
                  <Col span={12}>
                    {" "}
                    <Card
                      bordered={false}
                      cover={
                        <img
                          alt="example"
                          height="200px"
                          src={item.imagePath}
                        />
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <Card
                      bordered={false}
                      actions={[
                        item.tags.map((tag, i) => (
                          <Badge
                            className="site-badge-count-109"
                            status="default"
                            text={tag[i]}
                            title="Ticket 1"
                          />
                        )),
                      ]}
                      style={{ marginLeft: 20 }}
                    >
                      <Row>
                        <Col span={12}>
                          <h3>{item.name}</h3>
                        </Col>
                        <Col span={12} style={{ marginTop: 1 }}>
                          {item.amount} TL
                        </Col>
                      </Row>
                      <div className="menu">
                        {item.details.map((detail, i) => (
                          <li>{detail[i]}</li>
                        ))}
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
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
