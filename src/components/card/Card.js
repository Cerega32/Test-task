import React, { Component } from 'react';

import { Button, Card } from 'antd';
import './style.scss';
import ChangeCard from '../change-card/change-card';
import {
  DeleteOutlined,
  CaretUpFilled,
  CaretDownFilled,
  EditFilled
} from '@ant-design/icons';

class CardItem extends Component {

  state = {
    change: false
  }

  handleChange = () => {
    this.setState(() => {
      return {change: true} 
    })
  }

  onCancelChange = () => {
    this.setState(() => {
      return {change: false} 
    })
  }

  render () {
    const { change } = this.state;
    const {card, onCardDeleted, onMoveUp, onMoveDown, onChangeCard} = this.props
    if (change) {
      const [r,g,b,a] = card.color.match(/[\d\.]+/g)
      return (
          <ChangeCard card={card} 
                      r={r} 
                      g={g} 
                      b={b}
                      a={a}
                      cancelChange={this.onCancelChange}
                      onChangeCard={onChangeCard}
          />
      )
    }
    return (
      <div className='card-item'>
        <Card title={card.name} style={{ borderColor: card.color, borderRadius: '10px', marginBottom: '20px', minHeight: '200px' }}>
          <p>{card.type}</p>
          <div className='card-item__btns'>
            <Button onClick={() => this.handleChange(card)} ><EditFilled /></Button>
            <div className='card-item__btns--center'>
              <Button onClick={() => onMoveUp(card.id)} style={{ marginRight: '10px' }}><CaretUpFilled /></Button>
              <Button onClick={() => onMoveDown(card.id)} ><CaretDownFilled /></Button>
            </div>
            <Button onClick={() => onCardDeleted(card.id)} danger ><DeleteOutlined /></Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default CardItem
