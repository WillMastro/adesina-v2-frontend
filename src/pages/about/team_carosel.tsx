import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const TeamCarosel = ({pictures}:any) => {
    const teamMembers = [
        {
            name: "Opeyemi Adesina",
            role: "Founder, CEO",
            image: "/Opeyemi.jpg",
        },
        {
            name: "Blessing Atanda",
            role: "Admin/Account Executive",
            image: "/blessing.jpg",
        },
        {
            name: "Mary AKinrinmade",
            role: "Legal Executive",
            image: "/mary.jpg",
        },
        {
            name: "Olamide Olutola",
            role: "Media/Marketing Executive",
            image: "/olamide.jpg",
        },
        {
            name: "Olayemi Isreal",
            role: "Construction Executive",
            image: "/olayemi.jpg",
        },
        {
            name: "Fatolu Olaoluwa",
            role: "IT Executive",
            image: "/fatolu.jpg",
        },
    ];

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {teamMembers?.map((i:any, index:number) => (
            <>
             <div className="my-mother down-2 bg-black top-8 hidden-ls pd-10">
                <span className="besley-bold px15 xs-px20 alice">{i?.name}</span>
                <div className="my-mother xs-down-2"><span className="faded-sol besley-regular px13 xs-px15">{i?.role}</span></div>
             </div>
            <div key={index} className="img-container-team">
                <img src={i?.image} alt="" />
            </div>
             <div className="my-mother down-2 hidden-xs bg-black top-8 xs-top-40 pd-10">
                <span className="besley-bold px15 xs-px15 alice">{i?.name}</span>
                <div><span className="faded-sol besley-regular px13 xs-px13">{i?.role}</span></div>
             </div>
            </>
            
        ))}

      </Carousel>

    </>
  );
}

export default TeamCarosel;