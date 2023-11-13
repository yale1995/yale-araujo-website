'use client'

import Image from 'next/image'
import ImageJPG from '@/assets/neom-sXwssebYacc-unsplash.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export function AutoCarouselProjects() {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={32}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 800,
        disableOnInteraction: false,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>

      <SwiperSlide className="max-w-[38rem] rounded-2xl overflow-hidden">
        <Image
          src={ImageJPG}
          alt="carousel item"
          width={600}
          height={450}
          className="rounded-2xl object-fill"
          priority
        />
      </SwiperSlide>
    </Swiper>
  )
}
