import React, {useState} from 'react'
import Card from './Card'
import EventCalendar from './EventCalendar';
import image from '/images/myLogo.png';

function Cards() {

    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalendar = () => setShowCalendar(!showCalendar);
const cards = [
    {
        id:1,
        title: "Get Your Falcon ID",
        image: image,
        url: 'proyect',
        text: 'Secure your Falcon ID'
    },
    {
        id:2,
        title: "Falcons Members",
        image:image,
        url: '/form',
        text:'Get to know the team behind Falcons Academy'

    },
    {
        id:3,
        title:'Our Proyect !',
        image: image,
        url: '/form',
        text: ''

    }
]
console.log(cards)
  return (
  <>
  
      <div className="app">
        <div className='container d-flex'>
          <div className="row">
            {cards.map((card, index) => (
              <div className="col-md-4" key={card.id}>
                <Card
                  title={card.title}
                  imageSource={card.image}
                  text={card.text}
                  url={card.url}
                  onButtonClick={index === 2 ? toggleCalendar : null}
                  showButton={index === 2}
                />
              </div>
            ))}
          </div>
        </div>
        <EventCalendar isVisible={showCalendar} onClose={toggleCalendar} />
      </div>
    </>
  );
}

export default Cards;
