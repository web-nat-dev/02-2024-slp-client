import { useParams } from 'react-router-dom'



export default function ViewStatus() {
  const { id } = useParams()

  return (
    <section className='pt-5 pb-4 wave-down d-flex' style={{ minHeight: '100vh', height: 'auto' }}>
      <div className='container d-flex flex-column flex-grow-1 justify-content-center text-center align-items-center'>
        <h3 className='display-4 fw-bold text-success-emphasis'>Status of: {id}</h3>
      </div>
    </section>
  )
}