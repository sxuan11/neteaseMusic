import request from '@/utils/request';

export type LoginParamsType = {
  phone: string;
  ctcode?: string;
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

export async function accountLogin2() {
  return request('/playlist/hot', {
    method: 'POST',
  });
}
