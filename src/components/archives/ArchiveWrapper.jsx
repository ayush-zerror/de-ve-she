import React from 'react'
import Section1 from './Section1'
import styles from './archive.module.css'
import Section3 from './Section3'
import Section2 from './Section2'
import Footer from '../footer/Footer'

const ArchiveWrapper = () => {
  return (
    <div className={styles.archiveWrapper}>
        {/* <Section1/> */}
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default ArchiveWrapper