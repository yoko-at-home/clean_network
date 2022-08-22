import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { data } from "src/component/modal/data";

export const SwiperCards = () => {
  return (
    <div className="mx-auto my-3 flex w-screen justify-center sm:my-10">
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sm:pb-20"
      >
        {data.map((item: any) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex flex-col justify-start pl-6 sm:justify-center sm:pl-20"
            >
              <div className="mb-6 text-3xl font-bold sm:text-5xl">
                {item.title}
              </div>
              <div>
                <div className="text-lg font-semibold">{item.desc}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-lg font-semibold">{item.desc}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-lg font-semibold">{item.desc}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
