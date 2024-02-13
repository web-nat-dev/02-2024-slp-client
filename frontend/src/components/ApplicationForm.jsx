import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_ENV === 'dev' ? import.meta.env.VITE_DEV_PROXY : import.meta.env.VITE_PROXY



export default function ApplicationForm() {
  const [step, setStep] = useState(0)

  const captchaRef = useRef(null)

  const stepsHeader = (cstep, type) => {
    if (type === 'bg') {
      if (cstep > step) {
        return 'transition col-auto py-2 py-3 bg-body-tertiary'
      } else if (cstep < step) {
        return 'transition col-auto py-2 py-3 bg-success'
      } else {
        return 'transition col-auto py-2 py-3 bg-primary'
      }
    } else {
      if (cstep > step) {
        return 'transition bi bi-gear-fill text-body-tertiary'
      } else if (cstep < step) {
        return 'transition bi bi-check-lg text-light'
      } else {
        return 'transition bi bi-pencil text-light'
      }
    }
  }

  const handleSubmit = () => {
    const token = captchaRef.current.getValue()
    captchaRef.current.reset()

    const verify = async () => {
      const res = await axios.post('/verify/token', {
        token: token
      }, { headers: { 'ngrok-browser-skip-warning': true } })
      const response = await res.data
      alert(response)
    }

    verify()
  }

  return (
    <>
      <div className='row'>
        <div className={stepsHeader(0, 'bg')}>
          <i className={stepsHeader(0, 'icon')} />
        </div>
        <div className={stepsHeader(1, 'bg')}>
          <i className={stepsHeader(1, 'icon')} />
        </div>
        <div className={stepsHeader(2, 'bg')}>
          <i className={stepsHeader(2, 'icon')} />
        </div>
        <div className={stepsHeader(3, 'bg')}>
          <i className={stepsHeader(3, 'icon')} />
        </div>
      </div>

      {step === 0 && (
        <>
          <h1>First step</h1>
          <button className='btn btn-md btn-primary' onClick={() => setStep(1)}>Next</button>
        </>
      )}

      {step === 1 && (
        <>
          <h1>Second step</h1>
          <button className='btn btn-md btn-secondary' onClick={() => setStep(0)}>Back to previous step</button>
          <button className='btn btn-md btn-primary' onClick={() => setStep(2)}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h1>Third step</h1>
          <button className='btn btn-md btn-secondary' onClick={() => setStep(1)}>Back to previous step</button>
          <button className='btn btn-md btn-primary' onClick={() => setStep(3)}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <h1>Congratulations! This is the last step.</h1>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITEKEY}
          />
          <button className='btn btn-md btn-secondary' onClick={() => setStep(2)}>Back to previous step</button>
          <button className='btn btn-md btn-primary' onClick={handleSubmit}>Submit Application</button>
        </>
      )}
    </>
  )
}