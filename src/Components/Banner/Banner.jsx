import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../../index.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={60}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero w-96 h-96 md:w-[500px] lg:w-full lg:h-96 md:h-[250px] " style={{ backgroundImage: 'url(https://i.ibb.co/phQHNQD/pexels-pixabay-433942.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Welcome to our Tourify family. <br />
                                Hope you experience a good journey.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-96 h-96 md:w-[500px] lg:w-full lg:h-96 md:h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/bNrjG9c/pexels-fabianwiktor-994605.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Welcome to our Tourify family. <br />
                                Hope you experience a good journey.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Repeat similar SwiperSlide blocks for other slides */}
            </Swiper>
        </div>
    );
};

export default Banner;
