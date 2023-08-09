//rfce
import React from 'react'
import './Header.css'

function header() {
  return (
    <div className='header-container'>
        <button>Show all</button>
        <div className='search-container'>
            <input type='text' placeholder='enter country'/>
        </div>
    </div>
  )
}

export default header