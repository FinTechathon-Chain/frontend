
import {
  Row,
  Col,
  Card,
  Statistic,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import mastercard from "../assets/images/mastercard-logo.png";
import paypal from "../assets/images/paypal-logo-2.png";
import { BillingData, blockChainAddress, information, NewestInfo, YesterdayInfo } from "../components/data/testData";
import { wifi, angle, download, calender, mins , deletebtn, pencil} from "../assets/svgs/svg";

function Billing() {
 

  const newest = NewestInfo.map((i, index) => (
    {
      headding: <h6>NEWEST</h6>,
      avatar: i.amount < 0 ? mins:<PlusOutlined style={{ fontSize: 10 }} />,
      title: i.title,
      description: i.description,
      amount: i.amount,
      textclass: i.amount <0 ?"text-light-danger":"text-fill",
      amountcolor: i.amount<0?"text-danger":"text-success",
    }
  ))
 
  const yesterday = YesterdayInfo.map((i, index) => (
    {
      avatar: i.amount < 0 ? mins:<PlusOutlined style={{ fontSize: 10 }} />,
      title: i.title,
      description: i.description,
      amount: i.amount,
      textclass: i.amount <0 ?"text-light-danger":"text-fill",
      amountcolor: i.amount<0?"text-danger":"text-success",
    }
  ))
    

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={16}>
          <Row gutter={[24, 0]}>
            <Col xs={24} xl={12} className="mb-24">
              <Card
                title={wifi}
                bordered={false}
                className="card-credit header-solid h-ful"
              >
                <h5 className="card-number">{blockChainAddress}</h5>

                <div className="card-footer">
                  <div className="mr-30">
                    <p>公链</p>
                    <h6>微众区块链</h6>
                  </div>
                  <div className="mr-30">
                    <p>创立日期</p>
                    <h6>11/22</h6>
                  </div>
                  <div className="card-footer-col col-logo ml-auto">
                    <img src={mastercard} alt="mastercard" />
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} xl={6} className="mb-24">
              <Card bordered={false} className="widget-2 h-full">
                <Statistic
                  title={
                    <>
                      <div className="icon">{angle}</div>
                      <h6>总收入</h6>
                    </>
                  }
                  value={"$2,000"}
                  prefix={<PlusOutlined />}
                />
              </Card>
            </Col>
            <Col xs={12} xl={6} className="mb-24">
              <Card bordered={false} className="widget-2 h-full">
                <Statistic
                  title={
                    <>
                      <div className="icon">
                        <img src={paypal} alt="paypal" />
                      </div>
                      <h6>总支出</h6>
                    </>
                  }
                  value={"$49,000"}
                  prefix={<PlusOutlined />}
                />
              </Card>
            </Col>
            
          </Row>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            className="header-solid h-full ant-invoice-card"
            title={[<h6 className="font-semibold m-0">发票</h6>]}
            extra={[
              <Button type="primary">
                <span>查看全部</span>
              </Button>,
            ]}
          >
            <List
              itemLayout="horizontal"
              className="invoice-list"
              dataSource={BillingData}
              renderItem={(item) => (
                <List.Item
                  actions={[<Button type="link">{download} PDF</Button>]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div className="amount">{item.amount}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[<h6 className="font-semibold m-0">买家信息</h6>]}
            bodyStyle={{ paddingTop: "0" }}
          >
            <Row gutter={[24, 24]}>
              {information.map((i, index) => (
                <Col span={24} key={index}>
                  <Card className="card-billing-info" bordered="false">
                    <div className="col-info">
                      <Descriptions title={i.order}>
                        <Descriptions.Item label="购买方" span={3}>
                          {i.company}
                        </Descriptions.Item>
                        <Descriptions.Item label="购买方区块链地址" span={3}>
                          {i.address}
                        </Descriptions.Item>
                        <Descriptions.Item label="成交量" span={3}>
                          {i.amount}
                        </Descriptions.Item>
                        <Descriptions.Item label="成交价格" span={3}>
                          {i.price}
                        </Descriptions.Item>
                        <Descriptions.Item label="成交日期" span={3}>
                          {i.date}
                        </Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className="col-action">
                      <Button type="link" danger>
                        {deletebtn}拒绝
                      </Button>
                      <Button type="link" className="darkbtn">
                        {pencil}成交
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            bodyStyle={{ paddingTop: 0 }}
            className="header-solid h-full  ant-list-yes"
            title={<h6 className="font-semibold m-0">近日成交</h6>}
            extra={
              <p className="card-header-date">
                {calender}
                <span>23 - 30 March 2021</span>
              </p>
            }
          >
            <List
              header={<h6>最新</h6>}
              className="transactions-list ant-newest"
              itemLayout="horizontal"
              dataSource={newest}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="small" className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                  <div className="amount">
                    <span className={item.amountcolor}>{item.amount}</span>
                  </div>
                </List.Item>
              )}
            />

            <List
              className="yestday transactions-list"
              header={<h6>过去7天</h6>}
              itemLayout="horizontal"
              dataSource={yesterday}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="small" className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                  <div className="amount">
                    <span className={item.amountcolor}>{item.amount}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Billing;
