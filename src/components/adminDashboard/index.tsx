import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Layout, Menu } from "antd";
import { UnorderedListOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { QueryResult, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import MainMiddleNavBar from "../NavBars/MiddleNavBar";
import TopNavBar from "../NavBars/TopNavBar";
import AdminRoutes from "../Route/AdminRoutes";
import { GET_ALL_ORDERS } from "../../graphQL/order/orderQuery";
import { setAllOrders } from "../../state/actions/admin/orderActions";
import { setTimeout } from "timers";

const { Content, Sider } = Layout;

const AdminDashboard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getAllOrders: QueryResult = useQuery(GET_ALL_ORDERS);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    const getOrders = async () => {
      if (!getAllOrders || !getAllOrders.data) {
        return;
      }

      const orders = await getAllOrders.data.getAllOrders;
      dispatch(setAllOrders(orders));
    };
    getOrders();

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [getAllOrders]);

  const handleOnNavigate = (path: string) => {
    history.push(`/admin/${path}`);
  };

  const handleOnNavigateToDashboard = () => {
    history.push("/admin");
  };

  if (isLoading) {
    return (
      <Container fluid={true} className='loading-page'>
        {" "}
        <Spinner animation="grow" />
      </Container>
    );
  }

  return (
    <Container fluid={true}>
      <TopNavBar />
      <MainMiddleNavBar />
      <Layout style={{ backgroundColor: "white" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          theme="light"
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              icon={<AppstoreOutlined />}
              title="Dashboard"
              key={1}
              onClick={() => handleOnNavigateToDashboard()}
            >
              Dashboard
            </Menu.Item>

            <Menu.Item
              icon={<UnorderedListOutlined />}
              title="Order list"
              key={2}
              onClick={() => handleOnNavigate("orders")}
            >
              Order list
            </Menu.Item>

            <Menu.Item
              icon={<UnorderedListOutlined />}
              title="Product list"
              key={3}
              onClick={() => handleOnNavigate("products")}
            >
              product list
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: "0 16px", backgroundColor: "white" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <AdminRoutes />
          </div>
        </Content>
      </Layout>
    </Container>
  );
};

export default AdminDashboard;
