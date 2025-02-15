import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HomeSlider = ({ homeRef }) => {
  return (
    <Link href='/' ref={homeRef} className='home-slider'>
      <Image width={300} height={45} id='logo-h' src="/images/logor.png"  alt='image'/>
      <div className='slide1'>
        <Image fill src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBG.46b433ec.webp&w=3840&q=65" alt="image" />
        <div className='slide1-container'>
          <Image id='sl1-ig1' width={1000} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcollina-2.d45d7ca7.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig2' width={1000} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcollina-1.e43998a1.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig10' width={380} height={480} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffoglie.b613ec49.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig11' width={280} height={330} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcervo.914af2db.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig12' width={60} height={300} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Falbero-1.b973206e.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig3' width={1000} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcasa.e3d0a598.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig4' width={1000} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fstrappo.79055c14.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig5' width={350} height={600} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiori.43dee3bf.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig6' width={420} height={470} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-arancione.2f89f5af.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig7' width={200} height={200} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-1.1d837b0c.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig8' width={450} height={450} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ftasso.ef2552a9.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig9' width={400} height={400} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-rosso-2.1056802a.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig13' width={370} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-rosso-1.75581bb1.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig14' width={600} height={500} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-con-geco.4c998c61.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig15' width={350} height={350} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiore-blue.6be80143.webp&w=3840&q=65" alt='imgae' />
          <Image id='sl1-ig16' width={1000} height={700} unoptimized src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffiori-blu.d220fe1b.webp&w=3840&q=65" alt='imgae' />
        </div>
      </div>
      <div className='slide2'>
        <Image fill src="https://dieselfarm.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBG.3a61546b.webp&w=3840&q=65" alt="image" />
        <div className="slide1-container">
        </div>
      </div>
    </Link>
  )
}

export default HomeSlider;