import axios from '@/utils/axios'

const songUrl: Map<string, any> = new Map([
    ['cellphone','/login/cellphone'],
    ['email','/login'],
])

export function cellphoneLogin(params: any=''){
    return axios.post(songUrl.get('cellphone'),params)
}


export function emailLogin(params: any=''){
    return axios.post(songUrl.get('email'),params)
}
