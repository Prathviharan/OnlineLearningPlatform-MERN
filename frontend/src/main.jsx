import React from 'react'
import './index.css'

//import statements
import ReactDOM from 'react-dom/client'
import Landing from './Pages/Home/Landing/Landing'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import AdminLogin from './Pages/Login/AdminLogin'
import About from './Pages/Home/About/About'
import Contact from './Pages/Home/Contact/Contact'
import Courses from './Pages/Home/Courses/Courses'
import Layout from './Layout'
import StudentDocument from './Pages/Components/DocumentVerification/StudentDocument'
import TeacherDocument from './Pages/Components/DocumentVerification/TeacherDocument'
import VarifyEmail from './Pages/Components/VarifyEmail/VarifyEmail'
import Rejected from './Pages/Response/Rejected'
import Pending from './Pages/Response/Pending'
import StudentClasses from './Pages/Dashboard/StudentDashboard/StudentClasses'
import StudentCourses from './Pages/Dashboard/StudentDashboard/StudentCourses'
import DashboardTeacher from './Pages/Dashboard/TeacherDashboard/DashboardTeacher'
import TeacherClasses from './Pages/Dashboard/TeacherDashboard/TeacherClasses'
import TeacherCourses from './Pages/Dashboard/TeacherDashboard/TeacherCourses'
import SearchData from './Pages/Home/Search/Search'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Admin from './Pages/Components/Admin/Admin'
import VarifyDoc from './Pages/Components/Admin/VarifyDoc'
import TeacherLayout from './Pages/Dashboard/TeacherDashboard/TeacherLayout'
import StudentLayout from './Pages/Dashboard/StudentDashboard/StudentLayout'
import SearchTeacher from './Pages/Dashboard/StudentDashboard/SearchTeacher'

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

//router setup
const router = createBrowserRouter(
  createRoutesFromElements(
    //define routes
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Search/:subject' element={<SearchData/>}/>
      <Route path='/StudentDocument/:Data' element={<StudentDocument/>}/>
      <Route path='/TeacherDocument/:Data' element={<TeacherDocument/>}/>
      <Route path='/courses' element={<Courses/> }/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/varifyEmail' element={<VarifyEmail/>}/>
      <Route path='/adminLogin/' element={<AdminLogin/>}/>
      <Route path='/rejected/:user/:ID' element={<Rejected/>}/>
      <Route path='/pending' element={<Pending/>}/>
      <Route path='/admin/:data' element={<Admin/>}/>
      <Route path='/VarifyDoc/:type/:adminID/:ID' element={<VarifyDoc/>}/>
      <Route path='/Student/Dashboard/:ID' element={<StudentLayout/>}>
        <Route path='/Student/Dashboard/:ID/Search' element={<SearchTeacher/>}/>
        <Route path='/Student/Dashboard/:ID/Classes' element={<StudentClasses/>}/>
        <Route path='/Student/Dashboard/:ID/Courses' element={<StudentCourses/>}/>
      </Route>
      <Route path='/Teacher/Dashboard/:ID' element={<TeacherLayout/>}>
        <Route path='/Teacher/Dashboard/:ID/Home' element={<DashboardTeacher/>}/>
        <Route path='/Teacher/Dashboard/:ID/Classes' element={<TeacherClasses/>}/>
        <Route path='/Teacher/Dashboard/:ID/Courses' element={<TeacherCourses/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Route>
 )
)

//rendering the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

