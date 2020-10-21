import React from 'react';
import Image from './components/image';
import './App.css';
class App extends React.Component {

  state = {
    sources: ['https://i.pinimg.com/564x/9a/4e/f4/9a4ef46fe3b1f14ac36eea7412abb03b.jpg',
      'https://i.pinimg.com/564x/38/7e/3a/387e3a6cc23dabaf84b5d1fb8e262e7a.jpg',
      'https://i.pinimg.com/564x/ec/e7/a3/ece7a31ac8304159395068bc6dcf0136.jpg',
      'https://i.pinimg.com/236x/2e/65/15/2e6515e8c846ba6f083c541e46b7b00a.jpg',
      'https://i.pinimg.com/564x/6b/54/d1/6b54d14ef79e74a694fe91f59925d64c.jpg'
    ]
  }

  render() {
    const { sources } = this.state;
    return (
      <div className="app">
        <div className="container">
          <div className="title-div">
            <h1 className='title-txt'>
              Image Slider
            </h1>
          </div>
          <div className="slider-wrapper">
            {sources.map((source, index) => <Image src={source} key={index} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
