import Index from '@/views/Index';
import Course from '@/views/Course';
import CoursePage from '@/views/CoursePage';
import Result from '@/views/Result';
import Login from '@/views/Login';
import Admin from '@/views/Admin';
import About from '@/views/About';

export default [{
  path: '/',
  name: 'index',
  component: Index,

}, {
  path: '/course/:id',
  name: 'coursePage',
  component: CoursePage,
}, {
  path: '/course',
  name: 'course',
  component: Course,
}, {
  path: '/result',
  name: 'result',
  component: Result,
}, {
  path: '/login',
  name: 'login',
  component: Login,
}, {
  path: '/admin',
  name: 'admin',
  component: Admin,
}, {
  path: '/about',
  name: 'about',
  component: About,
}];
