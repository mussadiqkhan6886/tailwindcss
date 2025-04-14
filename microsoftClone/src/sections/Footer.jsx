import { footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <>
      <div className='grid sm:grid-cols-3 lg:grid-cols-6  gap-11 p-7 justify-between mt-10 bg-gray-100 lg:px-15'>
        {footerLinks.map((links, index) => (
          <div className='flex flex-col'>
            <h3 className='font-semibold mb-2 text-gray-600'>{links.title}</h3>
            <ul className='flex flex-col gap-2 items-start text-slate-600 text-[12px]'>
              {links.links.map(link => (
                <li className=' border-b-[1px] border-transparent cursor-pointer hover:border-black'>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='bg-gray-100 flex justify-between p-7 lg:px-15'>
        <div className='flex text-[14px] text-gray-600 gap-9'>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>English (Pakistan)</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Your Privacy Choices</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Consumer Health Privacy</h6>
        </div>
        <div className='flex text-[14px] text-gray-600 gap-7'>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Contact Microsoft</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Privacy</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Terms of use</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>Trademarks</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>About our ads</h6>
          <h6 className='hover:border-black border-transparent border-b-[1px] cursor-pointer'>&copy; Microsoft 2025</h6>
        </div>
      </div>
    </>
  )
}

export default Footer
