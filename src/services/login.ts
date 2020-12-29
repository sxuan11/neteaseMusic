import request from '@/utils/request';

export type LoginParamsType = {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
};

export async function accountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function accountLogin2() {
  return request('/playlist/hot', {
    method: 'POST',
  });
}
