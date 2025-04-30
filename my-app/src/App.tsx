import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import All from './All'
import Ai from './Components/ai'
import Header from './Components/header'
function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<All/>} />
            <Route path='/ai' element={<Ai />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
