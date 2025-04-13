import logo from '../assets/pics/logo.png'
import { navLinks } from '../constants'

const Header = () => {
  return (
    <div className="bg-white w-full flex justify-between md:justify-between lg:px-7 p-5 px-6 items-center">
      <div className='flex w-[60%] md:w-[70%] md:justify-end gap-10 justify-between md:flex-row-reverse'>
        <div className='md:hidden'>
        <i className="fa-solid fa-bars text-2xl md:hidden"></i>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex gap-5'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a className='text-[13px] hover:border-b-2 hover:border-black' href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img className='w-28' src={logo} alt="logo microsoft" />
        </div>
      </div>

      <div className='flex justify-between gap-6 items-center'>
        <select className='hidden md:block'>
          <option value="">All Microsoft</option>
        </select>
        <i className="fa-solid fa-cart-shopping text-xl"></i>
        <i className="fa-solid fa-user-plus text-xl"></i>
      </div>
    </div>
  )
}

export default Header
