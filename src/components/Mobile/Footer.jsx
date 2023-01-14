import Activity  from  "../../assets/MobileIcons/Activity.svg";
import Category  from "../../assets/MobileIcons/Category.svg";
import More  from "../../assets/MobileIcons/More.svg";
import Wallet from "../../assets/MobileIcons/Wallet.svg";
import Swap from "../../assets/MobileIcons/Swap.svg";


const Footer = () => {
    return (
        <div className="fixed inset-x-0 bottom-16">
                <div>
                    <div className="bg-[#262697] rounded-full w-20 h-20 flex mx-auto align-center shadow-lg">
                        <img src={Swap} alt="Swap__icon" className="w-8 mx-auto" />
                    </div>
                </div>
            <footer className="shadow-inner fixed inset-x-0 bottom-0 p-4">
            {/* <ul className="text-[#262697] flex list-none justify-between">
                {[
                    "Home", "Wallet", "Transaction", "More"
                ].map((item, index) => (
                    <FooterItem key={item + index } title={item} />
                )) }
            </ul> */}
            <ul className="text-[#262697] flex justify-between items-center">
                <li className="flex flex-col cursor-pointer items-center leading-loose text-md">
                    <img src={Category} alt="Icon" />
                    <span className="font-bold ">Home</span>
                </li>
                <li className="flex flex-col cursor-pointer items-center leading-loose text-md">
                    <img src={Wallet} alt="Icon" />
                    <span className="font-bold ">Wallet</span>
                </li>
                <li className="flex flex-col cursor-pointer items-center leading-loose text-md">
                    <img src={Activity} alt="Icon" />
                    <span className="font-bold ">Tranactions</span>
                </li>
                <li className="flex flex-col cursor-pointer items-center leading-loose text-md">
                    <img src={More} alt="Icon" />
                    <span className="font-bold ">More</span>
                </li>
            </ul>
        </footer>
        </div>
    )
}

export default Footer;