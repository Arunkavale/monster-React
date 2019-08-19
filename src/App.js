import React,{Component} from 'react';

import { CardLsit } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';

import './App.css';


class App extends Component{
  constructor() {
    super();
    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respose)=>respose.json())
    .then((users)=> this.setState({monsters:users}))
  }
  render(){
    const { monsters , searchField} = this.state;
    const filteredMonster = monsters.filter((monster)=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
      return (
        <div className="App">
        <h1>Monster Reol</h1>
        <SearchBox className="search" placeholder="Search Monsters" 
        handleChange={e=> this.setState({searchField : e.target.value})}></SearchBox>
        <CardLsit monster={filteredMonster}></CardLsit>
        </div>
      );
    }
}


export default App;
