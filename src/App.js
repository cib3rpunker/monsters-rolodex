import { Component } from 'react';
//import {CardList} from ''
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonters = monsters.filter(
      (monster) => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={(e) => this.setState({ searchField: e.target.value })}>
        </SearchBox>

        <CardList monsters={filteredMonters}/>
      </div>
    );
  }
}

export default App;
