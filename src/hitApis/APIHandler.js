import axios from 'axios';

export default class APIHandler {
  static hitApi(url, apiMethod, params, token) {
    var options = {
      url,
      method: apiMethod,
      headers: token
        ? {
            Authorization: 'Bearer ' + token,
          }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
      data: params && params,
    };

    // console.log(' ,,,,,', options);

    var axiosClient = axios(options)
      .then(response => {
        console.log('-----------Pass response-----------');
        console.log(response.data);
        console.log('-----------Pass response-----------');
        return response.data;
      })
      .catch(err => {
        console.log('-----------Fail response-----------');
        console.log(err.response.data.message);
        console.log('-----------Fail response-----------');
        return err.response.data.message;
      });

    return axiosClient;
  }
}