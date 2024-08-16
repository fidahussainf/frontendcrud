import axiosClient from '..';

const Api = 'https://mocki.io/v1/22e11217-5a22-40b3-9a84-3d6c72064c6f';

class userAPI {
  static getAllUser() {
    return axiosClient.get(`${Api}`);
  }

}

export default userAPI;
