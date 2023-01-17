
const Footer = () => {
    return (
        <>
            <footer className="bg-[#1C1D93] flex justify-around text-white mt-16 font-poppins p-12  ">
                <div className="space-y-4">
                    <p className="font-semibold ">Quick Links</p>
                    <ul className="space-y-2">
                        <li className="cursor-pointer"> Company </li>
                        <li className="cursor-pointer"> About Jupit </li>
                        <li className="cursor-pointer"> Contact Us </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold ">Products</p>
                    <ul className="space-y-2">
                        <li className="cursor-pointer"> Bitcon </li>
                        <li className="cursor-pointer"> USDT </li>
                        <li className="cursor-pointer"> Gift Card </li>
                        <li className="cursor-pointer"> OTC </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold ">Legal</p>
                    <ul className="space-y-2">
                        <li className="cursor-pointer"> Terms of Service </li>
                        <li className="cursor-pointer"> Privacy Policy </li>
                        <li className="cursor-pointer"> Anti-Money laundering policy </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <p className="font-semibold ">Resources</p>
                    <ul className="space-y-2">
                        <li className="cursor-pointer"> BLog </li>
                        <li className="cursor-pointer"> FAQ</li>
                    </ul>
                </div>

                <div className="space-y-4">
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
            </footer>
        </>
    )
}

export default Footer;