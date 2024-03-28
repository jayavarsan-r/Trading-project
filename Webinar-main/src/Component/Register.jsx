import '../App.css'
import money from '../assets/profit-1.png'
import bag from '../assets/portfolio-1.png'
import progit from '../assets/profit-2.png'

function Register() {

  return (
    <>
      <div className="section-one-content-area">
        <h2 id='head'>Do you rely on</h2>
        <h1>Just your monthly salary to support yourself?</h1>
        <div className="section-one-cards-one">
            <div className="card-one-left">
              <img src={money} alt="" />
              <h2>STUCK WITH ONE INCOME SOURCE?</h2>
              <p>Economic uncertainties such as recession and lay offs can arise unexpectedly, leaving you in vulnerable situations.</p>
            </div>
            <div className="card-one-right">
              <img src={bag} alt="" />
              <h2>YOUR 9-5 JOB IS NOT FINANCIALLY EMPOWERING?</h2>
              <p>Your current job isn't providing the financial freedom and growth you desire</p>
            </div>
        </div>
        <div className="section-one-cards-two">
            <div className="card-two-center">
              <img src={progit} alt="" />
              <h2>LOOKING FOR A PROFITABLE SIDE INCOME?</h2>
              <p>A profitable side income isn't just about extra money - it's about taking control of your financial stability and goals</p>
            </div>
        </div>
        <p>If yes,then don't miss out on</p>
        <h1>Our webinar that can guide you towards financial freedom</h1>
        <button className='section-one-register-button'>Register Now</button>
      </div>
    </>
  )
}

export default Register