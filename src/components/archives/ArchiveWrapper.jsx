import React from 'react'
import Section1 from './Section1'
import styles from './archive.module.css'
import Section3 from './Section3'

const ArchiveWrapper = () => {
  return (
    <div className={styles.archiveWrapper}>
        <Section1/>
        <Section3/>
    </div>
  )
}

export default ArchiveWrapper