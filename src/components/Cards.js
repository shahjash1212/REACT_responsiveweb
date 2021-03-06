import React from 'react'
import './Card.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Water!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='sada water'
              label='Adventure'
              path='/services'
            />
            <CardItem src='' text='sada pani' label='Luxury' path='/services' />
          </ul>
          <ul className='cards__items'>
            <CardItem src='' text='jal' label='Mystery' path='/services' />
            <CardItem
              src=''
              text='Filter water'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src=''
              text='bislary'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
