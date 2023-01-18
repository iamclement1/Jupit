import { TransList } from "../../api/transcardList"


const Transaction = () => {
    return (
        <>
            <div className='flex justify-between px-6 py-3'>
                <span className='font-semibold'>Recent Transactions</span>
                <span className='font-semibold text-blue-900'>See all</span>
            </div>
            {
                TransList.map((trans, id) => {
                    return (
                        <main className="">
                            <div key={id} className="flex justify-between items-center px-6 mb-8 mt-3">
                                <div className="flex justify-center items-center">
                                    <img src={trans.img} alt="transimage" />
                                    <div className="">
                                        <span className="block mb-2 font-semibold text-[#1E194E]">
                                            {trans.amt}
                                        </span>
                                        <span className="text-gray-500">
                                            {trans.transtype}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-gray-500">
                                    {trans.date}
                                </div>
                            </div>
                        </main>
                    )
                })
            }
        </>
    )
}

export default Transaction