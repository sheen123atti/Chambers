import React from 'react';
import './Buy.css';

export default function Buy() {
  return (
    <div className='containerB'>
      <div className='HeadingB'>Buy Property</div>
      <div className='taglineB'>Happy Buying</div>
      <form>
        <div className='inputsB'>
          <label>Location:</label> <br />
          <input className='locationB' type='text' placeholder='Enter your prefered location' /><br />
          <label>Price Range:(Rs)</label> <br />
          <input className='upper-rangeB' type='number' placeholder='Upper range' />
          <input className='lower-rangeB' type='number' placeholder='Lower range' />
          <br />
          <button className='button-submitB' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
