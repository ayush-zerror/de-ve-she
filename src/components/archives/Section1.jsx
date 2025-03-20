import React, { useEffect } from 'react'
import styles from './archive.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
  
  return (
    <div className={styles.archiveSection1} id='archiveSection1'>
        <Image width={1000} height={1000} src="/archive/archive-banner.JPG" alt='image'/>
        <div className={styles.overlayA1}>
            <div className={styles.marquee}>
            <h3>WHAT'S ON THE MENU</h3>
            <h3>WHAT'S ON THE MENU</h3>
            <h3>WHAT'S ON THE MENU</h3>
            <h3>WHAT'S ON THE MENU</h3>
            <h3>WHAT'S ON THE MENU</h3>
            </div>
            {/* <Image width={1000} height={1000} src="https://rahasyafragrances.com/cdn/shop/files/Final_Green_Nails_-_Mobile_Solo_1024x1024.png?v=1728549246"  alt='image'/> */}
        </div>
    </div>
  )
}

export default Section1