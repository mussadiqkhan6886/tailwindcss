import Card from "../Components/Card"
import { business } from "../constants"
import linkedin from '../assets/icons/linkedin.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'

const Business = () => {
  return (
    <>
    <h1 className='text-2xl font-semibold pl-4 lg:px-12 md:mt-35 lg:text-3xl'>For Business</h1>
    <div className='p-4 mt-1 grid grid-cols-1 gap-12 lg:px-12 at-580px at-1060px lg:gap-7'>
      {business.map((item, index) => (
        <Card key={index} {...item} />
      ))}      
    </div>
    <div>
      <div>
        <h4>Follow Microsoft</h4>
        <div>
          <img src={facebook} alt="facebook logo" />
          <img src={twitter} alt="twitter logo" />
          <a href="https://www.linkedin.com/in/mussadiq-khan-2815aa34a/">
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
      <a href="#top">
        <button><i class="fa-solid fa-arrow-up"></i>Back to top</button>
      </a>
    </div>
    </>
    
  )
}

export default Business
