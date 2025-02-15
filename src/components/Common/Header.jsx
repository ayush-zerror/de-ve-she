import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({headerRef}) => {
  return (
    <header ref={headerRef}>
      <Image width={300} height={45} id='header-logo'  src="/images/logor.png" alt='logo'/>
      <div className='header-links'>
        <Link href="/">home</Link>
        <Link href="/shop">shop</Link>
        <Link href="/product/1">pdp</Link>
        <Link href="/archives">archives</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
      </div>
    </header>
  )
}

export default Header