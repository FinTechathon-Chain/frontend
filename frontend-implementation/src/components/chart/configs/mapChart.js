// var uploadedDataURL = "/asset/get/s/data-1600999122031-HzRw72b9f.png";

// var uploadedDataURL = "/asset/get/s/data-1600999085357-4Z3koBKlT.png";
const mapChart = {
    backgroundColor: '#000000',
    tooltip: {
        triggerOn: "onmousemove",
    },
    color: ['#00D8FF', '#FF4343'],
    legend: {
        orient: 'horizontal',
        top: '20%',
        left: 'center',
        data: [{
            name: '生猪',
            // icon: 'image:///asset/get/s/data-1600999085357-4Z3koBKlT.png'
        }, {
            name: '白条',
            // icon: 'image:///asset/get/s/data-1600999122031-HzRw72b9f.png'
        }],
        selectedMode: 'multiple',
        textStyle: {
            fontStyle: 'lighter',
            color: '#fff',
            fontSize: 12,
            padding: [0, 20, 0, 3]

        },
        itemHeight: 8,
        itemWidth: 30
    },

    geo: {
        map: 'china',
        //调整以下3个配置项与页面地图重合
        // aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
        // center: [104.29, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
        // zoom: 1.00, //放大级别
        // roam:true,
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                areaColor: 'rgba(23,30,59,0.8)',
                borderWidth: 0.8, //设置外层边框
                borderColor: '#223055',

            },
            emphasis: {
                areaColor: 'rgba(23,30,59,0.8)',
                borderWidth: 0.8, //设置外层边框
                borderColor: '#223055',
            }
        },
        emphasis: {
            label: {
                show: false,
            }
        }
    },
    series: [{
            name: '中华人民共和国',
            mapType: 'china',
            type: 'map',
            roam: true,
            show: true,
            //调整以下3个配置项与页面地图重合
            // aspectScale: 1,			//echarts地图的长宽比（就是胖瘦）
            center: [104.29, 35.8], //设置可见中心坐标，以此坐标来放大和缩小
            // zoom: 1, //放大级别
            tooltip: {
                show: false
            },
            label: {
                show: false
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(20,30,64,0)',

                    borderWidth: 1.6, //设置外层边框
                    borderColor: 'rgba(28,199,242,0.9)',
                    shadowBlur: 5,
                    shadowColor: '#4682B4',
                    shadowOffsetY: 6,
                },
                emphasis: {
                    areaColor: 'rgba(20,30,64,0)',

                    borderWidth: 1.6, //设置外层边框
                    borderColor: 'rgba(28,199,242,0.9)',
                    shadowBlur: 5,
                    shadowColor: '#4682B4',
                    shadowOffsetY: 6,
                }
            },
            emphasis: {
                label: {
                    show: false,
                }
            }
        },
//         {
//             name: '白条',
//             type: 'lines',
//             zlevel: 2,
//             tooltip: {
//                 formatter: function(param) {
//                     return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
//                 }
//             },
//             effect: {
//                 show: true,
//                 period: 3, //箭头指向速度，值越小速度越快
//                 trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
//                 symbol: 'arrow', //箭头图标
//                 symbolSize: 5, //图标大小
//             },
//             lineStyle: {
//                 normal: {
//                     color: {
//                         type: 'linear',
//                         x: 1,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [{
//                             offset: 0,
//                             color: 'rgba(255,67,67,0.1)' // 0% 处的颜色
//                         }, {
//                             offset: 1,
//                             color: 'rgba(255,67,67,1)' // 100% 处的颜色
//                         }],
//                         global: false // 缺省为 false
//                     },
//                     // color: '#E0474D'
//                     /* function (value){ //随机颜色
                        
//                         ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
//                         '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
//                         '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
//                         '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
//                         '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
//                         '#52b9c7','#4fb6d2','#4ab2e5']
//  return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
//  },*/

//                     width: 2, //线条宽度
//                     opacity: 0.1, //尾迹线条透明度
//                     curveness: .3 //尾迹线条曲直度
//                 },
//                 emphasis: {
//                     width: 3,
//                     opacity: 0.5,
//                 }
//             },
//             data: [{
//                 fromName: '合肥',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [118.8062, 31.9208],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '拉萨',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [127.9688, 45.368],
//                     [119.4543, 25.9222]
//                 ]

//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [110.3467, 41.4899],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [125.8154, 44.2584],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [116.4551, 40.2539],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [123.1238, 42.1216],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [114.4995, 38.1006],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [117.4219, 39.4189],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [112.3352, 37.9413],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [109.1162, 34.2004],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [103.5901, 36.3043],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [106.3586, 38.1775],
//                     [119.4543, 25.9222]
//                 ]
//             }, {
//                 fromName: '吉林',
//                 toName: '上海',
//                 count: '1',
//                 amount: '89999',
//                 coords: [
//                     [101.4038, 36.8207],
//                     [119.4543, 25.9222]
//                 ]
//             }]
//         },
//         {
//             name: '生猪',
//             type: 'lines',
//             zlevel: 2,
//             tooltip: {
//                 formatter: function(param) {
//                     return param.data.fromName + '->' + param.data.toName + '<br>订单数：' + param.data.count + ' 条<br>订单总金额：' + parseFloat(param.data.amount).toFixed(2) + ' 元'
//                 }
//             },
//             effect: {
//                 show: true,
//                 period: 3, //箭头指向速度，值越小速度越快
//                 trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
//                 symbol: 'circle', //箭头图标
//                 symbolSize: 4, //图标大小
//             },
//             lineStyle: {
//                 normal: {
//                     color: {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 1,
//                         y2: 1,

//                         colorStops: [{
//                             offset: 0,
//                             color: 'rgba(33,168,230,0.1)' // 0% 处的颜色
//                         }, {
//                             offset: 1,
//                             color: 'rgba(33,168,230,1)' // 100% 处的颜色
//                         }],
//                         global: false // 缺省为 false
//                     },
//                     width: 1.5, //线条宽度
//                     opacity: 0.2, //尾迹线条透明度
//                     curveness: 0.3 //尾迹线条曲直度
//                 },
//                 emphasis: {
//                     width: 3,
//                     opacity: 0.5,
//                 }
//             },
//             data: [{
//                 "fromName": "天津",
//                 "toName": "天津",
//                 "coords": [
//                     [117.19, 39.1256],
//                     [117.19, 39.1256]
//                 ],
//                 "count": 1,
//                 "amount": 9544
//             }, {
//                 "fromName": "唐山",
//                 "toName": "沧州",
//                 "coords": [
//                     [118.175, 39.6351],
//                     [116.857, 38.3106]
//                 ],
//                 "count": 1,
//                 "amount": 188
//             }, {
//                 "fromName": "太原",
//                 "toName": "临汾",
//                 "coords": [
//                     [112.549, 37.857],
//                     [111.518, 36.0841]
//                 ],
//                 "count": 1,
//                 "amount": 550
//             }, {
//                 "fromName": "太原",
//                 "toName": "吕梁",
//                 "coords": [
//                     [112.549, 37.857],
//                     [111.134, 37.5244]
//                 ],
//                 "count": 1,
//                 "amount": 7297
//             }, {
//                 "fromName": "锦州",
//                 "toName": "朝阳",
//                 "coords": [
//                     [121.136, 41.1193],
//                     [120.451, 41.5768]
//                 ],
//                 "count": 1,
//                 "amount": 1635
//             }, {
//                 "fromName": "锦州",
//                 "toName": "茂名",
//                 "coords": [
//                     [121.136, 41.1193],
//                     [110.919, 21.6597]
//                 ],
//                 "count": 1,
//                 "amount": 122
//             }, {
//                 "fromName": "长春",
//                 "toName": "松原",
//                 "coords": [
//                     [125.325, 43.8868],
//                     [124.824, 45.1182]
//                 ],
//                 "count": 1,
//                 "amount": 190
//             }, {
//                 "fromName": "南通",
//                 "toName": "盐城",
//                 "coords": [
//                     [120.865, 32.0162],
//                     [120.14, 33.3776]
//                 ],
//                 "count": 1,
//                 "amount": 5807
//             }, {
//                 "fromName": "连云港",
//                 "toName": "盐城",
//                 "coords": [
//                     [119.179, 34.6],
//                     [120.14, 33.3776]
//                 ],
//                 "count": 1,
//                 "amount": 24
//             }, {
//                 "fromName": "蚌埠",
//                 "toName": "宿州",
//                 "coords": [
//                     [117.363, 32.9397],
//                     [116.984, 33.6339]
//                 ],
//                 "count": 1,
//                 "amount": 1354
//             }, {
//                 "fromName": "福州",
//                 "toName": "莆田",
//                 "coords": [
//                     [119.306, 26.0753],
//                     [119.008, 25.431]
//                 ],
//                 "count": 1,
//                 "amount": 985
//             }, {
//                 "fromName": "景德镇",
//                 "toName": "抚州",
//                 "coords": [
//                     [117.215, 29.2926],
//                     [116.358, 27.9839]
//                 ],
//                 "count": 1,
//                 "amount": 787
//             }, {
//                 "fromName": "青岛",
//                 "toName": "潍坊",
//                 "coords": [
//                     [120.355, 36.083],
//                     [119.107, 36.7093]
//                 ],
//                 "count": 1,
//                 "amount": 6052
//             }, {
//                 "fromName": "枣庄",
//                 "toName": "临沂",
//                 "coords": [
//                     [117.558, 34.8564],
//                     [118.326, 35.0653]
//                 ],
//                 "count": 1,
//                 "amount": 1037
//             }, {
//                 "fromName": "郑州",
//                 "toName": "新乡",
//                 "coords": [
//                     [113.665, 34.758],
//                     [113.884, 35.3026]
//                 ],
//                 "count": 1,
//                 "amount": 95
//             }, {
//                 "fromName": "郑州",
//                 "toName": "周口",
//                 "coords": [
//                     [113.665, 34.758],
//                     [114.65, 33.6204]
//                 ],
//                 "count": 1,
//                 "amount": 1702
//             }, {
//                 "fromName": "开封",
//                 "toName": "周口",
//                 "coords": [
//                     [114.341, 34.7971],
//                     [114.65, 33.6204]
//                 ],
//                 "count": 1,
//                 "amount": 902
//             }, {
//                 "fromName": "平顶山",
//                 "toName": "周口",
//                 "coords": [
//                     [113.308, 33.7352],
//                     [114.65, 33.6204]
//                 ],
//                 "count": 1,
//                 "amount": 16802
//             }, {
//                 "fromName": "新乡",
//                 "toName": "郑州",
//                 "coords": [
//                     [113.884, 35.3026],
//                     [113.665, 34.758]
//                 ],
//                 "count": 1,
//                 "amount": 39
//             }, {
//                 "fromName": "新乡",
//                 "toName": "鹤壁",
//                 "coords": [
//                     [113.884, 35.3026],
//                     [114.295, 35.7482]
//                 ],
//                 "count": 1,
//                 "amount": 15600
//             }, {
//                 "fromName": "武汉",
//                 "toName": "宜昌",
//                 "coords": [
//                     [114.299, 30.5844],
//                     [111.291, 30.7026]
//                 ],
//                 "count": 1,
//                 "amount": 575
//             }, {
//                 "fromName": "成都",
//                 "toName": "内江",
//                 "coords": [
//                     [104.066, 30.6595],
//                     [105.066, 29.5871]
//                 ],
//                 "count": 1,
//                 "amount": 126
//             }, {
//                 "fromName": "成都",
//                 "toName": "眉山",
//                 "coords": [
//                     [104.066, 30.6595],
//                     [103.832, 30.0483]
//                 ],
//                 "count": 1,
//                 "amount": 5600
//             }, {
//                 "fromName": "铜川",
//                 "toName": "泸州",
//                 "coords": [
//                     [108.98, 34.9166],
//                     [105.443, 28.8891]
//                 ],
//                 "count": 1,
//                 "amount": 728
//             }, {
//                 "fromName": "铜川",
//                 "toName": "眉山",
//                 "coords": [
//                     [108.98, 34.9166],
//                     [103.832, 30.0483]
//                 ],
//                 "count": 1,
//                 "amount": 1003
//             }, {
//                 "fromName": "保定",
//                 "toName": "沧州",
//                 "coords": [
//                     [115.482, 38.8677],
//                     [116.857, 38.3106]
//                 ],
//                 "count": 1,
//                 "amount": 231
//             }, {
//                 "fromName": "沧州",
//                 "toName": "唐山",
//                 "coords": [
//                     [116.857, 38.3106],
//                     [118.175, 39.6351]
//                 ],
//                 "count": 1,
//                 "amount": 378
//             }, {
//                 "fromName": "朝阳",
//                 "toName": "锦州",
//                 "coords": [
//                     [120.451, 41.5768],
//                     [121.136, 41.1193]
//                 ],
//                 "count": 1,
//                 "amount": 890
//             }, {
//                 "fromName": "朝阳",
//                 "toName": "盐城",
//                 "coords": [
//                     [120.451, 41.5768],
//                     [120.14, 33.3776]
//                 ],
//                 "count": 1,
//                 "amount": 120
//             }, {
//                 "fromName": "四平",
//                 "toName": "松原",
//                 "coords": [
//                     [124.371, 43.1703],
//                     [124.824, 45.1182]
//                 ],
//                 "count": 1,
//                 "amount": 46
//             }, {
//                 "fromName": "宿迁",
//                 "toName": "亳州",
//                 "coords": [
//                     [118.275, 33.963],
//                     [115.783, 33.8693]
//                 ],
//                 "count": 1,
//                 "amount": 40
//             }, {
//                 "fromName": "阜阳",
//                 "toName": "亳州",
//                 "coords": [
//                     [115.82, 32.897],
//                     [115.783, 33.8693]
//                 ],
//                 "count": 1,
//                 "amount": 316
//             }, {
//                 "fromName": "宿州",
//                 "toName": "蚌埠",
//                 "coords": [
//                     [116.984, 33.6339],
//                     [117.363, 32.9397]
//                 ],
//                 "count": 1,
//                 "amount": 1441
//             }, {
//                 "fromName": "宿州",
//                 "toName": "亳州",
//                 "coords": [
//                     [116.984, 33.6339],
//                     [115.783, 33.8693]
//                 ],
//                 "count": 1,
//                 "amount": 311
//             }, {
//                 "fromName": "龙岩",
//                 "toName": "南平",
//                 "coords": [
//                     [117.03, 25.0916],
//                     [118.178, 26.6356]
//                 ],
//                 "count": 1,
//                 "amount": 40923
//             }, {
//                 "fromName": "赣州",
//                 "toName": "衢州",
//                 "coords": [
//                     [114.94, 25.851],
//                     [118.873, 28.9417]
//                 ],
//                 "count": 1,
//                 "amount": 692
//             }, {
//                 "fromName": "临沂",
//                 "toName": "潍坊",
//                 "coords": [
//                     [118.326, 35.0653],
//                     [119.107, 36.7093]
//                 ],
//                 "count": 1,
//                 "amount": 2330
//             }, {
//                 "fromName": "南阳",
//                 "toName": "郑州",
//                 "coords": [
//                     [112.541, 32.9991],
//                     [113.665, 34.758]
//                 ],
//                 "count": 1,
//                 "amount": 6580
//             }, {
//                 "fromName": "荆门",
//                 "toName": "武汉",
//                 "coords": [
//                     [112.204, 31.0354],
//                     [114.299, 30.5844]
//                 ],
//                 "count": 1,
//                 "amount": 3920
//             }, {
//                 "fromName": "荆门",
//                 "toName": "省直辖县级行政区划",
//                 "coords": [
//                     [112.204, 31.0354],
//                     [114.299, 30.5844]
//                 ],
//                 "count": 1,
//                 "amount": 300
//             }, {
//                 "fromName": "岳阳",
//                 "toName": "益阳",
//                 "coords": [
//                     [113.133, 29.3703],
//                     [112.355, 28.5701]
//                 ],
//                 "count": 1,
//                 "amount": 6401
//             }, {
//                 "fromName": "玉林",
//                 "toName": "太原",
//                 "coords": [
//                     [110.154, 22.6314],
//                     [112.549, 37.857]
//                 ],
//                 "count": 1,
//                 "amount": 1
//             }, {
//                 "fromName": "玉林",
//                 "toName": "锦州",
//                 "coords": [
//                     [110.154, 22.6314],
//                     [121.136, 41.1193]
//                 ],
//                 "count": 1,
//                 "amount": 109
//             }, {
//                 "fromName": "玉林",
//                 "toName": "重庆",
//                 "coords": [
//                     [110.154, 22.6314],
//                     [106.505, 29.5332]
//                 ],
//                 "count": 1,
//                 "amount": 1
//             }, {
//                 "fromName": "重庆",
//                 "toName": "重庆",
//                 "coords": [
//                     [106.505, 29.5332],
//                     [106.505, 29.5332]
//                 ],
//                 "count": 1,
//                 "amount": 7726
//             }, {
//                 "fromName": "泸州",
//                 "toName": "成都",
//                 "coords": [
//                     [105.443, 28.8891],
//                     [104.066, 30.6595]
//                 ],
//                 "count": 1,
//                 "amount": 8793
//             }, {
//                 "fromName": "泸州",
//                 "toName": "自贡",
//                 "coords": [
//                     [105.443, 28.8891],
//                     [104.773, 29.3528]
//                 ],
//                 "count": 1,
//                 "amount": 1474
//             }, {
//                 "fromName": "泸州",
//                 "toName": "眉山",
//                 "coords": [
//                     [105.443, 28.8891],
//                     [103.832, 30.0483]
//                 ],
//                 "count": 1,
//                 "amount": 3560
//             }, {
//                 "fromName": "德阳",
//                 "toName": "资阳",
//                 "coords": [
//                     [104.399, 31.128],
//                     [104.642, 30.1222]
//                 ],
//                 "count": 1,
//                 "amount": 4967
//             }, {
//                 "fromName": "绵阳",
//                 "toName": "德阳",
//                 "coords": [
//                     [104.742, 31.464],
//                     [104.399, 31.128]
//                 ],
//                 "count": 1,
//                 "amount": 390
//             }, {
//                 "fromName": "绵阳",
//                 "toName": "广元",
//                 "coords": [
//                     [104.742, 31.464],
//                     [105.83, 32.4337]
//                 ],
//                 "count": 1,
//                 "amount": 24026
//             }, {
//                 "fromName": "绵阳",
//                 "toName": "宜宾",
//                 "coords": [
//                     [104.742, 31.464],
//                     [104.631, 28.7602]
//                 ],
//                 "count": 1,
//                 "amount": 324
//             }, {
//                 "fromName": "遂宁",
//                 "toName": "绵阳",
//                 "coords": [
//                     [105.571, 30.5133],
//                     [104.742, 31.464]
//                 ],
//                 "count": 1,
//                 "amount": 280
//             }, {
//                 "fromName": "遂宁",
//                 "toName": "广元",
//                 "coords": [
//                     [105.571, 30.5133],
//                     [105.83, 32.4337]
//                 ],
//                 "count": 1,
//                 "amount": 55
//             }, {
//                 "fromName": "宜宾",
//                 "toName": "重庆",
//                 "coords": [
//                     [104.631, 28.7602],
//                     [106.505, 29.5332]
//                 ],
//                 "count": 1,
//                 "amount": 310
//             }, {
//                 "fromName": "宜宾",
//                 "toName": "泸州",
//                 "coords": [
//                     [104.631, 28.7602],
//                     [105.443, 28.8891]
//                 ],
//                 "count": 1,
//                 "amount": 1101
//             }, {
//                 "fromName": "阿坝藏族羌族自治州",
//                 "toName": "内江",
//                 "coords": [
//                     [102.221, 31.8998],
//                     [105.066, 29.5871]
//                 ],
//                 "count": 1,
//                 "amount": 228
//             }, {
//                 "fromName": "渭南",
//                 "toName": "平凉",
//                 "coords": [
//                     [109.503, 34.4994],
//                     [106.685, 35.5428]
//                 ],
//                 "count": 1,
//                 "amount": 1043
//             }, {
//                 "fromName": "延安",
//                 "toName": "渭南",
//                 "coords": [
//                     [109.491, 36.5965],
//                     [109.503, 34.4994]
//                 ],
//                 "count": 1,
//                 "amount": 143
//             }, {
//                 "fromName": "运城",
//                 "toName": "太原",
//                 "coords": [
//                     [111.004, 35.0228],
//                     [112.549, 37.857]
//                 ],
//                 "count": 1,
//                 "amount": 1108
//             }, {
//                 "fromName": "临汾",
//                 "toName": "太原",
//                 "coords": [
//                     [111.518, 36.0841],
//                     [112.549, 37.857]
//                 ],
//                 "count": 1,
//                 "amount": 416
//             }, {
//                 "fromName": "六安",
//                 "toName": "合肥",
//                 "coords": [
//                     [116.508, 31.7529],
//                     [117.283, 31.8612]
//                 ],
//                 "count": 1,
//                 "amount": 42553
//             }, {
//                 "fromName": "六安",
//                 "toName": "蚌埠",
//                 "coords": [
//                     [116.508, 31.7529],
//                     [117.363, 32.9397]
//                 ],
//                 "count": 1,
//                 "amount": 37493
//             }, {
//                 "fromName": "亳州",
//                 "toName": "阜阳",
//                 "coords": [
//                     [115.783, 33.8693],
//                     [115.82, 32.897]
//                 ],
//                 "count": 1,
//                 "amount": 22573
//             }, {
//                 "fromName": "抚州",
//                 "toName": "景德镇",
//                 "coords": [
//                     [116.358, 27.9839],
//                     [117.215, 29.2926]
//                 ],
//                 "count": 1,
//                 "amount": 457
//             }, {
//                 "fromName": "抚州",
//                 "toName": "邵阳",
//                 "coords": [
//                     [116.358, 27.9839],
//                     [111.469, 27.2378]
//                 ],
//                 "count": 1,
//                 "amount": 1348
//             }, {
//                 "fromName": "抚州",
//                 "toName": "上饶",
//                 "coords": [
//                     [116.358, 27.9839],
//                     [117.971, 28.4444]
//                 ],
//                 "count": 1,
//                 "amount": 120
//             }, {
//                 "fromName": "周口",
//                 "toName": "郑州",
//                 "coords": [
//                     [114.65, 33.6204],
//                     [113.665, 34.758]
//                 ],
//                 "count": 1,
//                 "amount": 1402
//             }, {
//                 "fromName": "驻马店",
//                 "toName": "郑州",
//                 "coords": [
//                     [114.025, 32.9802],
//                     [113.665, 34.758]
//                 ],
//                 "count": 1,
//                 "amount": 2105
//             }, {
//                 "fromName": "驻马店",
//                 "toName": "南阳",
//                 "coords": [
//                     [114.025, 32.9802],
//                     [112.541, 32.9991]
//                 ],
//                 "count": 1,
//                 "amount": 145976
//             }, {
//                 "fromName": "眉山",
//                 "toName": "成都",
//                 "coords": [
//                     [103.832, 30.0483],
//                     [104.066, 30.6595]
//                 ],
//                 "count": 1,
//                 "amount": 252
//             }, {
//                 "fromName": "眉山",
//                 "toName": "资阳",
//                 "coords": [
//                     [103.832, 30.0483],
//                     [104.642, 30.1222]
//                 ],
//                 "count": 1,
//                 "amount": 375
//             }, {
//                 "fromName": "资阳",
//                 "toName": "成都",
//                 "coords": [
//                     [104.642, 30.1222],
//                     [104.066, 30.6595]
//                 ],
//                 "count": 1,
//                 "amount": 5195
//             }, {
//                 "fromName": "资阳",
//                 "toName": "内江",
//                 "coords": [
//                     [104.642, 30.1222],
//                     [105.066, 29.5871]
//                 ],
//                 "count": 1,
//                 "amount": 3523
//             }, {
//                 "fromName": "省直辖县级行政区划",
//                 "toName": "武汉",
//                 "coords": [
//                     [114.299, 30.5844],
//                     [114.299, 30.5844]
//                 ],
//                 "count": 1,
//                 "amount": 3442
//             }, {
//                 "fromName": "省直辖县级行政区划",
//                 "toName": "宜昌",
//                 "coords": [
//                     [114.299, 30.5844],
//                     [111.291, 30.7026]
//                 ],
//                 "count": 1,
//                 "amount": 4754
//             }, {
//                 "fromName": "省直辖县级行政区划",
//                 "toName": "荆门",
//                 "coords": [
//                     [114.299, 30.5844],
//                     [112.204, 31.0354]
//                 ],
//                 "count": 1,
//                 "amount": 145
//             }, {
//                 "fromName": "襄阳",
//                 "toName": "武汉",
//                 "coords": [
//                     [112.144, 32.0424],
//                     [114.299, 30.5844]
//                 ],
//                 "count": 1,
//                 "amount": 4158
//             }, {
//                 "fromName": "襄阳",
//                 "toName": "省直辖县级行政区划",
//                 "coords": [
//                     [112.144, 32.0424],
//                     [114.299, 30.5844]
//                 ],
//                 "count": 1,
//                 "amount": 835
//             }]
//         }
    ]
};

export default mapChart;
