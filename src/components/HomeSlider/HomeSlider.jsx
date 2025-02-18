import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const HomeSlider = ({ homeRef }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <Link href='/' ref={homeRef} className='home-slider'>
      <Image width={300} height={45} id='logo-h' src="/images/logor.png" alt='image' />
      <div className='horizontal-scroll' ref={scrollRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className='slide1'>
          <Image
            fill
            src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBG.46b433ec.webp&w=3840&q=65"
            alt="image"
          />
          <div className='slide1-container'>
            {[...Array(16)].map((_, i) => (
              <Image
                key={i}
                id={`sl1-ig${i + 1}`}
                width={1000}
                height={1000}
                src={`/images/img${i + 1}.avif`}
                alt='image'
              />
            ))}
          </div>
        </div>
        <div className='slide2'>
          <Image
            width={1000}
            height={1000}
            src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBG.3a61546b.webp&w=3840&q=65"
            alt="image"
          />
          <div className='slide1-container'>
            <Image id='sl2-ig1' width={1000} height={1000} src="/images/im1.avif" alt='image' />
            <Image id='sl2-ig2' width={1000} height={1000} src="/images/im2.avif" alt='image' />
            <Image id='sl2-ig3' width={1000} height={1000} src="/images/im3.avif" alt='image' />
            <Image id='sl2-ig4' width={1000} height={1000} src="/images/im4.avif" alt='image' />
            <Image id='sl2-ig5' width={1000} height={1000} src="/images/im5.avif" alt='image' />
            <Image id='sl2-ig6' width={1000} height={1000} src="/images/im6.avif" alt='image' />
            <Image id='sl2-ig7' width={1000} height={1000} src="/images/im7.avif" alt='image' />
            <Image id='sl2-ig8' width={1000} height={1000} src="/images/im8.avif" alt='image' />
            <Image id='sl2-ig9' width={1000} height={1000} src="/images/im9.avif" alt='image' />
            <Image id='sl2-ig10' width={1000} height={1000} src="/images/im10.avif" alt='image' />
            <Image id='sl2-ig11' width={1000} height={1000} src="/images/im10.avif" alt='image' />
            <Image id='sl2-ig12' width={1000} height={1000} src="/images/im10.avif" alt='image' />
            <Image id='sl2-ig13' width={1000} height={1000} src="/images/im11.avif" alt='image' />
            <Image id='sl2-ig14' width={1000} height={1000} src="/images/im12.avif" alt='image' />
            <Image id='sl2-ig15' width={1000} height={1000} src="/images/im13.avif" alt='image' />
            <Image id='sl2-ig16' width={1000} height={1000} src="/images/im14.avif" alt='image' />
            <Image id='sl2-ig17' width={1000} height={1000} src="/images/im15.avif" alt='image' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeSlider;
