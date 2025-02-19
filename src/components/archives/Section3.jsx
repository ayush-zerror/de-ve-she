import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import styles from './archive.module.css'
gsap.registerPlugin(ScrollTrigger)


const Section3 = () => {

    useEffect(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#archiveSection3",
                scroller: "body",
                start: "top 0%",
                end: "top -350%",
                pin: true,
                // markers: true,
                scrub: 1
            }
        })

        tl.to("#elem1", {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            backgroundPosition: "0 200%",
            duration:1.5
        }, "a")

        tl.to("#elem2", {
            clipPath: ` polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            backgroundPosition: "0 100%",
            duration:1.5
        }, "a")

        tl.to("#elem2", {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            backgroundPosition: "0 200%",
            duration:1.5
        }, "b")
        tl.to("#elem3", {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            backgroundPosition: "0 100%",
            duration:1.5
        }, "b")
        tl.to("#elem3", {
            clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`,
            backgroundPosition: "0 200%",
            duration:1.5
        }, "c")

        tl.to("#elem4", {
            clipPath: ` polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
            backgroundPosition: "0 100%",
            duration:1.5
        }, "c")

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => tl.kill();
    }, [])

    return (
        <div id="archiveSection3" className={styles.archiveSection3}>
            <div className={`${styles.elem} ${styles.elem1}`} id='elem1'>
            </div>
            <div className={`${styles.elem} ${styles.elem2}`} id='elem2'>
            </div>
            <div className={`${styles.elem} ${styles.elem3}`} id='elem3'>
            </div>
            <div className={`${styles.elem} ${styles.elem4}`} id='elem4'>
            </div>
        </div>
    )
}

export default Section3