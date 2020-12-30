// 检查手机号码
export const checkPhone = (val: string) => {
  let phone = val;
  if (!/^1[3456789]\d{9}$/.test(phone)) {
    return false;
  } else {
    return true;
  }
};
// 检查姓名
export const checkName = (val: string) => {
  let name = val;
  if (!/^[\u2E80-\u9FFF]+$/.test(name)) {
    return false;
  } else {
    return true;
  }
};
