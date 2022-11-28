import './App.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Nav/>
      <div className="card">
        <Posts />
      </div>
      <Routes>
                {/* <Route path='/' element={<App />} /> */}
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                {/* <Route path='*' element={<App/>} /> */}
            </Routes>
      </>
  )
}
// need to move POSTS to another 'Page' so it wont get into infinite loop and wont show even after changing site
export default App
