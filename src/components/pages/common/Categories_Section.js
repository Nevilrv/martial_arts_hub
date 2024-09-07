import React from "react";
import { CiSearch } from "react-icons/ci";
import Categories_Card from "./Categories_Card";
import Slider from "react-slick";

const Categories_Section = () => {
  const data = [
    {
      images:
        "https://s3-alpha-sig.figma.com/img/85f5/93ed/252f0ac099af762c888b4cfe201bab14?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpaLtidM5ogtMzR9SlY85U5EtafNGwHGTo~wjyrqujpB20I7ZOqWIwReLJpth3BpsI-k8NPqM8dNDEPzejOaHuR7VYDLiw9OjmFLe4jHZ9UdGpEcIpuRq2KLK~91EMw7AIEPEojrpKiLOVkOEqnp6sMH862GXRCc2ScWkuHkqztcozre2ByILPhaKaqCjYStTazUim3xsQZbRPkP22L4RVnFfv1j5XSdLEMqkjsnrPizQrMyD0j7fxmSFprgxVAadrqO1SeY~xpVBP7APhB8N2bZCMSL~JJqJlZ~UpFkWTs30sSN7vZUChlXLNGjjRU6FHKjjOWd4ZTxinjG5pZMdQ__",
      headding: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/e543/751e/4ff795400dfa8f6474a9bbd8f592f0c7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cL1em1tdy0lVe8SM6GE0h4xaF-odSnN~hczkWXxKdCKwRn6pt9o9RBtqORTbtitV7uAp2wU6yhQZph1FauT~3KU3-6W7gOY9zaz9unkSs9YJCH4z57mJEK0LetRSTJMeCHwru11~paeBuaxeMD-h8BYi4CzDvxjAPT1x5e4ufM3bUWeLVoyfr9wrMGVIodlWNDb4qN3IBvOK-SioCboTV3JvCaNBap5AGha2~~eO1Dt~EYBrguaUfqcUsOCFHcKi6n8dRfNDNyoFmy5EkKN2SQQuXE9DCxsbXsZhn24RX72i56HSUIBfgV4oTEseaRhPSjLuxlNUzSIMvj5wDh26Gw__",
      headding: "Brazilian Jiu Jitsu",
      details:
        "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/3792/1e12/72af208e1d9a41ed747b5d79ad6d2594?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyKJ0JwTrMAMK27POSCMhFV1pcZGp-qHIp9OVChkX84hXeOWRMOV5T4Vmeslzzs~VV3JsbSCQVWfKZ8br0O8WRq4uLzGQHr~dY4dsTYWnvh1j1~q6eo9wTgmEbl78X2zQ4VeYP8WsXdynKODUxeDqxk9wkRh5GS6Bt9yoiidgMZcVHp~AUfHvoGqyrT~h4hzda2r-KJO6z6QAYwVj-nHOfRbtWDuJPMdySiWkVn3uKM8whSVZMeA1PagTavynfjQXEAh2B-kMbFEt8Ul9J-9BHw~tp47Vz5eAegJ4jx4XGYZwGn4gjsVOGhgnqt53KV0Iv1Si53Ndl0SOOpIEqo84w__",
      headding: "Judo",
      details:
        "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/2fe6/1b02/a6fc3775810732971788141798f832b9?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmjSlloOaBAgKc7n8uaUL0I2K3F0DRj1xntqPjNlwym-RWmP6m~ufHMogG4jlqJQlC971ZvbVTx8gEbJtYofPprw8v8FS~-8-DpWBPi4sE3QyCwkViLiPw3YlbB5U7e5m6oxE0IWu1UAw1VR0n4B9nd3V1N5VFLEyyF3tLTggo4SI0X~sSkdj3Sq95HRBL19ubCwYNWQ7sRDEqpxY1wuvhFAYl~SUD-c12Gxpp9cL1J1jncQYj1mz13UjL78IIdvPsPxFYOlzDx0okeqn9-e2Si6ZDrirn-K-E0c2Me6CeL6FDwnN6XDPKKJedd-H2IjOaaiLjw3w4tnKQKpm9ntbA__",
      headding: "Boxing",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/85f5/93ed/252f0ac099af762c888b4cfe201bab14?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YpaLtidM5ogtMzR9SlY85U5EtafNGwHGTo~wjyrqujpB20I7ZOqWIwReLJpth3BpsI-k8NPqM8dNDEPzejOaHuR7VYDLiw9OjmFLe4jHZ9UdGpEcIpuRq2KLK~91EMw7AIEPEojrpKiLOVkOEqnp6sMH862GXRCc2ScWkuHkqztcozre2ByILPhaKaqCjYStTazUim3xsQZbRPkP22L4RVnFfv1j5XSdLEMqkjsnrPizQrMyD0j7fxmSFprgxVAadrqO1SeY~xpVBP7APhB8N2bZCMSL~JJqJlZ~UpFkWTs30sSN7vZUChlXLNGjjRU6FHKjjOWd4ZTxinjG5pZMdQ__",
      headding: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/e543/751e/4ff795400dfa8f6474a9bbd8f592f0c7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cL1em1tdy0lVe8SM6GE0h4xaF-odSnN~hczkWXxKdCKwRn6pt9o9RBtqORTbtitV7uAp2wU6yhQZph1FauT~3KU3-6W7gOY9zaz9unkSs9YJCH4z57mJEK0LetRSTJMeCHwru11~paeBuaxeMD-h8BYi4CzDvxjAPT1x5e4ufM3bUWeLVoyfr9wrMGVIodlWNDb4qN3IBvOK-SioCboTV3JvCaNBap5AGha2~~eO1Dt~EYBrguaUfqcUsOCFHcKi6n8dRfNDNyoFmy5EkKN2SQQuXE9DCxsbXsZhn24RX72i56HSUIBfgV4oTEseaRhPSjLuxlNUzSIMvj5wDh26Gw__",
      headding: "Brazilian Jiu Jitsu",
      details:
        "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/3792/1e12/72af208e1d9a41ed747b5d79ad6d2594?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyKJ0JwTrMAMK27POSCMhFV1pcZGp-qHIp9OVChkX84hXeOWRMOV5T4Vmeslzzs~VV3JsbSCQVWfKZ8br0O8WRq4uLzGQHr~dY4dsTYWnvh1j1~q6eo9wTgmEbl78X2zQ4VeYP8WsXdynKODUxeDqxk9wkRh5GS6Bt9yoiidgMZcVHp~AUfHvoGqyrT~h4hzda2r-KJO6z6QAYwVj-nHOfRbtWDuJPMdySiWkVn3uKM8whSVZMeA1PagTavynfjQXEAh2B-kMbFEt8Ul9J-9BHw~tp47Vz5eAegJ4jx4XGYZwGn4gjsVOGhgnqt53KV0Iv1Si53Ndl0SOOpIEqo84w__",
      headding: "Judo",
      details:
        "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/2fe6/1b02/a6fc3775810732971788141798f832b9?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmjSlloOaBAgKc7n8uaUL0I2K3F0DRj1xntqPjNlwym-RWmP6m~ufHMogG4jlqJQlC971ZvbVTx8gEbJtYofPprw8v8FS~-8-DpWBPi4sE3QyCwkViLiPw3YlbB5U7e5m6oxE0IWu1UAw1VR0n4B9nd3V1N5VFLEyyF3tLTggo4SI0X~sSkdj3Sq95HRBL19ubCwYNWQ7sRDEqpxY1wuvhFAYl~SUD-c12Gxpp9cL1J1jncQYj1mz13UjL78IIdvPsPxFYOlzDx0okeqn9-e2Si6ZDrirn-K-E0c2Me6CeL6FDwnN6XDPKKJedd-H2IjOaaiLjw3w4tnKQKpm9ntbA__",
      headding: "Boxing",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
    },
    
  ];
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
          arrows:false
        },
      },
    ],
  };

  return (
    <>
      <section className="py-space">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-y-3">
            <h2 className="md:text-[32px] text-[23px] font-medium leading-10">
              Explore our Categories
            </h2>
            <div className="relative">
              <input
                type="text"
                className="md:w-[315px] w-full h-[50px] border border-black/80 rounded-full bg-transparent placeholder:text-[15px] placeholder:text-black/40 pl-[44px] pr-[52px]"
                placeholder="Search Category"
              />
              <CiSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl" />
              <button className="px-4 py-3 h-[50px] bg-black text-white text-base rounded-full absolute top-0 right-0">
                Find
              </button>
            </div>
          </div>
          {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-5 gap-6"> */}
          <Slider {...settings} className="mt-5 slider-1" >
            {data.map((items, i) => (
              <Categories_Card data={items} key={i} />
            ))}
          </Slider>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Categories_Section;
