import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/employee',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/employee/',
    method: 'delete',
    data: ids
  })
}

export function delById(id) {
  return request({
    url: 'api/employee/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/employee',
    method: 'put',
    data
  })
}

export default { add, edit, del, delById }
