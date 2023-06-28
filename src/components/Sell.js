import React from 'react';
import './Sell.css';

export default function Sell() {
  return (
    <div className='ContainerS'>
      <div className='HeadingS'>Sell Property</div>
      <div className='TaglineS'>Happy Selling</div>
      <form>
        <div className='InputsS'>
          <label>Location:</label> <br/>
          <input  className='LocationS' type='text' placeholder='Enter your location' /> <br />
          <label>Price:(Rs)</label> <br/>
          <input className='PriceS' type='number' placeholder='Enter Price' /> <br/>
          <label>Upload pictures of your place:</label> <br/>
          <input type='file' placeholder='Enter Price' /> <br/>

          <button className='Button-submitS' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
