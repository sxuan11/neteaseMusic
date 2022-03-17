import { api } from "./axios";
import { IGetLoginKey, IGetLoginQrcode } from './api-type'

export function createLoginKey() {
  return api.get<IGetLoginKey>('/login/qr/key', { params: { time: Date.now() } })
}

export function getLoginQrcode(key: string) {
  return api.get<IGetLoginQrcode>('/login/qr/create',{ params: { time: Date.now(), key, qrimg: true } })
}