// 展示商品
const ProductsInfo = [
    {
        "name": "江苏风电新能源一期",
        "address": "snjw7281!#@", // 区块链地址，相当于id
        "seller": "江苏发电厂",
        "sellerAddress": "snjw7281!98",
        "type": "风电",
        "amount": "60,000 kwh",
        "price": "￥ 60,000",
        "bidding": 0 , // 竞价人数，
        "status": "出售", // 已售、出售、待售
        "date": "23/04/18",
    },
 ]


const BuyerInformation = [
    {
      "company": "江苏造纸厂",
      "address": "FRBw92835476",
      "products":[
        {
          "address": "snjw7281!#@", //买的商品
        }
      ]
    },
  ];

  const SellerInformation = [
    {
      "company": "江苏造纸厂",
      "address": "FRBw92835476",
      "products":[
        {
          "address": "snjw7281!#@", // 卖的商品
        }
      ]
    },
  ];

  // 买家查看商品情况
  const BuyerProductInfo = [
    {
      "orderAddress": "2018003ALK",
      "productName": "江苏风电新能源一期",
      "buyer": "江苏造纸厂",
      "buyerAddress": "FRBw92835476",
      "amount": "384791",
      "price": "￥729876",
      "date": "2019/12/19",
      "status": "竞价中" // 竞价中、竞价失败、竞价成功
    },
  ];

  // 卖家查看商品情况
const SellerProductsInfo = [
    {
        "name": "江苏风电新能源一期",
        "address": "snjw7281!#@",
        "seller": "江苏发电厂",
        "type": "风电",
        "sponsor": "ID:7263839",
        "amount": "60,000 kwh",
        "price": "￥ 60,000",
        "status": "待售",
        "bidding": 0 , // 竞价人数
        "date": "23/04/18",
    },
]


const TransactionData = [
    {
        "title": "A项目1期",
        "transactionID": "abc",
        "description": "#MS-415646",
        "amount": "$180",
        "price": "￥729876",
        "buyerAddress": "kjuuhs", //区块链地址
        "buyerName": "江苏化工厂",
        "downloadURL": "www.baidu.com",
        "date": "2022/12/1"
    },
]

