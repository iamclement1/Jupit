import JupitPhone from '../../assets/DesktopImg/JupitPhone.png';
import RightArrow from '../../assets/DesktopIcons/arrow-right.svg';
const AppDownload = () => {
    return (
        <section>
            <main>
                <div className='w-3/6 m-auto'>
                    <img src={JupitPhone} alt="jupitphone_inCircle" />
                </div>
                <div className='w-3/6 m-auto'>
                    <h2 className='text-center text-[#090931] font-bold text-3xl mb-4 '>
                        Install the App today
                    </h2>
                    <p className='text-center text-sm text-gray-500 w-4/5 m-auto py-2'>
                        The Progressive Web App works just like your regular App, it's super easy and convinient. To instal, please follow the process below.
                    </p>
                </div>

                {/* list of process */}
                <div className='w-3/6 m-auto py-8'>
                    <div className="flex justify-between">
                        <div className='flex justify-center items-center w-[19em] p-2'>
                            <img src={RightArrow} alt="right-arrow" />
                            <p className='text-xs text-[#090931]'>
                                Launch <span className='font-semibold text-[#090931] cursor-pointer'> www.jupitapp.com/signin </span>from your mobile phone device or tablet.
                            </p>
                        </div>

                        <div className='flex justify-center items-center w-[19em] p-2 '>
                            <img src={RightArrow} alt="right-arrow" />
                            <p className='text-xs text-[#090931]'>
                                Select Add Page to Home Screen.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='w-3/6 m-auto py-8'>
                    <div className="flex justify-between">
                        <div className='flex justify-center items-center w-[19em] p-2'>
                            <img src={RightArrow} alt="right-arrow" />
                            <p className='text-xs text-[#090931]'>
                                Navigate to the browser option on your andriod device or tap share button on your IOS device.
                            </p>
                        </div>

                        <div className='flex justify-center items-center w-[19em] p-2 '>
                            <img src={RightArrow} alt="right-arrow" />
                            <p className='text-xs text-[#090931]'>
                                Return to home menu to launch the application shortcut.
                            </p>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    )
}
export default AppDownload;