import { ReactElement, FC } from 'react';
import {
  Space,
  Col,
  Row,
  Input,
  Button,
  Table,
  Dropdown,
  MenuProps,
} from 'antd';
import { StarOutlined, StarFilled, MoreOutlined } from '@ant-design/icons';

const { Search } = Input;

interface DataType {
  key: string;
  fav: boolean;
  name: string;
  modified: string;
}
const dataSource: DataType[] = [
  {
    key: '1',
    fav: true,
    name: 'Elastic Scattering',
    modified: 'today',
  },
  {
    key: '2',
    fav: false,
    name: 'Q Value Calculator',
    modified: 'today',
  },
];

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const columns = [
  {
    title: <StarOutlined />,
    dataIndex: 'fav',
    key: 'fav',
    render: (fav: boolean) => (fav ? <StarFilled /> : <StarOutlined />),
    width: '1%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Modified',
    dataIndex: 'modified',
    key: 'modified',
    width: '12%',
  },
  {
    title: 'Actions',
    render: (_: any, item: DataType) => (
      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
        <Button icon={<MoreOutlined />} />
      </Dropdown>
    ),
    width: '1%',
  },
];

const ModelsPage: FC<{}> = (): ReactElement => {
  const onSearch = () => {};
  return (
    <Col>
      <Row justify="end">
        <Space>
          <Search
            placeholder="Search..."
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Button>Open</Button>
          <Button type="primary">New Model</Button>
        </Space>
      </Row>
      <Row style={{ height: '100%' }}>
        <Table
          style={{ height: '100%', width: '100%', marginTop: 20 }}
          dataSource={dataSource}
          columns={columns}
        />
      </Row>
    </Col>
  );
};

export default ModelsPage;
