export interface BaseType<T> {
  code: number,
  data: T
}

export interface IGetLoginKey {
  code: number,
  unikey: string
}

export interface IGetLoginQrcode {
  qrimg: string,
  qrurl: string,
}