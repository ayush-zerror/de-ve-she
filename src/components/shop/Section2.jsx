import React from 'react'
import styles from './shop.module.css'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className={styles.shopSection2}>
      <div className={styles.shopSection2Top}>
        <div className={styles.crossImg}>
          <Image height={1000} width={1000} src="https://emmpo.com/assets/51deafe99e147c5239b2.png" alt='cross-img' />
        </div>
        <h2>Explore</h2>
        <h2><span>careers</span> where</h2>
        <h2>you can make</h2>
        <h2>a difference!</h2>
        <div className={styles.shopSection2TopBtm}>
          <div className={styles.leftCard}>
            <Image width={1000} height={1000} src="https://emmpo.com/assets/4fbb40b07af6f682db96.png" alt='image'/>
          </div>
          <div className={styles.centerCard}>
            <div className={styles.imgCont}>
              <Image width={1000} height={1000} src="https://emmpo.com/assets/8ef7901dbe5edf86b8b0.png"  alt='image'/>
            </div>
            <p>You find the careers that you would most likely Enjoy and are good at.</p>
          </div>
          <div className={styles.rightCard}>
            <Image width={1000} height={1000} src="https://emmpo.com/assets/601577b96b18bd5ad582.png" alt='image'/>
          </div>
        </div>
      </div>
      <div className={styles.shopSection2Bottom}>
        <h5>All related to</h5>
        <h3>Creativity, <br />
          Sustainability, <br />
          and Tech.</h3>
        <h4>[Take the Quiz]</h4>
        <Image className={styles.strip1} width={1000} height={1000} src="https://emmpo.com/assets/dd22341dae808d910395.png" alt='image'/>
        <Image className={styles.strip2} width={1000} height={1000} src="https://emmpo.com/assets/68dbb3529ef7e3ddd827.png" alt='image'/>
      </div>
    </div>
  )
}

export default Section2