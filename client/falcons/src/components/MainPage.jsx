import React from 'react'
import Carousel from '../components/Carousel'
import { slides } from "../data/carouselData.json"

function MainPage() {
  return (
    <div className='main-page'>
     
      <h2>Falcons Academy Main Page</h2>

      <Carousel data={slides} />
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt voluptatibus repudiandae placeat aspernatur, assumenda, nihil, est natus facilis doloremque quas distinctio dolor omnis. Dolor fugit eum quibusdam neque molestiae molestias?</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum vel mollitia, consectetur possimus accusamus laudantium voluptate sapiente, itaque est error impedit quam, veniam assumenda labore exercitationem odio natus deleniti.</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor reiciendis rem aut natus eos amet, iure, iusto aliquid totam officia similique quas sint, quam eligendi debitis earum fugit ad.</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab, officiis itaque aliquam inventore hic minus similique, modi distinctio quidem, obcaecati corporis. Aliquid modi doloremque maiores consequatur id esse eveniet?</p></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt voluptatibus repudiandae placeat aspernatur, assumenda, nihil, est natus facilis doloremque quas distinctio dolor omnis. Dolor fugit eum quibusdam neque molestiae molestias?</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum vel mollitia, consectetur possimus accusamus laudantium voluptate sapiente, itaque est error impedit quam, veniam assumenda labore exercitationem odio natus deleniti.</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolor reiciendis rem aut natus eos amet, iure, iusto aliquid totam officia similique quas sint, quam eligendi debitis earum fugit ad.</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab, officiis itaque aliquam inventore hic minus similique, modi distinctio quidem, obcaecati corporis. Aliquid modi doloremque maiores consequatur id esse eveniet?</p></div>
      
    </div>
  )
}

export default MainPage
