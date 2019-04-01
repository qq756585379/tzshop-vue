import axios from 'axios';

const prod = process.env.NODE_ENV === 'production';
const domain = prod ? 'http://yangjunv5.top:9080' : 'http://localhost:7080';
axios.defaults.baseURL = domain;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl);

axios.interceptors.request.use(function (request) {
  return request;
}, function (error) {
  // 此处可以弹框
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 根据返回的code值来做不同的处理(和后端约定)
  const data = response.data;
  switch (data.code) {
    case 401:
      // 未登录 清除已登录状态
      // Cookies.set('userInfo', '');
      // setStore('accessToken', '');
      // router.push('/login');
      break;
    case 403:
      // 没有权限
      // if (data.message !== null) {
      //   Message.error(data.message);
      // } else {
      //   Message.error("未知错误");
      // }
      break;
    case 500:
      // if (data.message !== null) {
      //   Message.error(data.message);
      // } else {
      //   Message.error("未知错误");
      // }
      break;
    default:
      return data;
  }
  return response;
}, function (error) {
  // 此处可以弹框
  return Promise.reject(error);
});

export function postRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function getRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}
