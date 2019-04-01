import {postRequest, getRequest} from './http';
import config from '../../config';

const prod = process.env.NODE_ENV === 'production';
const staticPath = prod ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
const homeData = staticPath + '/data/data.json';
const detailData = staticPath + '/data/detail.json';
const cityData = staticPath + '/data/city.json';

export const getHomeData = (params) => {
  return getRequest(homeData);
};

export const getDetailData = (params) => {
  return getRequest(detailData);
};

export const getCityData = (params) => {
  return getRequest(cityData);
};

// 登陆
export const login = (params) => {
  return postRequest('/login', params);
};

// 注册
export const regist = (params) => {
  return postRequest('/user/regist', params);
};

export default {
  // 缩略图展示信息
  getTypeDesc(path) {
    return getRequest(`/${path}`);
  },
  // 商品详情展示信息
  getTypeDetail(type, id) {
    return postRequest(`/${type}/detail`, {id});
  }
  // 获取分类数据
  // getCategoryData() {
  //   return axios.get('static/data/category.json');
  // }
};
