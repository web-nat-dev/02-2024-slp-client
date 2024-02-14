import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Application from '../pages/Application'
import ViewStatus from '../pages/ViewStatus'
import Requirements from '../pages/Requirements'

import Header from './Header'
import Footer from './Footer'



export default function RoutesComponent() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/apply' element={<Application />} />
          <Route path='/requirements' element={<Requirements />} />
          <Route path='/status/:id' element={<ViewStatus />} />
        </Routes>
        <Footer />
    </Router>
  )
}

// function Page1() {
//   document.getElementsByTagName('meta')['description'].content = 'Page 1 description'
//   document.title = 'Page 1 | CSWDO-SLP'

//   const navigate = useNavigate()

//   return (
//     <>
//       <h1>Page 1</h1>
//       <button className='btn btn-md btn-primary' onClick={() => navigate('/test')}>Go to Page 2</button>
//     </>
//   )
// }