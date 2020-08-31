import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/searchbox/searchbox.component";
import Button from "./components/button/button.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      searchField: "",
      useIcons: true
    }
  }
  capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  getType = (types, icons) => {
    if (types.length > 0) {
      return types.map(t => this.getTypes(t, icons)).join(" ");
    }
    return types[0].type.name || '';
  };
  getTypes = (type, icons) => {
    if (icons) {
      console.log(type.type.name);
      switch (type.type.name.toLowerCase()) {
        case 'flying':
          return '🦅';
        case 'normal':
          return '⚪️';
        case 'bug':
          return '🐛';
        case 'fire':
          return '🔥';
        case 'water':
          return "💦";
        case 'poison':
          return '☠️';
        case 'grass':
          return '🌱';
        default:
          if (type.type.name === undefined) return '';
          return type.type.name;
      }
    } else {
      return this.capitalizeLetter(type.type.name);
    }
  };
  mapPokemon = (url) => {
    fetch(url)
        .then(r => r.json())
        .then(resp => this.setState({ pokemon:
              [...this.state.pokemon,
                {name: this.capitalizeLetter(resp.name),
                  img: resp.sprites['front_default'] || 'Unknown',
                  type: this.getType(resp.types, false),
                  icons: this.getType(resp.types, true),
                  id: resp.id
                }]}));

  };
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(r => r.results.map( a => this.mapPokemon(a.url)));

  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(s => s.name.toLowerCase().includes(this.state.searchField.toLowerCase())).sort((a,b) => a.id < b.id ? -1 : 1);
    return (
        <div className="App">
          <h1 className='intro'> Pokedex </h1>
          <SearchBox placeholder='Search for Pokemon' changeHandler={e => this.setState({searchField: e.target.value})}/>
          <Button handleClick={() => {this.setState({useIcons: !this.state.useIcons})}} text={this.state.useIcons ? 'Toggle text' : 'Toggle icons'}/>
          <CardList pokemon={filteredPokemon} icons={this.state.useIcons}/>
        </div>
    );
  }
}

export default App;
