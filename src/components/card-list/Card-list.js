import React from 'react';
import CardItem from '../card/Card';
import NewCard from '../new-card/New-card';

import './style.scss';

const CardList = ({ cards, onCardAdded, onCardDeleted, onMoveUp, onMoveDown, onChangeCard }) => {
  return (
    <div className='cards'>
      <NewCard onCardAdded={onCardAdded} />
      <div className='card-list'>
        {cards.map((card) => {
          return <CardItem 
                  card={card} 
                  key={card.id} 
                  onCardDeleted={onCardDeleted}
                  onMoveUp={onMoveUp}
                  onMoveDown={onMoveDown}
                  onChangeCard={onChangeCard}/>
        })}
      </div>
    </div>
  );
}

export default CardList
