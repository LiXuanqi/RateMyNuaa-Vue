import axios from 'axios';

const getAllCourse = () => {
  return axios.get('/api/courses');
}

const getCourse = (id) => {
  return axios.get(`/api/courses/${id}`)
}

const getCommentsByCourseId = (courseId) => {
  return axios.get(`/api/courses/${courseId}/comments`)
}

export {
  getAllCourse,
  getCourse,
  getCommentsByCourseId
}