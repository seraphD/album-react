import React from 'react';
import './css/index.css';
import Container from './components/Container';
import NavBar from './components/Navbar';
import Result from "./components/Result";

class Album extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='container'>
        <NavBar />
        <div className="main">
            <Result />
            <Container />
        </div>
      </div>
    )
  }
}

export default Album;
