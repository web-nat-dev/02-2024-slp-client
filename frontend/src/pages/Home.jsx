import { useNavigate } from 'react-router-dom'
import { useDetectPage } from '../hooks/useDetectPage'

import cswdoslp from '../assets/images/cswdo-slp-logo.png'



export default function Home() {
  document.getElementsByTagName('meta')['description'].content = 'Ang Sustainable Livelihood Program, na kilala rin bilang SLP, ay isang community-based na programa, na nagbibigay ng capacity building upang mapabuti ang socio-economic status ng mga kalahok sa programa. Bilang bahagi ng Convergence Strategy, ang programa ay naglalayon na paglingkuran ang mga benepisyaryo ng Pantawid Pamilya, na umaasang mapanatili at palawakin sa kabila ng limang taong interbensyon ang mga benepisyong sosyo-ekonomiko na natamo.'
  document.getElementsByTagName('meta')['keywords'].content = 'San Jose del Monte, Bulacan, DSWD, CSWDO, SLP, Sustainable Livelihood Program, Philippines, Apply, Application Form, Home, vercel app'
  document.title = 'Home | CSWDO-SLP'

  useDetectPage('home')

  const navigate = useNavigate()

  return (
    <section className='pt-5 pb-4 wave-down d-flex' style={{ minHeight: '100vh', height: 'auto' }}>
      <div className='container d-flex flex-column flex-grow-1 justify-content-center text-center align-items-center'>
        <img src={cswdoslp} className='mb-3' loading='lazy' style={{ width: '10rem', height: '10rem' }} alt='logo' />

        <h3 className='display-4 fw-bold text-success-emphasis'>Sustainable Livelihood Program</h3>
        <p className='lead bg-success-subtle py-2 px-2 rounded'>Para sa mga maliliit na negosyo at hanapbuhay ng mga San Joseno</p>
        <p>Ang Sustainable Livelihood Program, na kilala rin bilang SLP, ay isang community-based na programa, na nagbibigay ng capacity building upang mapabuti ang socio-economic status ng mga kalahok sa programa. Bilang bahagi ng Convergence Strategy, ang programa ay naglalayon na paglingkuran ang mga benepisyaryo ng Pantawid Pamilya, na umaasang mapanatili at palawakin sa kabila ng limang taong interbensyon ang mga benepisyong sosyo-ekonomiko na natamo.</p>

        <div className='d-grid d-md-flex gap-2'>
          <button type='button' className='btn btn-md btn-success' onClick={() => navigate('/apply')}>Mag-Apply Na</button>
          <button type='button' className='btn btn-md btn-secondary' onClick={() => navigate('/requirements')}>Mga Requirements</button>
        </div>
      </div>
    </section>
  )
}