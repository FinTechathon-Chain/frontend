/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState, useEffect } from "react";

import {
  Row,
  Col,
  Card,
  Button,
  List,
  Descriptions,
  Avatar,
  Radio,
  Switch,
  Tooltip,
  Upload,
  message,
} from "antd";

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  VerticalAlignTopOutlined,
  CommentOutlined
} from "@ant-design/icons";

import BgProfile from "../assets/images/producer-background-1.jpg";
import profilavatar from "../assets/images/producer-1.jpg";
import convesionImg from "../assets/images/face-1.png";
import convesionImg2 from "../assets/images/face-2.jpg";
import convesionImg3 from "../assets/images/face-3.png";
import convesionImg4 from "../assets/images/face-4.png";
import convesionImg5 from "../assets/images/face-5.png";
import convesionImg6 from "../assets/images/face-6.jpg";
import projectImg1 from "../assets/images/project1.jpg";
import profileProject from '../assets/config/ProfileProject.json'
import profilePublicInfo from '../assets/config/ProfilePublicInfo.json'
import profilePrivateInfo from '../assets/config/ProfilePrivateInfo.json'

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];

function HeadCard(){
  const [headInfo, setHeadInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setHeadInfo(profilePublicInfo);
    };
 
    fetchData();
  }, []);

  return(
    <Card
        className="card-profile-head"
        bodyStyle={{ display: "none" }}
        title={
          <Row justify="space-between" align="middle" gutter={[24, 0]}>
            <Col span={24} md={12} className="col-info">
              <Avatar.Group>
                <Avatar size={74} shape="square" src={profilavatar} />

                <div className="avatar-info">
                  <h4 className="font-semibold m-0">{headInfo.name}</h4>
                  <p>{headInfo.energyType} / {headInfo.location}</p>
                </div>
              </Avatar.Group>
            </Col>
            <Col
              span={24}
              md={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">概览</Radio.Button>
                <Radio.Button value="b">档案信息</Radio.Button>
                <Radio.Button value="c">项目</Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
        }
      ></Card>
  );
}

function PublicInfo(){
  const [publicInfo, setPublicInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPublicInfo(profilePublicInfo);
    };
 
    fetchData();
  }, []);

  return(
    <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">公开信息</h6>}
            className="header-solid h-full card-profile-information"
            extra={<Button type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <p className="text-dark">
              {publicInfo.text}
            </p>
            <hr className="my-25" />
            <Descriptions title="详细信息">
              <Descriptions.Item label="名称" span={3}>
                {publicInfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="固定电话" span={3}>
                {publicInfo.phone}
              </Descriptions.Item>
              <Descriptions.Item label="邮箱" span={3}>          
                {publicInfo.email}
              </Descriptions.Item>
              <Descriptions.Item label="地理位置" span={3}>
                {publicInfo.location}
              </Descriptions.Item>
              <Descriptions.Item label="电源类型" span={3}>
                {publicInfo.energyType}
              </Descriptions.Item>
            </Descriptions>
          </Card>
  );
}

function PrivateInfo(){
  const [privateInfo, setPrivateInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setPrivateInfo(profilePrivateInfo);
    };
 
    fetchData();
  }, []);

  return(
    <Card
            bordered={false}
            title={<h6 className="font-semibold m-0">私有信息</h6>}
            className="header-solid h-full card-profile-information"
            extra={<Button type="link">{pencil}</Button>}
            bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
          >
            <Descriptions>
              <Descriptions.Item label="法定代表人" span={3}>
                {privateInfo.legalRepres}
              </Descriptions.Item>
              <Descriptions.Item label="工商营业执照号" span={3}>
                {privateInfo.businessLicense}
              </Descriptions.Item>
              <Descriptions.Item label="电力业务许可证编号" span={3}>
                {privateInfo.electricPowerLicense}
              </Descriptions.Item>
              <Descriptions.Item label="许可证生效时间" span={3}>          
                {privateInfo.EPLValidTime}
              </Descriptions.Item>
              <Descriptions.Item label="许可证失效时间" span={3}>
                {privateInfo.EPLInvalidTime}
              </Descriptions.Item>
              <Descriptions.Item label="机组类型" span={3}>
                {privateInfo.turbineType}
              </Descriptions.Item>
              <Descriptions.Item label="机组型号" span={3}>
                {privateInfo.turbineDetailedType}
              </Descriptions.Item>
              <Descriptions.Item label="机组数量" span={3}>
                {privateInfo.turbineNumber}台
              </Descriptions.Item>
              <Descriptions.Item label="额定容量" span={3}>
                {privateInfo.capacity}MW
              </Descriptions.Item>
              <Descriptions.Item label="最大技术出力" span={3}>
                {privateInfo.maxOutput}MW
              </Descriptions.Item>
              <Descriptions.Item label="最小技术出力" span={3}>
                {privateInfo.minOutput}MW
              </Descriptions.Item>
              <Descriptions.Item label="接入电压" span={3}>
                {privateInfo.voltage}V
              </Descriptions.Item>
              <Descriptions.Item label="调度关系" span={3}>
                {privateInfo.dispatch}
              </Descriptions.Item>
            </Descriptions>
          </Card>
  );
}

function Project(){
  const [projects, setProjects] = useState([]);
  const [imageURL, setImageURL] = useState(false);
  const [, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageURL(false);
      });
    }
  };
  
  const uploadButton = (
    <div className="ant-upload-text font-semibold text-dark">
      {<VerticalAlignTopOutlined style={{ width: 20, color: "#000" }} />}
      <div>上传新项目</div>
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      setProjects(profileProject);
    };
 
    fetchData();
  }, []);

  return (
      <Row gutter={[24, 24]}>
        {projects.map((p, index) => (
          <Col span={24} md={12} xl={6} key={index}>
            <Card
              bordered={false}
              className="card-project"
              cover={<img src={projectImg1} alt="example" />}
            >
              <h5>{p.title}</h5>
              <Descriptions>
                <Descriptions.Item label="交易Hash值" span={3}>
                  {p.txHash}
                </Descriptions.Item>
                <Descriptions.Item label="成交时间" span={3}>
                  {p.txTime}
                </Descriptions.Item>
                <Descriptions.Item label="成交价格" span={3}>
                  {p.txPrice}元/兆瓦时
                </Descriptions.Item>
                <Descriptions.Item label="安全校核" span={3}>
                  {p.checkedBy}
                </Descriptions.Item>
              </Descriptions>
              <Row gutter={[6, 0]} className="card-footer">
                <Col span={12}>
                  <Button type="button">查看项目详情</Button>
                </Col>
                {/* <Col span={12} className="text-right">
                  <Avatar.Group className="avatar-chips">
                    <Avatar size="small" src={profilavatar} />
                    <Avatar size="small" src={convesionImg} />
                    <Avatar size="small" src={convesionImg2} />
                    <Avatar size="small" src={convesionImg3} />
                  </Avatar.Group>
                </Col> */}
              </Row>
            </Card>
          </Col>
        ))}
        <Col span={24} md={12} xl={6}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader projects-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageURL ? (
              <img src={imageURL} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Col>
      </Row>
  )
}

function Talks(){
  //聊天信息
  const data = [
    {
      title: "广州风神汽车有限公司",
      avatar: convesionImg,
      description: "你好！我想了解一下贵公司...",
    },
    {
      title: "广汽本田汽车有限公司",
      avatar: convesionImg2,
      description: "我司有意向购买22年11月至...",
    },
    {
      title: "大唐京津冀能源营销有限公司",
      avatar: convesionImg3,
      description: "贵公司的能源看起来很不错...",
    },
    {
      title: "陕西帝源电力能源科技有限公司",
      avatar: convesionImg4,
      description: "有意向达成长期合作，请回...",
    },
    {
      title: "四川远成通达售电有限公司",
      avatar: convesionImg5,
      description: "电力短缺，亟需供应，有意...",
    },
    {
      title: "国网浙江省电力有限公司",
      avatar: convesionImg6,
      description: "需要代理购买电量2000MW...",
    },
  ];

  return (
      <Card
      bordered={false}
      title={<h6 className="font-semibold m-0">协商沟通</h6>}
      className="header-solid h-full"
      bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        split={false}
        className="conversations-list"
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar shape="square" size={48} src={item.avatar} />
              }
              title={item.title}
              description={item.description}
            />
            <Tooltip title="回复">
              <Button type="link" size="small" shape="circle" icon={<CommentOutlined style={{ fontSize: '20px'}} />}></Button>
            </Tooltip>
          </List.Item>
        )}
      />
    </Card>
  )
}


function Profile() {
  return (
    <>
      <div
        className="profile-nav-bg"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <HeadCard></HeadCard>

      <Row gutter={[24, 0]}>
        <Col span={24} md={8} className="mb-24 ">
          <PublicInfo></PublicInfo>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <PrivateInfo></PrivateInfo>
        </Col>
        <Col span={24} md={8} className="mb-24">
          <Talks></Talks>
        </Col>
      </Row>
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">展示项目</h6>
            <p>已完成优秀项目</p>
          </>
        }
      >
        <Project></Project>
      </Card>
    </>
  );
}

export default Profile;
