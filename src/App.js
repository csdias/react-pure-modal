import React, {Component} from 'react';
import logo from './logo.svg';
import Modal from './Modal';
import './App.css';

class App extends Component {
  state = {
    isModalOpen: false
  };
toggleState = e => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
render() {
    return (
      <div>
        <button onClick={this.toggleState}>Open Modal</button>
        <div>Modal is: {this.state.isModalOpen ? "Open" : "Closed"}</div>
        {this.state.isModalOpen && (
          <Modal
            id="modal"
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
            class="my-class"
           >
            <div className="box-body">I am the content of the modal</div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
