require('aframe');
import React from 'react'
import {render} from 'react-dom'
import {Entity, Animation} from 'aframe-react';

class Enemy extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <Entity class='enemy' 
        position={this.props.position} 
        look-at='#player'
        geometry={{primitive:'plane', height:3.6, width:2}}
        material={{src:'#enemy-sprite', transparent:true}}>
        <Animation attribute='opacity' 
          begin='collider-hit' 
          dur='400'
          ease='linear'
          from='1' to='0'/>
        <Animation attribute='scale' 
          begin='collider-hit' 
          dur='400'
          ease='linear'
          to={[0, 0, 0]}/>
      </Entity>
    );
  }
}

module.exports = Enemy;
