import Link from 'next/link'
import React from 'react'

const HeaderNavigation = ({headerNav}) => {
    return (
        <div ref={headerNav} className='header-links'>
            <Link href="/shop">shop</Link>
            <Link href="/archives">archives</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
        </div>
    )
}

export default HeaderNavigation