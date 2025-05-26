import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <Slider {...settings}>
        <div className="px-2"><img className=" rounded-2xl" src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/apple_intelligence__gbh77cvflkia_xlarge_2x.jpg" alt="slide1" /></div>
        <div className="px-2"><img className=" rounded-2xl" src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/camera__exi2qfijti0y_xlarge_2x.jpg" alt="slide2" /></div>
        <div className="px-2"><img className=" rounded-2xl" src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/battery__2v7w6kmztvm2_xlarge_2x.jpg" alt="slide3" /></div>
        <div className="px-2"><img className=" rounded-2xl" src="https://www.apple.com/v/iphone/home/cb/images/overview/consider/innovation__os9bmmo3mjee_xlarge_2x.jpg" alt="slide4" /></div>
      </Slider>
    </div>
  );
}
