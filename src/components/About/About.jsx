import Slide1 from '../../assets/about-slide-1.png';
import ArrowIcon from "../../assets/icon-arrow.svg";
import SlideOrganization1 from '../../assets/about-slide-organization-1.png'

export const About = () => {
    return (
        <section id="about_us" className="bg-section-alpha py-20">
            <div className="px-0 lg:px-16 container-section grid grid-rows-custom 
                md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-10 md:gap-5">
                <div className='flex flex-col text-center md:text-start items-center md:items-start justify-center gap-10'>
                    <h1 className='text-slate-900 text-5xl font-bold font-lora tracking-normal'>What do we do?</h1>
                    <p className='text-xl text-balance tracking-wide font-poppins leading-loose'>
                        At ConnectionLink, we connecting individuals for emotional support and mental wellness. Our platform fosters a community driven approach to holistic well-being.
                    </p>
                    <div className='flex flex-row gap-3items-center justify-center'>
                        <a
                            style={{ position: "relative" }}
                            href="/"
                            /* -underline effect- is a custom compoonent, go to index.css to see */
                            className="text-dark-green font-semibold text-xl inline-flex items-center 
                            gap-2 underline-effect after:bg-dark-green"
                        >
                            <div className='bg-dark-green p-1 rounded-full'>
                                <img className="w-4 h-4" src={ArrowIcon} />
                            </div>
                            More information
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-6 relative'>
                    <img className='w-full h-full sm:w-10/12 sm:h-10/12 mx-auto' src={Slide1} />
                    <div className='w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center absolute bottom-0 right-0 -translate-y-0 
                    lg:-translate-y-6 bg-slate-100 rounded-full shadow-custom'>
                        <img src={ SlideOrganization1 } />
                    </div>
                </div>
            </div>
        </section>
    )
}
