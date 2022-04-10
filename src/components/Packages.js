import React, { useEffect, useState } from "react";
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
import Package from "./Package";

function Packages() {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.package.data);
  const selectedPackages = useSelector((state) => state.package.selectedPackages);
  console.log(selectedPackages);

  const totalAmount = selectedPackages.map(item => item.amount)
  console.log(totalAmount)

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
           <Package item={item} />
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
