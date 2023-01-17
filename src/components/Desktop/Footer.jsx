import Logo from '../../assets/DesktopIcons/jupit__white__logo.svg';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi'
const FooterQuickLink = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1C1D93] text-white font-poppins">
                <div className="flex justify-around  mt-16 lg:p-12 ">
                    <div className="space-y-4 mt-8 p-2">
                        <p className="font-semibold ">Quick Links</p>
                        <ul className="space-y-2">
                            <li className="cursor-pointer"> Company </li>
                            <li className="cursor-pointer"> About Jupit </li>
                            <li className="cursor-pointer"> Contact Us </li>
                        </ul>
                    </div>

                    <div className="space-y-4 mt-10">
                        <p className="font-semibold ">Products</p>
                        <ul className="space-y-2">
                            <li className="cursor-pointer"> Bitcon </li>
                            <li className="cursor-pointer"> USDT </li>
                            <li className="cursor-pointer"> Gift Card </li>
                            <li className="cursor-pointer"> OTC </li>
                        </ul>
                    </div>

                    <div className="space-y-4 mt-10">
                        <p className="font-semibold ">Legal</p>
                        <ul className="space-y-2">
                            <li className="cursor-pointer"> Terms of Service </li>
                            <li className="cursor-pointer"> Privacy Policy </li>
                            <li className="cursor-pointer"> Anti-Money laundering policy </li>
                        </ul>
                    </div>

                    <div className="space-y-4 mt-10">
                        <p className="font-semibold ">Resources</p>
                        <ul className="space-y-2">
                            <li className="cursor-pointer"> BLog </li>
                            <li className="cursor-pointer"> FAQ</li>
                        </ul>
                    </div>

                    <div className="space-y-4 mt-10">
                        <ul className="space-y-2">
                            <li className="cursor-pointer">
                                <a href="mailto:support@jupitapp.com">
                                    support@jupitapp.com
                                </a>
                            </li>
                            <li className="cursor-pointer">
                                <a href="tel:+234 802 8651 917">
                                    +234 802 8651 917
                                </a> </li>
                        </ul>
                    </div>
                </div>

                <hr className='mb-8'/>
                <div className="flex justify-between px-8 lg:px-28 xl:px-28 pb-8">
                    <img src={Logo} alt="" />
                    <ul className='text-white md:flex lg:flex list-none flex-row justify-between items-center flex-initial md:text-xs lg:text-sm'>
                        {["About Us", "Product", "Resources", "Contact"].map((item, index) => (
                            <FooterQuickLink key={item + index} title={item} />
                        ))}

                    </ul>
                    <div className='text-white md:flex lg:flex list-none flex-row justify-between items-center space-x-4 md:text-xs lg:text-sm cursor-pointer'>
                        <div className='w-8 h-8 rounded-full border m-auto flex justify-center py-2'>
                            <ImLinkedin2 className='text-md'/>
                        </div>
                        <div className='w-8 h-8 rounded-full border m-auto flex justify-center py-2'>
                            <ImFacebook className='text-md'/>
                        </div>
                        <div className='w-8 h-8 rounded-full border m-auto flex justify-center py-2'>
                            <FiInstagram className='text-md'/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;