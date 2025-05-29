import microsoftLogo from '../assets/home-assets/logos/microsoft-log.webp';
import review from '../assets/home-assets/home-page-review.webp';
import SmartNavbar from './navbar';

function Main() {
    return (<>
        <div className='bg-blue-900 justify-center flex items-center p-5 h-full lg:p-10 xl:px-20 relative'>
            <SmartNavbar  initialTop={100} />
            <div className='bg-white py-10 px-5 mt-12 md:px-10 w-full rounded-2xl flex flex-col md:flex-row md:gap-2 justify-evenly items-center shadow-2xl'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <div className='flex flex-col justify-center gap-5 xl:px-10'>
                        <h1 className='text-xl sm:text-3xl md:text-2xl font-bold text-zinc-800 lg:text-3xl xl:text-[35px]'>#1 Best Computer Training Institute <span className='text-blue-700'>Delhi</span></h1>
                        <p className='text-md sm:text-xl md:text-base text-justify lg:text-start text-zinc-700 lg:text-lg xl:text-[20px]'>
                            Take advantage of industry-ready courses to improve your skills in <b>E-Accounting, web development, Graphic Design , Animation , Editing , and UI\UX</b>
                        </p>
                        <div>
                            <img src={review} className='w-full h-20 sm:h-40 md:h-25 lg:h-30 xl:h-30' alt="" /><br />
                            <h2 className='font-bold text-2xl underline text-center'>Explore Courses</h2>
                            <div className='flex flex-row justify-center items-center gap-5 mt-3'>
                                <button className='border-black custom-border border-2 text-sm py-2 rounded-md bg-blue-600 text-white px-2 lg:text-lg lg:rounded-xl'>Offline Course</button>
                                <button className='border-black custom-border border-2 text-sm py-2 rounded-md bg-blue-600 text-white px-2 lg:text-lg lg:rounded-xl'>Online Course</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-5 md:mt-0 flex justify-center'>
                    <img src={microsoftLogo} className='w-1xl md:w-sm lg:w-md' alt="" />
                </div>
            </div>
        </div>

    </>)
}


export default Main;