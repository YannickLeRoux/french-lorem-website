import * as React from 'react';

import Header from './Header';
import Settings from './Settings';
import Output from './Output';

import '../App.css';

export const LoremContext = React.createContext({
  nbParagraphs: 0,
  increaseCount: () => {},
  decreaseCount: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.increaseCount = () => {
      if (this.state.nbParagraphs > 100) return;
      this.setState({ nbParagraphs: this.state.nbParagraphs + 1})
    }
    this.decreaseCount = () => {
      if (this.state.nbParagraphs < 0) return;
      this.setState({ nbParagraphs: this.state.nbParagraphs - 1})
    }
    this.state = {
      nbParagraphs: 0,
      increaseCount: this.increaseCount,
      decreaseCount: this.decreaseCount
    }


  }

  public render() {
    return (
      <div className="App">
        <LoremContext.Provider value={this.state}>
          <Header />
          <Settings />
          <Output />
        </LoremContext.Provider>
      </div>
    );
  }
}

export default App;
