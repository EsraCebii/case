import React, { useEffect, useState } from "react";
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
import { addSeletedPackage, deleteSeletedPackage, getPackages } from "../store/actions/packageAction";

function Package({ item }) {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const handleSelect = () => {
      if(!selected) {
        dispatch(addSeletedPackage(item))
      }else {
          dispatch(deleteSeletedPackage(item.id))
      }
      setSelected(!selected);
  }

  return (
    <Col span={12}>
      <Divider type="vertical" />
      <Card onClick={handleSelect} style={{borderColor: selected ? "#ff0000" : "#ffffff"}}>
        <Row>
          <Col span={12}>
            <Card
              bordered={false}
              cover={<img alt="example" height="200px" src={item.imagePath} />}
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
  );
}

export default Package;
