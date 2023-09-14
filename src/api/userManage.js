import request from '@/utils/request'

export default{
  getUserList(SearchModel){
    return request({
      url:'/user/list',
      method: 'get',
      params:{
        pageNo:SearchModel.pageNo,
        pageSize:SearchModel.pageSize,
        username:SearchModel.username,
        phone:SearchModel.phone
      }
    });
  },
}
