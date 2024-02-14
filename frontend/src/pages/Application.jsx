import { useDetectPage } from '../hooks/useDetectPage'

import ApplicationForm from '../components/ApplicationForm'



export default function Application() {
  document.getElementsByTagName('meta')['description'].content = 'Mag-apply na ngayon gamit ang form o link sa ibaba. Ano ang SLP? Ang Sustainable Livelihood Program, na kilala rin bilang SLP, ay isang community-based na programa, na nagbibigay ng capacity building upang mapabuti ang socio-economic status ng mga kalahok sa programa. Bilang bahagi ng Convergence Strategy, ang programa ay naglalayon na paglingkuran ang mga benepisyaryo ng Pantawid Pamilya, na umaasang mapanatili at palawakin sa kabila ng limang taong interbensyon ang mga benepisyong sosyo-ekonomiko na natamo.'
  document.getElementsByTagName('meta')['keywords'].content = 'San Jose del Monte, Bulacan, DSWD, CSWDO, SLP, Sustainable Livelihood Program, Philippines, Apply, Application Form'
  document.title = 'Application | CSWDO-SLP'

  useDetectPage('apply')

  return (
    <section className='pt-5 pb-4 wave-down d-flex' style={{ minHeight: '100vh', height: 'auto' }}>
      <div className='container d-flex flex-column flex-grow-1 justify-content-center text-center align-items-center'>
        <h3 className='display-4 fw-bold text-success-emphasis'>Application Form</h3>
        <ApplicationForm />
      </div>
    </section>
  )
}