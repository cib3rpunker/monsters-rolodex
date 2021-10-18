import { Component } from 'react';
//import {CardList} from ''
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => (this.setState({ monsters: users })));
      //.then(users => (console.log(users)));

    //console.log('componentDidMount monsters:' , this.state.monsters);
  }

  render() {
    //console.log('render monsters:' , this.state.monsters);

    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
