import { useDetectPage } from '../hooks/useDetectPage'



export default function ViewStatus() {
  useDetectPage('status')

  return (
    <section className='pt-5 pb-4 wave-down d-flex' style={{ minHeight: '100vh', height: 'auto' }}>
      <div className='container d-flex flex-column flex-grow-1 justify-content-center text-center align-items-center'>
        <h3 className='display-4 fw-bold text-success-emphasis'>Status</h3>
      </div>
    </section>
  )
}