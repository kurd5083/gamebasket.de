import React from 'react'
import styled from '@componentsUi/SearchInput/SearchInput.module.scss'
import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className={styled.search}>
      <input 
        className={styled.search_input} 
        type="text" 
        placeholder='asd'
        />
      <button className={styled.search_button}>
        <Image src='/images/search_icon.svg' width={16} height={16} alt=""/>
        </button>
    </div>
  )
}

export default SearchInput
