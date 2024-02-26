import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Searchbar from './Searchbar'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md py-5'>
        <div className='container grid grid-cols-3'>
        <Link href="/" className='relative flex items-center h-auto my-auto '>
            <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="logo-img"
            width={200}
            height={100}
             className='object-contain object-left'
            />
        </Link>
        <Searchbar />
        <Navbar />
        </div>
        
    </header>
  )
}

export default Header