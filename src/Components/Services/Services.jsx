import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './MOHAMMED AJSAL CV NEW 001.pdf'

function Services() {
  return (
    <div className="services">
        <div className="awesome">
           <span>My Awesome</span>
           <span>services</span>
           <spane>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, aspernatur.
           <br />
           Lorem ipsum dolor sit amet consectetur adipisicing.</spane>
           <a href={Resume} download>  <button className="button s-button">Download CV</button></a>
          
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
       
        <div className="cards">
          <div style={{left : '14rem'}}>
          <Card
           emoji = {HeartEmoji}
           heading = {'Dsigning'}
           details = {"Figma,Canva,Photoshop,adobe, xd"}
          />
          </div>

          <div style={{top : '12rem', left:"-4rem"}}>
          <Card
           emoji = {Glasses}
           heading = {'Developer'}
           details = {"Html,Css,Javascript,Bootstrap ,React etc.."}
          />
          </div>
          <div style={{top : '19rem', left:"12rem"}}>
          <Card
           emoji = {Humble}
           heading = {'UI/UX'}
           details = {"Will create Responsive innovation"}
          />
          </div>
          <div className='blur s-blur2' style={{background : "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services