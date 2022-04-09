import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import Login from "./components/Login";
import Packages from "./components/Packages";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Content >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/packages" element={<Packages />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center", marginBottom: "-50%" }}>
        E-Çözüm Case ©2022 Esra Çebi
      </Footer>
    </Layout>
  );
}

export default App;
