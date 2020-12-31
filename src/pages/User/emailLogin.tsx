import React, { useEffect, useState } from 'react';
import { checkPhone } from '@/utils/common';
import { accountLogin, LoginParamsType } from '@/services/login';
import { Button, Input, Form, Checkbox } from 'antd';
import { history } from '@@/core/history';
import Style from '@/pages/User/login.less';
const Md5 = require('./md5');

const EmailLogin: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const checkPhoneIsOk = (phone: string) => {
    console.log(Md5(phone));
    if (!checkPhone(phone)) {
      setIsDisabled(true);
    } else {
      setPhoneNumber(phone);
      setIsDisabled(false);
    }
  };

  const goLogin = () => {};
  return (
    <div className={Style.emailLogin}>
      <div className={`${Style.emailInput} font-bold`}>网易邮箱账号登录</div>
      <Input.Group className={Style.loginInput}>
        <Input
          style={{ flex: '1' }}
          placeholder={'请输入邮箱'}
          allowClear
          type={'text'}
          defaultValue={phoneNumber}
          onChange={(e) => {
            checkPhoneIsOk(e.target.value);
          }}
        />
        <Input
          style={{ flex: '1' }}
          placeholder={'请输入密码'}
          allowClear
          type={'password'}
          defaultValue={phoneNumber}
          onChange={(e) => {
            checkPhoneIsOk(e.target.value);
          }}
        />
      </Input.Group>
      <Button disabled={isDisabled} type="primary" shape={'round'}>
        下一步
      </Button>
    </div>
  );
};

export default () => {
  return <EmailLogin />;
};
