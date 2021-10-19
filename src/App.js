import { Component } from 'react';
//import {CardList} from ''
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => (this.setState({ monsters: users })));
  }

  render() {
    //console.log('render monsters:' , this.state.monsters);

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={
            // ! setState(updater, [callback])
            // ! The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered. Generally we recommend using componentDidUpdate() for such logic instead.
            e => this.setState(
              {searchField: e.target.value},
              () => console.log('searchField: ', this.state.searchField)


            )
          }
        />

        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
