import axios from '@/utils/axios'

const songUrl: Map<string, any> = new Map([
  ['song','/playlist/catlist'],
])

export function getSong(params: any=''){
  return axios.post(songUrl.get('song'),params)
}
