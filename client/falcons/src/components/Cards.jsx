import React from 'react'
import Card from './Card'
import image from '/images/myLogo.png';

function Cards() {
const cards = [
    {
        id:1,
        title: "Get Your Falcon ID",
        image: image,
        url: 'proyect',
        text: 'Welcome to Falcons Academy'
    },
    {
        id:2,
        title: "Falcons Members",
        image:image,
        url: '/form',
        text:'This is the team behind Falcons Academy'

    },
    {
        id:3,
        title:'Our Proyect !',
        image: image,
        url: '/form',
        text: 'Register to be part of our teamm'

    }
]
console.log(cards)
  return (
  <>
  
    <div className="app">
    <div className='container d-flex'>
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
            <Card title={card.title} imageSource={card.image} text={card.text}/>
            </div>
                ))
            }
        </div>
    </div>
</div>
    </>
  )
}

export default Cards;
