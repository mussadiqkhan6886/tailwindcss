import organize from '../assets/pics/organize.jpg'
import smallorganize from '../assets/pics/smallorganize.jpg'
import Button from '../Components/Button'

const Organize = () => {
  return (
    <div className='relative flex items-center justify-center flex-col md:flex-row w-full lg:p-10 lg:my-10 p-3 my-15'>
      
      <div className='w-[100%] lg:w-[120%] flex justify-center'>
        <picture className='w-full' >
          <source srcSet={organize} media="(min-width: 1040px)" />
          <img className='w-full' src={smallorganize} alt="Organize hero image" />  
        </picture>
      </div>
      <div className='py-7 lg:right-15 lg:text-white lg:bg-transparent lg:w-[36%] lg:top-[30%] md:absolute md:p-10 w-[90%] -bottom-25 bg-white'>
        <h1 className='text-2xl lg:text-3xl lg:mb-3  font-medium font-[Roboto] '>Organise your life</h1>
        <p className='font-[Roboto] my-2 mb-4 pr-3'>keep your ideas and notes organised with OneNote.</p>
        <Button label={"Learn more"} />
      </div>
    </div> 
  )
}

export default Organize
