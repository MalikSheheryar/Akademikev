import { useState } from 'react'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <div className="mb-16">
      <nav className="bg-white py-4 ">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex">
            <svg
              className=""
              width="40"
              height="40"
              viewBox="0 0 81 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M40.5 50.3879C48.5703 45.7195 54 36.9938 54 27C54 17.0062 48.5703 8.28055 40.5 3.61212C44.4713 1.31482 49.0821 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C49.0821 54 44.4713 52.6852 40.5 50.3879ZM40.5 50.3879C36.5287 52.6852 31.9179 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C31.9179 0 36.5287 1.31482 40.5 3.61212C32.4297 8.28055 27 17.0062 27 27C27 36.9938 32.4297 45.7195 40.5 50.3879Z"
                fill="#5e27ff"
              />
            </svg>
            <a className="ml-1 my-[6px] sm:ml-2 font-bold text-xl tracking-wide">
              AkademikEv
            </a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>

          <div className="hidden md:flex ">
            <ul className="md:flex space-x-4 btnStyle">
              <li className="my-2">
                <a href="/auth/register" className="hover:text-gray-300">
                  Kayıt Ol
                </a>
              </li>
              <li className="my-2">
                <a href="/auth/login" className="hover:text-gray-300">
                  Giriş Yap
                </a>
              </li>
              <button className="rounded-full p-2 px-3 purpleBtn" type="submit">
                Öğretmen Ol
              </button>
            </ul>
          </div>

          <div className={open ? 'block' : 'hidden'}>
            <ul className="md:flex space-x-4 md:hidden outline-light">
              <li className="ml-4 my-2 ">
                <a href="#" className="hover:text-gray-300">
                  Register
                </a>
              </li>
              <hr></hr>
              <li className="my-2 ">
                <a href="#" className="hover:text-gray-300">
                  Sign In
                </a>
              </li>
              <hr></hr>
              <li className="my-2 ">
                <a href="#" className="hover:text-gray-300">
                  Become a Teacher
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
