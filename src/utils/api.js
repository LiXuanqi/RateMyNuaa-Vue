import axios from 'axios';

const getAllCourse = () => {
  return axios.get('/api/courses');
}

export {
  getAllCourse
}