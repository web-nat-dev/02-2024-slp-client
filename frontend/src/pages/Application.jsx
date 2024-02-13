import { useDetectPage } from '../hooks/useDetectPage'

import ApplicationForm from '../components/ApplicationForm'



export default function Application() {
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