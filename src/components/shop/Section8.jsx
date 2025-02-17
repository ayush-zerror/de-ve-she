import React from 'react'
import styles from './shop.module.css'
import Image from 'next/image'

const Section8 = () => {
    return (
        <div className={styles.shopSection8}>
            <div>
                <h2>Your interests and values are</h2>
                <h2>your guiding stars <span>to happiness</span></h2>
                <h2><span>and success.</span></h2>
            </div>
            <div className={styles.secPara7}>
                <h6>With years of experience</h6>
                <p>providing online education, I've learned
                    that the key to supporting you is <span>helping you uncover</span> your strengths and passions.
                </p>
            </div>
            <Image width={1000} height={1000} src="https://emmpo.com/assets/252fc8e319ae8b8e2099.png"  alt='image'/>
        </div>
    )
}

export default Section8