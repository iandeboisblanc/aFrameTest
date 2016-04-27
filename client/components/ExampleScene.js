require('aframe');
// require('aframe-layout-component');
// require('aframe-template-component');
import React from 'react';
import {render} from 'react-dom';
import {Scene, Entity, Assets} from 'aframe-react';
import Player from './Player';
import Laser from './Laser';
import Building from './Building';

class ExampleScene extends React.Component {
  render () {
    return (
      <Scene>
        <a-assets>
          <img id='enemy-sprite' src='/doom.png'></img>
          <img id='factoryTexture' src='/factory.png'></img>
          <img id='cloudTexture' src='/cloudBackground.png'></img>
          <Laser/>
        </a-assets>

        <Building position='-10 5 -15' rotation='0 45 0'/>

        <a-plane position='0 0 0' rotation='-90 0 0' height='20' width='20' color='#555'></a-plane>

        <a-image position="0 1.8 -4" class='enemy' height='3.6' width='2' look-at='#player' src='#enemy-sprite' transparent='true'>
          <a-animation attribute='opacity' begin='collider-hit' dur='400' ease='linear'
            from='1' to='0'></a-animation>
          <a-animation attribute='scale' begin='collider-hit' dur='400' ease='linear'
            to='0 0 0'></a-animation>
        </a-image>

        <a-sky src='#cloudTexture'></a-sky>

        <Player/>
      </Scene>
    );
  }
}

module.exports = ExampleScene;

/* CANNOT GET ASSETS TO LOAD

<img id='factoryTexture' src={factorySrc}/>
<img id='cloudTexture' src={cloudSrc}/>

*/

/*
<script src='spawner.js'></script>
    <script src='https://rawgit.com/ngokevin/aframe-layout-component/master/dist/aframe-layout-component.min.js'></script>
    <script src='https://rawgit.com/ngokevin/aframe-template-component/master/dist/aframe-template-component.min.js'></script>
    <a-scene>

      <a-assets>

        <script id='enemies' type='text/x-nunjucks-template'>
          <a-entity layout='type: circle; radius: 5' position='0 0.5 0'>
            <!-- Use A-Frame's declarative animation system to have enemies march around us. -->
            <a-animation attribute='rotation' dur='30000' easing='linear' repeat='indefinite' to='0 360 0'></a-animation>

            {% for x in range(num) %}
            <a-image class='enemy' height='1.8' look-at='#player' src='#enemy-sprite' transparent='true'>
              <a-animation attribute='opacity' begin='collider-hit' dur='400' ease='linear'
                from='1' to='0'></a-animation>
              <a-animation attribute='scale' begin='collider-hit' dur='400' ease='linear'
                to='0 0 0'></a-animation>
            </a-image>
            {% endfor %}
          </a-entity>
        </script>

      </a-assets>
      
      <a-entity template='src: #enemies' data-num='10'></a-entity>

      <!-- <a-light type='spot' color='#FFF' position='10 0 30' look-at='a-box'></a-light> -->
    </a-scene>

    */