import * as React from 'react';
export { LoremContext } from './App';

export default class Settings extends React.Component {
  render() {
    return (
      <section>
        <LoremContext.Consumer>
          {(nbParagraphs, increaseCount, decreaseCount) => {
            // display nb paragraph and buttons

          }}
        </LoremContext.Consumer>


      </section>
    )
  }
}