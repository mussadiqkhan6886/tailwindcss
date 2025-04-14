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
    <div className="h-35">
      <div className="flex gap-10 lg:m-14 m-8">
        <h4>Follow Microsoft</h4>
        <div className="w-[25px] flex gap-8">
          <img src={facebook} alt="facebook logo" />
          <img src={twitter} alt="twitter logo" />
          <img src={linkedin} alt="linkedin logo" />
        </div>
      </div>
      <a href="#top">
        <button className="float-right bg-gray-300 font-semibold px-5 py-2 mr-5 hover:bg-white cursor-pointer hover:shadow-2xl"><i className="fa-solid fa-arrow-up mr-2"></i>Back to top</button>
      </a>
    </div>
    </>
    
  )
}

export default Business
