import React from 'react';

import './index.css';

import {
  DeploymentUnitOutlined,
  SettingOutlined,
  ToolOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Row, Typography } from 'antd';
import Footer from 'renderer/widgets/footer/ui';
import { useLocation, Link, MemoryRouter as Router } from 'react-router-dom';
import Routing from 'renderer/pages';
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: '/',
    text: 'My Models',
    icon: <DeploymentUnitOutlined />,
    label: <Link to="/">My Models</Link>,
  },
  {
    key: '/sdk',
    icon: <ToolOutlined />,
    text: 'SDK',
    label: <Link to="/sdk">SDK</Link>,
  },
  {
    key: '/docs',
    icon: <ReadOutlined />,
    text: 'Documentation',
    label: <Link to="/docs">Documentation</Link>,
  },
  {
    key: '/settings',
    icon: <SettingOutlined />,
    text: 'Settings',
    label: <Link to="/settings">Settings</Link>,
  },
];

function Head() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = useLocation();
  const titleText = menuItems.find((ti) => ti.key === pathname)?.text ?? '';
  return (
    <Header style={{ background: colorBgContainer }}>
      <Title level={4}>{titleText}</Title>
    </Header>
  );
}

export default function App() {
  return (
    <Router>
      <Layout style={{ height: '100%' }}>
        <Sider collapsedWidth="0">
          <Row align="middle" justify="center" style={{ height: 100 }}>
            <div className="logo" />
          </Row>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Head />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routing />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
}
