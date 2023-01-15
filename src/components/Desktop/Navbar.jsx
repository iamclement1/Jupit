
import JupitLogo from '../../assets/DesktopIcons/Jupit__logo.svg'

//navlink function 
const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}
const Navbar = () => {
    return (
        <nav className='w-full flex md:justify-between lg:justify-between items-center md:px-8 lg:px-16 py-6'>
            <div className='md:flex[0.5] lg:flex[0.5] flex-initial justify-center items-center'>
                <img src={JupitLogo} alt="" className="w-[90px] cursor-pointer"/>
            </div>
            <ul className='text-gray-500 md:flex lg:flex list-none flex-row justify-between items-center flex-initial md:text-xs lg:text-sm'>
                {["About Us", "Product", "Resources", "Contact"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}

            </ul>
            <div className='lg:space-x-4 md:space-x-2'>
                <button className='bg-white text-blue-900  py-3 px-6 border border-blue-900 rounded cursor-pointer '>
                    Sign in
                </button>
                <button className='bg-[#ffa000] text-blue-900  py-3 px-6 border border-blue-900 rounded cursor-pointer'>
                    Register
                </button>
            </div>
        </nav>
    )
}
export default Navbar