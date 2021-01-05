import React, { useState } from 'react';
import { checkEmail } from '@/utils/common';
import { emailLogin, LoginEmailParamsType } from '@/services/login';
import { Button, Input, Form } from 'antd';
import { history } from '@@/core/history';
import Style from '@/pages/User/login.less';
// @ts-ignore
import { connect } from 'umi';

const Md5 = require('./md5');

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const EmailLogin: React.FC = () => {
  const [md5_password, setMd5_password] = useState<string>('');
  const [emailNumber, setEmailNumber] = useState<string>('');
  const [checkPhoneObj, setCheckPhoneObj] = useState<object>({
    validateStatus: '',
    help: '',
  });

  const checkEmailIsOk = (email: string) => {
    if (email.length === 0) {
      setCheckPhoneObj({
        validateStatus: 'error',
        help: '请输入邮箱！',
      });
    } else {
      if (!checkEmail(email)) {
        setCheckPhoneObj({
          validateStatus: 'error',
          help: '请输入正确的邮箱！',
        });
      } else {
        setEmailNumber(email);
        setCheckPhoneObj({
          validateStatus: 'success',
          help: '',
        });
      }
    }
  };

  const setMd5Pwd = (pwd: string) => {
    setMd5_password(Md5(pwd));
  };

  const onFinish = (values: LoginEmailParamsType) => {
    values.md5_password = md5_password;
    console.log(values);
    emailLogin(values).then((res) => {});
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={Style.emailLogin}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="登录邮箱"
          name="email"
          hasFeedback
          // @ts-ignore
          validateStatus={checkPhoneObj?.validateStatus}
          // @ts-ignore
          help={checkPhoneObj?.help}
          rules={[{ required: true, message: '请输入你的邮箱!' }]}
        >
          <Input
            allowClear
            onChange={(e) => {
              checkEmailIsOk(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="密码"
          name="md5_password"
          hasFeedback
          rules={[{ required: true, message: '请输入你的密码!' }]}
        >
          <Input.Password
            allowClear
            onChange={(e) => {
              setMd5Pwd(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            className={`${Style.emailInput}`}
            type="primary"
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// connect(
//   ({
//      dashboardAnalysis,
//      loading,
//    }: {
//     dashboardAnalysis: any;
//     loading: {
//       effects: { [key: string]: boolean };
//     };
//   }) => ({
//     dashboardAnalysis,
//     loading: loading.effects['dashboardAnalysis/fetch'],
//   }),
// )(EmailLogin);

export default () => {
  return <EmailLogin />;
};
