import { CheckCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";

function ResultPage() {
  return (
    <Modal title="Result" visible footer={null} closable={false}>
      <div style={{marginLeft: "20%"}}>
       <div style={{ fontSize: "50px", color:"green",marginLeft: "25%"}}>
       <CheckCircleOutlined />
      </div>
      
      <h2>Successfully Completed !</h2>
      </div>
    </Modal>
  );
}

export default ResultPage;
