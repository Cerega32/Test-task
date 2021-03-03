import React, { Component } from 'react';
import CardList from '../card-list/Card-list';
import CardItem from '../card/Card';
 
import './App.css';

class App extends Component {

  state = {
    cards: localStorage.getItem('cards') ? JSON.parse(localStorage.getItem('cards')) : []
  }

  addCard = (card) => {
    this.setState(({ cards }) => { 
      let newId = 0
      if (cards.length) {
        newId = cards.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id;
      }
      const newArr = [
        ...cards,
        { id: newId + 1, ...card }
      ];
      localStorage.setItem("cards", JSON.stringify(newArr))
      return {
        cards: newArr
      }
    } )    
  };

  deleteCard = (id) => {
		this.setState(({ cards }) => {
			const idx = cards.findIndex((el) => el.id === id);

			const newArr = [
				...cards.slice(0, idx),
				...cards.slice(idx + 1)
			];
      localStorage.setItem("cards", JSON.stringify(newArr))
			return {
				cards: newArr
			};
		});
  };
  
  moveUpCard = (id) => {
    this.setState(({ cards }) => {
      const idx = cards.findIndex((el) => el.id === id);
      if (idx === 0) {
        return {
          cards: [...cards.splice(1), cards[0]]
        }
      }
			const newArr = [
        ...cards.slice(0, idx - 1),
        cards[idx],
        cards[idx - 1],
				...cards.slice(idx + 1)
			];
      localStorage.setItem("cards", JSON.stringify(newArr))
			return {
				cards: newArr
			};
		});
  }

  moveDownCard = (id) => {
    this.setState(({ cards }) => {
      const idx = cards.findIndex((el) => el.id === id);
      if (idx + 1 === cards.length) {
        return {
          cards: [cards[idx], ...cards.slice(0, idx)]
        }
      }
			const newArr = [
        ...cards.slice(0, idx),
        cards[idx + 1],
        cards[idx],
				...cards.slice(idx + 2)
			];
      localStorage.setItem("cards", JSON.stringify(newArr))
			return {
				cards: newArr
			};
		});
  }

  changeCard = (card) => {
    this.setState(({ cards }) => {
      const idx = cards.findIndex((el) => el.id === card.id);
      const newArr = [
        ...cards.slice(0, idx),
        card,
        ...cards.slice(idx + 1)
      ];
      localStorage.setItem("cards", JSON.stringify(newArr))
      return {
        cards: newArr
      };
    });
  }


  render() {

    const { cards } = this.state;

    return (
      <div>
        <CardList cards={cards} 
                  onCardAdded={this.addCard}
                  onCardDeleted={this.deleteCard}
                  onMoveUp={this.moveUpCard}
                  onMoveDown={this.moveDownCard}
                  onChangeCard={this.changeCard}/>
      </div>
    );
  }
}

export default App;
