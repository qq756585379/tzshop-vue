import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl);

axios.interceptors.request.use(function (request) {
  return request;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export function fetchPost(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function fetchGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export default {
  // 缩略图展示信息
  getTypeDesc(path) {
    return fetchGet(`/${path}`);
  },
  // 商品详情展示信息
  getTypeDetail(type, id) {
    return fetchPost(`/${type}/detail`, {id});
  },
  // 获取分类数据
  getCategoryData() {
    return axios.get('static/data/category.json');
  }
};
