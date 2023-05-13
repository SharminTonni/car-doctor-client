import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Team = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <div className="my-12">
      <div className=" text-center space-y-5">
        <h2 className="text-2xl font-bold text-orange-600">Team</h2>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which donot look even slightly
          believable.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Car Engine Plug</h2>
                <p> Engine Expert</p>
              </div>
              <div>
                <img
                  className="w-1/2 text-center mx-auto h-1/4"
                  src="https://logowik.com/content/uploads/images/social-media7697.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
