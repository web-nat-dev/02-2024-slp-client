import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'



export default function RoutesComponent() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Page1 />} />
    //     <Route path='/test' element={<Page2 />} />
    //   </Routes>
    // </Router>
    <></>
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

// function Page2() {
//   document.getElementsByTagName('meta')['description'].content = 'Page 2 description'
//   document.title = 'Page 2 | CSWDO-SLP'

//   const navigate = useNavigate()

//   return (
//     <>
//       <h1>Page 2</h1>
//       <button className='btn btn-md btn-primary' onClick={() => navigate('/')}>Back to Page 1</button>
//     </>
//   )
// }