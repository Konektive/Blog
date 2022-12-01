import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import AddPost from './pages/AddPost'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import Delete from './pages/Delete'


function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddPost/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/:id' element={<SinglePost />}/>
          <Route path='*'element={<Home/>}/>
          </Routes>
      </>
  )
}

export default App
