import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1ceca281-fb41-4532-8854-de2e25ad4cf7'
  }
});

export const usersAPI = {
 getUsers (currentPage = 1, pageSize = 10) {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  .then(response => {
    return response.data
  })
},
  unfollow (userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => {
      return response.data
    })
  },
  follow (userId) {
    return instance.post(`follow/${userId}`)
    .then(response => {
      return response.data
    })
  },
  getUsersId (userId) {
    return instance.get(`profile/${userId}`)
    .then(response => {
      return response.data
    })
  },
  authMe () {
    return instance.get(`auth/me`)
    .then(response => {
      return response.data
    })
  }
};

