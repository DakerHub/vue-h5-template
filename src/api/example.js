import request from '@/utils/request'

export function fetchPostList() {
  return request.get('example')
}
