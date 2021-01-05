import request from '@/utils/request';

export type LoginParamsType = {
  phone: string;
  ctcode?: string;
};

export type LoginEmailParamsType = {
  email: string;
  md5_password: string;
};

/**
 * 验证码
 * @param params
 */
export async function accountLogin(params: LoginParamsType) {
  return request('/captcha/sent', {
    method: 'POST',
    data: params,
  });
}

export async function emailLogin(params: LoginEmailParamsType) {
  return request('/login', {
    method: 'POST',
    data: params,
  });
}
