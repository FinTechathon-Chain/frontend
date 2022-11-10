import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Avatar,
  Typography,
  Upload,
  message,
} from "antd";

import { columns, project } from "../components/data/table";
import { ProductsInfo, SellerProductsInfo } from "../components/data/testData";
import { ToTopOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'
import AddProductModal from "./AddProductModal";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-shopify.svg";

const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



const data = ProductsInfo.map((item, index) => (
  {
    key: {index},
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={ava2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>{item.name}</Title>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    address: (
      <>
        <div className="ant-employed">
          <span>{item.address}</span>
        </div>
      </>
    ),
    seller: (
      <>
        <div className="ant-employed">
          <span>{item.seller}</span>
        </div>
      </>
    ),
    amount: (
      <>
        <div className="author-info">
          <Title level={5}>{item.amount}</Title>
        </div>
      </>
    ),
    price: (
      <>
        <div className="author-info">
          <Title level={5}>{item.price}</Title>
        </div>
      </>
    ),
    type: (
      <>
        <div className="author-info">
          <Title level={5}>{item.type}</Title>
        </div>
      </>
    ),
    status: (
      <>
        <Button type="primary" className="tag-primary">
          {item.status}
        </Button>
      </>
    ),
    date: (
      <>
        <div className="ant-employed">
          <span>{item.date}</span>
          <a >添加</a>
        </div>
      </>
    ),
  }

))



const dataproject = SellerProductsInfo.map((item, index) => (
  {
    key: {index},
    name: (
      <>
      <Avatar.Group>
        <Avatar
          className="shape-avatar"
          shape="square"
          size={40}
          src={ava1}
        ></Avatar>
        <div className="avatar-info">
          <Title level={5}>{item.name}</Title>
        </div>
      </Avatar.Group>{" "}
    </>
    ),
    sponsor: (
      <>
      <div className="author-info">
        <Title level={5}>{item.sponsor}</Title>
      </div>
      </>
    ),
    type: (
      <>
        <div className="author-info">
          <Title level={5}>{item.type}</Title>
        </div>
      </>
    ),
    status: (
      <>
        <Button className="tag-badge">{item.status}</Button>
      </>
    ),
    date: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href={`/tables/${index}`}>修改</a>
        </div>
      </>
    ),
    amount: (
      <>
        <div className="semibold">{item.amount}</div>
      </>
    ),
    price: (
      <>
        <div className="semibold">{item.price}</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">{item.address}</div>
      </>
    ),
  }
))



function Tables() {


  return (
    <>      
      <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="商品信息"
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="我的商品"
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              <div className="uploadfile pb-15 shadow-none">
                <AddProductModal />
                {/* <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to Upload
                  </Button>
                </Upload> */}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      </>
    </>
  );
}

export default Tables;
