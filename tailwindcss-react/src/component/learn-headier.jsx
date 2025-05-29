function LearnHeader() {

    return (<>
        <div className='flex justify-center items-center'>
            <div className='w-[90%] flex gap-2 items-center justify-between py-1'>
                <div className='flex gap-2 h-[20px] items-center'>
                    <span className='w-[10px] h-[10px] bg-red-700 rounded-[100%]'></span>
                    <span className='w-[10px] h-[10px] bg-green-700 rounded-[100%]'></span>
                    <span className='w-[10px] h-[10px] bg-blue-700 rounded-[100%]'></span>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-center text-[13px] md:text-lg'>
                        Learn From Microsoft Certified Expert
                    </p>
                    <button className='text-sm py-2 md:py-1 rounded-xl bg-blue-500 text-white px-3 lg:text-lg lg:rounded-xl flex gap-1'><span>Apply</span> <span>Now</span></button>
                </div>
                <div className=" opacity-0">.</div>
            </div>
        </div>
    </>)

}

export default LearnHeader;