import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { data } from "src/component/modal/data";

export const SwiperCards = () => {
  return (
    <div className="mx-auto flex h-[65vh] max-w-5xl">
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mx-auto flex h-[70vh] flex-col bg-cover bg-center p-6 text-white"
        style={
          {
            // backgroundImage:
            //   "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }
        }
      >
        {data.map((item: any) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex flex-col justify-center pl-20 text-white"
              style={
                {
                  // "--swiper-navigation-color": "#fff",
                  // "--swiper-pagination-color": "#fff",
                }
              }
            >
              <div className="mb-10 text-5xl font-bold">{item.title}</div>
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
