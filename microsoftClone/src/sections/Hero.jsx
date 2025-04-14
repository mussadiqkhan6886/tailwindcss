import heroSmall from '../assets/pics/heroSmall.jpg'
import heroBig from '../assets/pics/heroBig.jpg'
import Button from '../Components/Button'

const Hero = () => {
  return (
    <div className='relative flex justify-center flex-col md:flex-row w-full'>
      <div className='w-full'>
      <picture>
          <source media="(min-width: 1024px)" srcSet={heroBig} />
          <img className='w-full' src={heroSmall} alt="main hero image" />
        </picture>
      </div>
      <div className='shadow-md p-6 lg:left-12 lg:bg-transparent lg:w-[35%] lg:shadow-none lg:top-[15%] md:absolute md:p-10 w-[90%] -bottom-30 bg-white'>
        <h1 className='text-2xl lg:text-3xl lg:mb-3  font-medium font-[Roboto] '>Achieve the extraordinary</h1>
        <p className='font-[Roboto] my-2 mb-4 pr-3'>Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps- all in one plan.</p>
        <Button label={"Shop Microsoft 365"} />
      </div>
    </div>
  )
}

export default Hero
