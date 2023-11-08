import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Service from './component/Service/Service'
import Project from './component/Project/Project'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import NotFound from './component/NotFound'



function App() {
  return (
    <>
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home></Home>}>Home</Route>
            <Route path='/About' element={<About></About>}>About</Route>
            <Route  path='/Service' element={<Service></Service>}>Service</Route>
            <Route path='/Project' element={<Project></Project>}>Project</Route>
            <Route path='/Blog' element={<Blog></Blog>}>Blog</Route>
            <Route path='/Contact' element={<Contact></Contact>}>Contact</Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
            </BrowserRouter>
    </>
  )
}

export default App
