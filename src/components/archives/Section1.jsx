import React, { useEffect } from 'react'
import styles from './archive.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
    // useEffect(() => {
    //     var tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#archiveSection1",
    //             start: "top 8%",
    //             end: "top 0%",
    //             scrub: true,
    //         }
    //     })
    //     tl
    //         .to("header", {
    //             top: "0%",
    //             delay: 1,
    //             duration:.5
    //         }, "a")
    //         .to(".home-slider", {
    //             top: "-100%",
    //             delay: 1,
    //             duration:.5
    //         }, "a")
    // }, [])
  return (
    <div className={styles.archiveSection1} id='archiveSection1'>
        <Image width={1000} height={1000} src="https://rahasyafragrances.com/cdn/shop/files/orange_bg_low_res_1500x.png?v=1727362381" alt='image'/>
        <div className={styles.overlayA1}>
            <div className={styles.marquee}>
            <h3>NICHE FINE FRAGRANCES INSPIRED BY MODERN INDIA</h3>
            <h3>NICHE FINE FRAGRANCES INSPIRED BY MODERN INDIA</h3>
            <h3>NICHE FINE FRAGRANCES INSPIRED BY MODERN INDIA</h3>
            <h3>NICHE FINE FRAGRANCES INSPIRED BY MODERN INDIA</h3>
            <h3>NICHE FINE FRAGRANCES INSPIRED BY MODERN INDIA</h3>
            </div>
            <Image width={1000} height={1000} src="https://rahasyafragrances.com/cdn/shop/files/Final_Green_Nails_-_Mobile_Solo_1024x1024.png?v=1728549246"  alt='image'/>
        </div>
    </div>
  )
}

export default Section1