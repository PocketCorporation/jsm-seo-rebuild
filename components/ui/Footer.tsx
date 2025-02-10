import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between mt-24 body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col'>
      <p>Copyright @ 2025 JS Mastery Pro | All Rights Reserved</p>
      <div className="flex gap-x-9">
        <Link 
          href='/terms-of-use'
        >
          Terms & Condiditons
        </Link>
        <Link 
          href='/privacy-policy'
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer