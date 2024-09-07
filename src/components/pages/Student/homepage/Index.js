import React from "react";
import SportsPsychology from "../../../../assets/images/SportsPsychology.png";
import Physio from "../../../../assets/images/Physio.png";
import MartialArts from "../../../../assets/images/MartialArts.png";
import Workout from "../../../../assets/images/Workout.png";
import Nutrition from "../../../../assets/images/Nutrition.png";
import Categories_Section from "../../common/Categories_Section";
import { IoIosArrowRoundForward } from "react-icons/io";
import Instructors_Card from "../../common/Instructors_Card";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const Instructors = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/dc6f/92f6/b78cdb7cd5b4314108aa35cbf0763912?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTZfdEYNal~fS5Dou~uzsBqzV9FcOzlOsxxlR2zYo1zzp~e9tUeEtDpiauteTio3SiFFd8P0h7kbdY3l96z-iyNRyRecMSkGXjDVteBvpl~Js845MJcVigX4YdlMVXDDLQW2uWaBx4rk5f4lf5TTekPjsqi1W56VChBVSv0GtA30ir3WaILFXzU0i7e0aZC3-IK6kTKZecXK4gwNkMCbbOomRx7ydOSDh5U9sUVlSx-IayykRBOob4U~y0~ItfEyU1A7lS1PWPz1F7zEcKVYah1etH6SH5XRqK5nHlu7W2XIRE5mBXhdpkOWDdOkKuAkW5PLtGKt3Mvuq3SotpTFLA__",
    rating: "4.3 (1200 Ratings)",
    name: "Keyn Mojho",
    experience: 8,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/825e/eb81/b4deed3c1c7883da9ff02315e9e79ea6?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUzbIhae2k6uZbbun-ZXVHD41az6UTTgzw8Ec8xxtAGcjw790bG9fCJGWTdoXeeMYiBJxhpsTVNBVFMZMrwU26M~rTI9NGpWxN7pGb5sz-JKZQQat9ZrMQ33t1C9CrM458FznDDaffB6BhuoJj~PebKgmq994QflcCgtSt9ICNX7ZS8~FS4drwcnmRSVWghzsBptkm4HyaxiXqcM9VqfJ7x4pHJ9d2nJY5xgZHyGR3M0TNguyqDx0KutKl3E6sRI30rwSOQGzP6IEkMnw-mOtl5BTwfQo5V7kDzfJXA1DJ5DdiGP19N6HMboOlm4oTM6l83NhM4clw6RKaVI~DNioA__",
    rating: "4.3 (1200 Ratings)",
    name: "Marry Jhon",
    experience: 2,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/118f/1446/b44f8ff982e7a6e3699beeb0c29a1bff?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fww80~xlKLda~aOXTKCUeeVV28jSJE7TiMUPXvI84P04CAXjPwwtwxw1Rv6X9bxTMS6ggJWlA6YIim5xFY6v8vl3547FGApYNKTKmt-mnbnROAsyZpqAgoIzqlE6289fGUE6VKKE0BNniQ2FXwGSwbauP2YEdoWs0QtT-SVOUNocCdIBl1La8FTwT0a7b~qQnJcZU6G6Bb6YUcvycSrb~QQeQ~rdE7cjnpN8BCgjLsoj4vuW8TjCih7Lnv7eeMhtTWlLbyVsIMEZiPfjRH5cyZgyDFj-KQZowL0K4z7YDV23xvvjEznO6vuVz4-o5-NgHk6KhwaJIJQcZQk92XSZEA__",
    rating: "4.3 (1200 Ratings)",
    name: "Jhon Martin",
    experience: 5,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/edda/4dab/45d447da6eb55dd2f7b47a447fa47e25?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9qZwNab2VI27izaKzNzA8wn7llFQ0ByDXawQyJMFnFua9vvHlLPhyUJ-~6W~S6g~XUJh1Hqw0HN7um3-MpwxsnSfCNq6IfFUYHiFpJpV7mXXi1ZhxcINNTif5p3upi9hnD-om3XqiGCyVPWGJRab8fMzVM7VVg1lh15mm2cIT50MT4X3AgQchI7GiVrVZNCZdQe4DDaeqvF~9Z5eJz6bMDoGDFRJ2gB~RSI1f-t~z2qUsvz9z6wtD8LbnIaO~0w5xUa2uxa2IAkWvx02Aes5NKBjStlrEo~p5twe2GPhIsDwAeKn5ULYFDn36mvCCOFCbBt1KSvJnCT1Lx7SDihXQ__",
    rating: "4.3 (1200 Ratings)",
    name: "Kiya Jhon",
    experience: 5,
  },
];

const Index = () => {
  return (
    <>
      {/* Hero section start */}
      <section className="md:py-space pb-10">
        <h1 className="text-[70px] text-center font-extrabold">
          martial arts hub.
        </h1>
        <p className="text-[22px] text-center max-w-[669px] mx-auto leading-[31.9px]">
          The place to begin or elevate your martial arts journey. Created by
          martial artists for martial artists.
        </p>
        <div className="flex justify-center items-center mt-9 flex-wrap gap-y-3">
          <button className="bg-transparent h-[60px] text-white hover:text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center relative after:absolute after:bg-black after:h-full after:w-full after:bottom-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 overflow-hidden border border-black">
            Start Today
          </button>
          <button className="ml-3 relative bg-transparent h-[60px] border border-black text-black text-xl leading-8 px-7 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-0 after:w-full after:top-0 after:left-0 hover:after:h-full after:transition-[2s] after:-z-20 hover:text-white overflow-hidden">
            Already a Member
          </button>
        </div>
      </section>
      {/* Hero section start */}
      {/* Services section start */}
      <section className="bg-black px-6 lg:px-8 py-[76px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col justify-center items-center">
          <img src={SportsPsychology} alt="" />
          <h2 className="text-white text-[22px] leading-[26.4px] text-center mt-4">
            Sports Psychology
          </h2>
          <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2">
            Choose a specialist to enhance your mental game and boost
            performance.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Physio} alt="" />
          <h2 className="text-white text-[22px] leading-[26.4px] text-center mt-4">
            Physio
          </h2>
          <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2">
            Choose a specialist to optimize your recovery and maintain peak
            physical performance.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={MartialArts} alt="" />
          <h2 className="text-white text-[22px] leading-[26.4px] text-center mt-4">
            Martial Arts Coaching
          </h2>
          <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2">
            Choose your coach for 1-to-1 sessions, group sessions, or fight
            analysis, and elevate your game to new heights.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Workout} alt="" />
          <h2 className="text-white text-[22px] leading-[26.4px] text-center mt-4">
            S&C
          </h2>
          <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2">
            Choose a specialist to tailor a strength and conditioning program to
            achieve your goals.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={Nutrition} alt="" />
          <h2 className="text-white text-[22px] leading-[26.4px] text-center mt-4">
            Nutrition
          </h2>
          <p className="text-white/50 text-[13px] leading-[18.2px] text-center max-w-[195px] mt-2">
            Choose a specialist to guide your nutrition and meet your needs.
          </p>
        </div>
      </section>
      {/* Services section end */}
      {/* Categories section start */}
      <Categories_Section />
      {/* Categories section end */}
      <section className="px-6 lg:px-8">
        <div className="py-14 md:px-14 px-3 bg-gay-300 rounded-2xl">
          <div className="flex items-center justify-between flex-wrap gap-y-5">
            <div>
              <h2 className="text-white text-[32px] font-semibold">
                Can't see your discipline?
              </h2>
              <p className="text-lg font-light text-white max-w-[429px] mt-3">
                Can't find your martial art discipline in our list? Don't worry!
                Simply notify us, and we'll make every effort to add it to our
                offerings.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="border border-white/30 md:w-[485px] w-full h-[50px] rounded-full pl-8 focus:outline-none bg-gay-100/10 placeholder:text-white/50 text-white"
                placeholder="Enter Discipline’s name"
              />
              <textarea
                className="border border-white/30 md:w-[485px] w-full h-[90px] rounded-2xl pl-8 focus:outline-none bg-gay-100/10 placeholder:text-white/50 text-white pt-4"
                placeholder="Description"
              ></textarea>
              <div className="flex items-center justify-end">
                <button className="py-2 px-6 bg-black text-white rounded-full">
                  Notify Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* we are section start */}
      <section className="py-20 px-6 lg:px-8">
        <h2 className="Titile">martial arts hub.</h2>
        <div className="-mt-7">
          <h2 className="text-black text-[40px] font-medium leading-10 text-center">
            Who we are
          </h2>
          <p className="text-center max-w-[1052px] text-lg text-black/50 mx-auto mt-4">
            Welcome to Martial Arts Hub, the global online platform for martial
            artists of all levels. We connect practitioners who want to learn
            and improve themselves with top-notch instructors who are passionate
            about sharing their knowledge and helping others. Our personalized
            guidance is tailored to fit your unique needs, whether you prefer
            the convenience of online sessions or the hands-on experience of
            face-to-face training.
          </p>
          <p className="text-center max-w-[991px] text-lg text-black/50 mx-auto mt-4">
            But we don't stop there. At Martial Arts Hub, we believe in holistic
            improvement. That's why we also offer access to nutritionists,
            strength and conditioning coaches, physiotherapists, and sports
            psychologists. Our diverse network of experts ensures you have the
            comprehensive support you need to excel in every aspect of your
            martial arts journey. Wherever you are based in the world, you can
            join us at Martial Arts Hub and unlock your full potential. Your
            path to excellence starts here.
          </p>
          <div className="flex items-center justify-center">
            <button className="relative bg-transparent h-[50px] border border-black/50 text-white text-lg leading-8 px-4 py-4 rounded-full flex justify-center items-center after:absolute after:bg-black after:h-full after:w-full after:top-0 after:left-0 hover:after:h-0 after:transition-[2s] after:-z-20 hover:text-black overflow-hidden group mt-4">
              Learn more
              <IoIosArrowRoundForward className="text-white text-2xl group-hover:text-black  rotate-[-46deg]" />
            </button>
          </div>
        </div>
      </section>
      {/* we are section end */}

      {/* Ready to Learn section start */}
      <section className="bg-black py-[107px] px-6 lg:px-8">
        <h2 className="text-[40px] text-white font-medium text-center">
          Ready to Learn?
        </h2>
        <p className="text-xl text-center text-white/50 mt-5">
          Ready to learn martial arts but need some direction? Don’t worry,
          we've got you covered.
        </p>
        <p className="text-xl text-center text-white/50 mt-5 max-w-screen-lg mx-auto">
          Join our online classes and learn from world-class martial arts
          instructors. Train at your own pace and master the art of self-defense
          or message our instructors for personalized guidance.
        </p>
        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
          <button className="px-6 py-3 text-black flex items-center bg-white rounded-full text-lg font-medium">
            Start Today
            <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
          </button>
          <button className="px-6 py-3 text-white flex items-center bg-transparent border border-white rounded-full text-lg font-medium">
            Learn more
            <IoIosArrowRoundForward className="text-white text-2xl rotate-[-46deg]" />
          </button>
        </div>
      </section>
      {/* Ready to Learn section end */}

      {/* Join Us section start */}
      <section className="py-space px-6 lg:px-8">
        <h2 className="text-center text-[40px] font-medium">Why Join Us</h2>
        <div>
          <div className="h-[420px] w-[420px] bg-gay-400/15 rounded-full mt-[188px] mx-auto flex items-center justify-center relative">
            <div className="h-[285px] w-[285px] bg-primary rounded-full border-2 flex items-center justify-center">
              <h2 className="text-black text-[28px] font-bold tracking-[-1px]">
                martial arts hub.
              </h2>
            </div>
            <div className="absolute top-[-23%] left-[-50%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Expert Instructors
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Our highly qualified instructors bring years of experience and
                  passion to every class.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] right-2">
                  1.
                </div>
              </div>
            </div>
            <div className="absolute top-[-23%] right-[-50%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Diverse Styles
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  We offer a variety of martial arts styles, including Karate,
                  Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute bottom-[-13px] left-2">
                  2.
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-73%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Supportive Community
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Join a welcoming and encouraging community that fosters growth
                  and camaraderie.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-[-13px]">
                  3.
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-23%] right-[-50%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Holistic Development
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Our programs focus on physical fitness, mental resilience, and
                  building confidence.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-[-15px] left-8">
                  4.
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-23%] left-[-50%]">
              <div className="w-[325px] h-[160px] bg-gay-400 rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Flexible Training
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  We provide classes for all ages and skill levels, ensuring
                  everyone can find their perfect fit.
                </p>
                <div className="h-[38px] w-[38px] bg-gay-400 border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-[-15px] right-8">
                  5.
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[-73%]">
              <div className="w-[325px] h-[160px] bg-black rounded-3xl pt-[35px] relative pl-8">
                <h2 className="text-white text-xl font-semibold">
                  Community Focus
                </h2>
                <p className="text-white/50 text-[13px] max-w-[255px]">
                  Join a community dedicated to your personal growth and
                  excellence.
                </p>
                <div className="h-[38px] w-[38px] bg-black border-[3px] border-gay-200 rounded-full text-white text-[13px] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-[-13px]">
                  6.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Us section end */}
      {/* Instructors section start */}
      <section className="py-space px-6 lg:px-8">
        <h2 className="font-medium text-[32px]">Our Instructors</h2>
        <Slider {...settings} className="mt-5 slider-2">
          {Instructors.map((items, i) => (
            <Instructors_Card data={items} />
          ))}
        </Slider>
      </section>
      {/* Instructors section end */}
      {/* Download the App */}
      <section className="bg-black py-[107px] px-6 lg:px-8">
        <h2 className="text-[40px] text-white font-medium text-center">
        Download the App to Get more <span className="border-b border-white">Benefits</span>
        </h2>
        <p className="text-[22px] text-center text-white/50 mt-5 max-w-[820px] mx-auto">
        Join us and begin your journey towards ultimate fitness, where you will feel empowered, stronger, healthier, and more confident than ever before.
        </p>
        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
          <button className="px-6 py-3 text-black flex items-center bg-white rounded-full text-lg font-medium">
          Get the App
            <IoIosArrowRoundForward className="text-black text-2xl group-hover:text-black  rotate-[-46deg]" />
          </button>
        </div>

      </section>
      {/* Download the App */}
      {/* Work section start */}
      <section></section>
      {/* Work section end */}
    </>
  );
};

export default Index;
