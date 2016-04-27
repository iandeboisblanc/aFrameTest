require('aframe');
import React from 'react'
import {render} from 'react-dom'
import {Entity} from 'aframe-react';

class Building extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render () {
    return (
      <Entity position={this.props.position} rotation={this.props.rotation} 
        geometry={{primitive:'box', width:10, height:10, depth:10}}
        material={{src:'#factoryTexture'}}>
      </Entity>
    );
  }
}

module.exports = Building;
