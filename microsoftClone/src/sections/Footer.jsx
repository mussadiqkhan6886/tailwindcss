import { footerLinks } from '../constants/index'

const Footer = () => {
  return (
    <div className='grid sm:grid-cols-3 lg:grid-cols-6  gap-10 p-7 justify-between mt-10 bg-gray-100'>
      {footerLinks.map((links, index) => (
        <div className='flex flex-col'>
          <h3 className='font-semibold mb-2 text-gray-600'>{links.title}</h3>
          <ul className='flex flex-col gap-2 items-start text-slate-600 text-[13px]'>
            {links.links.map(link => (
              <li className=' border-b-[1px] border-transparent cursor-pointer hover:border-black'>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Footer
