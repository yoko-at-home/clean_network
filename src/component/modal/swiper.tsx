import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
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
        modules={[Parallax, Pagination, Navigation]}
        className="mx-auto flex h-[70vh] flex-col bg-cover bg-center py-6 text-white"
        style={{
          backgroundImage:
            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
        }}
      >
        {data.map((item: any) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex flex-col justify-between px-10 text-white"
            >
              <div className="text-5xl">{item.title}</div>
              <div>
                <div className="text-lg">{item.desc}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-lg">{item.desc}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-sm">{item.desc2}</div>
                <div className="text-lg">{item.desc}</div>
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
