// import { Button, Checkbox, Form, Input , Modal} from 'antd';
// import {useState} from 'react';



// export default function AddProductModal() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

// //   const onSubmit = (e) => {
// //     e.preventDefault();

// //     if (name === '' || email === '' || phone === '') {
// //       return alert('Please fill in all fields');
// //     }

// //     setName('');
// //     setEmail('');
// //     setPhone('');
// //   };

//   return (
//     <>
//       <Button
//         type='button'
//         className='btn btn-secondary'
//         onClick={showModal}
//         data-bs-toggle='modal'
//         data-bs-target='#addClientModal'
//       >
//         <div className='d-flex align-items-center'>
//           <div>增加商品</div>
//         </div>
//       </Button>

//       <Modal
//         className='modal fade'
//         visible={isModalOpen} 
//         onOk={handleOk} 
//         onCancel={handleCancel}
//       >
//         <Form
//         className="space-align-container"
//         labelCol={{
//             span: 8,
//         }}
//         wrapperCol={{
//             span: 16,
//         }}
//         initialValues={{
//             remember: true,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//         >
//         <Form.Item
//             label="Username"
//             name="username"
//             rules={[
//             {
//                 required: true,
//                 message: 'Please input your username!',
//             },
//             ]}
//         >
//             <Input />
//         </Form.Item>

//         <Form.Item
//             label="Password"
//             name="password"
//             rules={[
//             {
//                 required: true,
//                 message: 'Please input your password!',
//             },
//             ]}
//         >
//             <Input.Password />
//         </Form.Item>

//         <Form.Item
//             name="remember"
//             valuePropName="checked"
//             wrapperCol={{
//             offset: 8,
//             span: 16,
//             }}
//         >
//             <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item
//             wrapperCol={{
//             offset: 8,
//             span: 16,
//             }}
//         >
//             <Button type="primary" htmlType="submit">
//             Submit
//             </Button>
//         </Form.Item>
//         </Form>
            
//       </Modal>
//     </>
//   );
// }

import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProForm, ProFormDateRangePicker, ProFormSelect, ProFormText, } from '@ant-design/pro-components';
import { Button, Form, message } from 'antd';
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
export default function AddProductModal() {
    const [form] = Form.useForm();
    return (<ModalForm title="新建产品" trigger={<Button type="primary">
          <PlusOutlined />
          新建产品
        </Button>} form={form} autoFocusFirstInput modalProps={{
            destroyOnClose: true,
            onCancel: () => console.log('run'),
        }} submitTimeout={2000} onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            return true;
        }}>
      <ProForm.Group>
        <ProFormText width="md" name="name" label="签约客户名称" tooltip="最长为 24 位" placeholder="请输入名称"/>

        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText width="md" name="contract" label="合同名称" placeholder="请输入名称"/>
        <ProFormDateRangePicker name="contractTime" label="合同生效时间"/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect request={async () => [
            {
                value: 'chapter',
                label: '盖章后生效',
            },
        ]} width="xs" name="useMode" label="合同约定生效方式"/>
        <ProFormSelect width="xs" options={[
            {
                value: 'time',
                label: '履行完终止',
            },
        ]} name="unusedMode" label="合同约定失效效方式"/>
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号"/>
      <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目"/>
      <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途"/>
    </ModalForm>);
};