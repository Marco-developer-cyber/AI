import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header'
import Scroll from './Components/scrollBar'
import Cards from './Components/cards'
import Ai from './Components/ai'
import Footer from './Components/footer'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Scroll />
          <Cards/>
        <Routes>
            <Route path='/ai' element={<Ai />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
