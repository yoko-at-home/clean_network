import type { NextPage } from "next";
import { SwiperCards } from "src/component/modal/swiper";

export const CardModal: NextPage = () => {
  return (
    <div className="min-h-[75vh] p-4 text-white" style={{ maxWidth: "800px" }}>
      <SwiperCards />
    </div>
  );
};
