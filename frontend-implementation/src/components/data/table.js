// table code start
const Columns = [
    {
      title: "商品名称",
      dataIndex: "name",
      key: "name",
      // width: "32%",
    },
    {
      title: "区块链地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "发布者",
      dataIndex: "seller",
      key: "seller",
    },
    {
      title: "分类",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "电量",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "发布日期",
      key: "date",
      dataIndex: "date",
    },
  ];

  // seller table start
const Project = [
    {
      title: "商品名称",
      dataIndex: "name",
      // width: "32%",
    },
    {
      title: "区块链地址",
      dataIndex: "address",
    },
    {
      title: "负责人",
      dataIndex: "sponsor",
    },
    {
      title: "分类",
      dataIndex: "type",
    },
    {
      title: "电量",
      dataIndex: "amount",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
    {
      title: "状态",
      dataIndex: "status",
    },
    {
      title: "发布日期",
      key: "date",
      dataIndex: "date",
    },
  ];

  export const columns = Columns
  export const project = Project