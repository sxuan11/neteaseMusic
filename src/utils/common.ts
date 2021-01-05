// 检查手机号码
export const checkPhone = (val: string) => {
  return /^1[3456789]\d{9}$/.test(val);
};

export const checkEmail = (val: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
};
// 检查姓名
export const checkName = (val: string) => {
  return /^[\u2E80-\u9FFF]+$/.test(val);
};
