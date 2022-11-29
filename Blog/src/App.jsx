import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'
import Header from './components/Header'



function App() {
  return (
    <>
      <Nav />
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/:id' element={<SinglePost />}></Route>
          <Route path='*'element={<Home/>}></Route>
          </Routes>
      </>
  )
}

export default App
