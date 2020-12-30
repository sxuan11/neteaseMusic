import React, { useState } from 'react';
import { Input, Select, Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Style from './login.less';
import { checkPhone } from '@/utils/common';
import { accountLogin } from '@/services/login';
import type { LoginParamsType } from '@/services/login';
import { history } from 'umi';

const { Option } = Select;

const PhoneLogin: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const checkPhoneIsOk = (phone: string) => {
    if (!checkPhone(phone)) {
      setIsDisabled(true);
    } else {
      setPhoneNumber(phone);
      setIsDisabled(false);
    }
  };

  const goLogin = (params: LoginParamsType) => {
    accountLogin(params).then((res) => {
      if (res.code === 200) {
        notification.open({
          message: '验证码发送成功',
          duration: 1,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
        history.push('/user/login/checkPhoneLogin');
      } else {
        notification.open({
          message: res.message,
          duration: 1,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      }
    });
  };
  return (
    <div className={Style.phoneLogin}>
      <div className={`${Style.loginTips} font-bold`}>登录体验更精彩</div>
      <div className={Style.loginTips2}>未注册手机号登录后将自动创建账号</div>
      <Input.Group className={Style.loginInput}>
        <Select defaultValue="+86">
          <Option value="86">+86</Option>
          <Option value="1">+1</Option>
        </Select>
        <Input
          style={{ flex: '1' }}
          placeholder={'请输入手机号码'}
          allowClear
          type={'number'}
          pattern="[0-9]*"
          defaultValue={phoneNumber}
          onChange={(e) => {
            checkPhoneIsOk(e.target.value);
          }}
        />
      </Input.Group>
      <Button
        disabled={isDisabled}
        onClick={() => {
          goLogin({ phone: phoneNumber, ctcode: '86' } as LoginParamsType);
        }}
        type="primary"
        shape={'round'}
      >
        下一步
      </Button>
    </div>
  );
};

export default () => {
  return <PhoneLogin />;
};
