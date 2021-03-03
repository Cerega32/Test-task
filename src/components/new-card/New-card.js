import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import { SketchPicker } from 'react-color'



import './style.scss';

class NewCard extends Component {

  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
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
    this.props.onCardAdded({name: values.name, type: values.type, color: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`})
  };

    

  render () {

    
    
    return (
      <Form className='new-card card-item' onFinish={this.onFinish} style={ {margin: '40px 0 30px', padding: '20px', borderRadius: '10px' } } layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: 'Please input type' }]}
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
          <Button type="primary" htmlType="submit" >
            Add
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default NewCard
