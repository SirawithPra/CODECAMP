import React from 'react';
import { Table, Row, Col, Form, Input, Button } from 'antd';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';



function App() {
  const dataSource = [{
    "first_name": "Guglielmo",
    "last_name": "Craythorn",
    "email": "gcraythorn2j@nbcnews.com",
    "gender": "Non-binary",
    "university": "Louisiana College"
  }, {
    "first_name": "Kim",
    "last_name": "Shay",
    "email": "kshay2k@livejournal.com",
    "gender": "Male",
    "university": "King's University College"
  }, {
    "first_name": "Dierdre",
    "last_name": "Ryan",
    "email": "dryan2l@sphinn.com",
    "gender": "Female",
    "university": "The Dickinson School of Law"
  }, {
    "first_name": "Ulric",
    "last_name": "Dimitru",
    "email": "udimitru2m@dailymotion.com",
    "gender": "Male",
    "university": "University of Urbino"
  }, {
    "first_name": "Annis",
    "last_name": "Pien",
    "email": "apien2n@quantcast.com",
    "gender": "Female",
    "university": "Universidad Técnica Latinoamericana"
  }, {
    "first_name": "Georas",
    "last_name": "Hubert",
    "email": "ghubert2o@plala.or.jp",
    "gender": "Male",
    "university": "Diyala University"
  }, {
    "first_name": "Scotty",
    "last_name": "Fasset",
    "email": "sfasset2p@ustream.tv",
    "gender": "Male",
    "university": "Universität Passau"
  }, {
    "first_name": "Zaccaria",
    "last_name": "Merle",
    "email": "zmerle2q@goo.ne.jp",
    "gender": "Male",
    "university": "Birsa Agricultural University"
  }, {
    "first_name": "Markus",
    "last_name": "Wadwell",
    "email": "mwadwell2r@ft.com",
    "gender": "Male",
    "university": "University of Saint La Salle"
  }];

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
    }
  ];
  const layout = {
    labelCol: {
      xs: 6,
      sm: 8,
      md: 10,
    },
    wrapperCol: {
      xs: 18,
      sm: 16,
      md: 14,
    },
  };

  let onFinish = (values) => {
      console.log(values)
  };

  return (
    <div className="App">
      <Row justify={'center'}>
        <Col span={18} >
          <Table bordered size='large' dataSource={dataSource} columns={columns} />;
        </Col>
        <Col xs={24} sm={22} md={20} lg={16} xl={14} xxl={12} >
          <Table bordered size='large' dataSource={dataSource} columns={columns} />;
        </Col>
        <Col span={20}>
          <Form onFinish={onFinish} {...layout}>
            <Form.Item
              label='Name'
              name="name"
              rules={
                [{  max:10, min:3, message: 'Name must be between 1 and 10 characters'}
                ,{  required :true,  message: "You must fill in this field"}]}
                >
              <Input placeholder='Name'/>
            </Form.Item>
            <Form.Item
              label='LastName'
              name="lastName"
              rules={
                [{  max:10, min:1, message: 'LastName must be between 1 and 10 characters'}
                ,{  required :true,  message: "You must fill in this field"}]}
                >
              <Input placeholder='LastName'/>
            </Form.Item>
            <Form.Item
              label='PhoneNumber'
              name="phoneNumber"
              rules={
                [{  len:10, message: "PhoneNumber must be 10 characters"}]}
                >
              <Input placeholder='PhoneNumber'/>
            </Form.Item>
            <Form.Item
              label='Email'
              name="email"
              rules={
                [{   type:'email',  message: 'Invalid email address'}
                ,{  required :true,  message: "You must fill in this field"}]}
                >
              <Input placeholder='Email'/>
            </Form.Item>
            <Form.Item
              label='Password'
              name="password"
              rules={
                [{  max:24, min:6,  message: "Password must be at least 6 characters"}
                ,{  required :true,  message: "You must fill in this field"}]}>
              <Input type='password' placeholder='Password'/>
            </Form.Item>
            <Button htmlType='submit'>Register</Button>
          </Form>
        </Col>
      </Row>


    </div>
  );
}

export default App;
