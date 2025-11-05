'use client';

import MotionSection from '../shared/Motion/MotinSection';
import SwiperComponent from '../shared/Swiper/Swiper';

function HomePage() {
  return (
    <>
      <SwiperComponent />
      <div className='w-full mx-auto max-w'>
        <MotionSection
          title="عسل طبیعی از ما بخواه!"
          color="text-red-500"
          variant="fadeUp"
        />
        <div className="text-2xl w-full h-80 bg-amber-200 flex items-center justify-center">
          سکشن
        </div>
        <MotionSection
          title="کیفیت بالا، طعم بی‌نظیر!"
          color="text-green-500"
          variant="fadeLeft"
        />
        <div className="text-2xl w-full h-80 bg-amber-200 flex items-center justify-center">
          سکشن
        </div>
        <MotionSection
          title="از دل طبیعت تا سفره شما"
          color="text-blue-500"
          variant="fadeRight"
        />
        <div className="text-2xl w-full h-80 bg-amber-200 flex items-center justify-center">
          سکشن
        </div>
      </div>
    </>
  );
}

export default HomePage;
