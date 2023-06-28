import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const navigate = useNavigate();

  const buy = () => {
    navigate('/buy');
  }
  const sell = () => {
    navigate('/sell');
  }
  /*
  const properties = [
    {
      id: 1,
      name: 'Villa',
      href: '/',
      imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      imageAlt: 'Villa',
      location: 'Gurugram, Delhi',
      price: 'Rs 700000'
    }
  ]
  */

  return (
    <div>
      <section className='HomeContainer'>
        <div className='cont2'>
          <div className='ImageContain'>
            <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
              alt='real estate'
              className='ImageHome' />
            <div className='OverImage'>Your Dream Home Awaits</div>
          </div>
        </div>
      </section>


      <section className='Property'>
        <div className='PropertyContainer'>
          <button className='Buy' onClick={buy}>Buy Property</button>
          <button className='Sell' onClick={sell}>Sell Property</button>
        </div>
      </section>


      <section className='ExampleContainer'>
        <div className='ExampleHeading'>
          <div className='Heading'>Our Rental Properties</div>
          <div className='SubHeading'>These include the finest villas, penthouses, luxury apartments and country houses</div>
          <div className='ProductGrid'>
            {props.properties.map((property) => (
              <div key={property.id} className='Grp'>
                <div className='ImageContainer2'>
                  <img
                    src={property.imageSrc}
                    alt={property.imageAlt}
                    className='ImageItself'
                  />
                </div>
                <div className='Details'>
                  <div>
                    <h3>
                      <a href={property.href} className='ProductName'>
                        {property.name}
                      </a>
                    </h3>
                    <p>{property.location}</p>
                  </div>
                  <p>{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
