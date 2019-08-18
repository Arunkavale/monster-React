import React,{Component} from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';

export const CardLsit = (props) =>(
    <div className="card-list">
        {props.monster.map((monster)=>{
          return   <Card key={monster.id} monster={monster}></Card>
        })} 
    </div>
)
