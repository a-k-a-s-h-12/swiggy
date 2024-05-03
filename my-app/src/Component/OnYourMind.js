import React from 'react'
import {ONMIND_URL} from "../utils/data.js"
const OnYourMind = (props) => {
  const { item } = props
  return (
    <div>
      <div className="h-[150px] w-[150px]">
        <img src={ONMIND_URL + item.imageId} alt="photo" className='w-full h-full'/>
      </div>
      <span>{item.text}</span>
    </div>
  );
}

export default OnYourMind
