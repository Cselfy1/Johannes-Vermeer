import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Bio from './components/Artist/Bio'
import Pic from './components/Artist/KnownPic'
import Gallery from './components/Artist/Gallery'


// npm i styled-components !!!!!!
function App() {

  return (
    <>
      <div className='App'>
        <header className='header'>
          <h1>Johannes Vermeer</h1>
          <Menu />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/bio' element={<Bio />}></Route>
            <Route path='/known-pictures' element={<Pic />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='*' element={<NotFound  />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App