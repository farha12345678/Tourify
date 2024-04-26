import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../../index.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import { useRef } from 'react';

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className='lg:mx-20 lg:ml-28 mt-10'>
             <Swiper
                spaceBetween={80}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                
               
            >
                <SwiperSlide>
                    <img className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/phQHNQD/pexels-pixabay-433942.jpg" />
                </SwiperSlide>
                <SwiperSlide  >
                    <img  className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/ftHh1Zs/pexels-pixabay-534219.jpg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/bNrjG9c/pexels-fabianwiktor-994605.jpg" />
                </SwiperSlide>
                
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/jyxJrg7/pexels-kirandeepsingh-18244220.jpg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/6DGqH4x/hossain-azad-PZ0-MSDlng9w-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide >
                    <img  className='w-96 h-96 md:w-full lg:w-[1200px] lg:h-96 md:h-[250px] rounded-3xl' src="https://i.ibb.co/cJB0jjq/tron-le-w-Uk2-U5-Wirxg-unsplash.jpg" />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

            </Swiper>
        </div>
    );
};

export default Banner;