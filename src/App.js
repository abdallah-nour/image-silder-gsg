import React from 'react';
import Image from './components/image';
import './App.css';
class App extends React.Component {

  state = {
    sources: ['https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
