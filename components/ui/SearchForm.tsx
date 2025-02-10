import Image from 'next/image'
import React from 'react'

const SearchForm = () => {
  return (
    <form action="">
        <label htmlFor="">
            <Image 
                src='/magnifying-glass.svg'
                className='absolue left-8'
                alt='Search icon'
                width={32}
                height={32}
            />
        </label>
    </form>
  )
}

export default SearchForm