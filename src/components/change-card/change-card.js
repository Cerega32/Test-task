import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import { SketchPicker } from 'react-color'

import {
  SaveFilled,
  CloseSquareFilled
} from '@ant-design/icons';



class ChangeCard extends Component {

  

  

  state = {
    
    displayColorPicker: false,
    color: {
      r: this.props.r,
      g: this.props.g,
      b: this.props.b,
      a: this.props.a,
    },
  };

  

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };


  onFinish = (values) => {
    this.props.onChangeCard({id: this.props.card.id, name: values.name, type: values.type, color: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`})
    this.props.cancelChange()
  };

  render () {
    const { card, cancelChange } = this.props;
    
    return (
      <Form className='card-item new-card' onFinish={this.onFinish} style={{ borderRadius: '10px', width: '320px', margin: '0 15px 20px', paddingTop: '20px' }}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name' }]}
          initialValue={card.name}
          style={{ marginBottom: '15px' }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: 'Please input type' }]}
          initialValue={card.type}
          style={{ marginBottom: '15px' }}
        >
          <Input />
        </Form.Item>
        <div className='new-card__swatch' onClick={ this.handleClick }>
          <div className='new-card__color' style={{ background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })` }} />
        </div>
        { this.state.displayColorPicker ? <div className='new-card__popover'>
          <div className='new-card__cover' onClick={ this.handleClose }/>
          <SketchPicker color={this.state.color} onChange={ this.handleChange } />
        </div> : null }
        <Form.Item >
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
            <SaveFilled />
          </Button>
          <Button type="primary" danger onClick={() => cancelChange()}>
            <CloseSquareFilled />
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default ChangeCard
