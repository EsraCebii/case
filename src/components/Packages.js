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
  const [totalAmount, setTotalAmount] =useState(0)
  const packages = useSelector((state) => state.package.data);
  const selectedPackages = useSelector((state) => state.package.selectedPackages);
  console.log(selectedPackages);



  useEffect(() => {
    dispatch(getPackages());
  }, []);
  
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < selectedPackages?.length; i++) {
      sum += selectedPackages[i].amount;
    }
    setTotalAmount(sum);
  }, [selectedPackages])
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
          {packages?.map((item) => (
           <Package item={item} />
          ))}
        </Row>
        <Divider type="horizontal" />
        <Row justify="space-between">
          <Col span={12}>
            <Typography>Selected package Amount: {totalAmount} TL</Typography>
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
