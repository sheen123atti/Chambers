import React from 'react';
import NavBar from './components/NavBar';

export default function Data() {
    const data = [
        {
          id: 1,
          name: 'Villa',
          href: '/',
          imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
          imageAlt: 'Villa',
          location: 'Gurugram, Delhi',
          price: 'Rs 700000'
        },
        {
          id: 2,
          name: 'Penthouse',
          href: '/',
          imageSrc: 'https://images.unsplash.com/photo-1609766857326-18a204c2cf31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'Penthouse',
          location: 'Ahemdabad, Gujarat',
          price: 'Rs 1000000'
        },
        {
          id: 3,
          name: 'Apartment',
          href: '/',
          imageSrc: 'https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'Apartment',
          location: 'Jamshedpur, Jharkhand',
          price: 'Rs 500000'
        },
        {
          id: 4,
          name: 'House',
          href: '/',
          imageSrc: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          imageAlt: 'House',
          location: 'Jalandhar, Punjab',
          price: 'Rs 300000'
        }
      ]
      
  return (
    <div>
      <NavBar data = {data}/>
    </div>
  )
}
