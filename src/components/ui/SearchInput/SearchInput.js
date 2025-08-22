import React from 'react'
import styled from '@componentsUi/SearchInput/SearchInput.module.scss'

const SearchInput = () => {
  return (
    <div className={styled.search}>
      <input 
        className={styled.search_input} 
        type="text" 
        placeholder='asd'
        />
      <button className={styled.search_button}>
        <img src='/images/search_icon.svg'/>
        </button>
    </div>
  )
}

export default SearchInput
