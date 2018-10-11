import React, { Component } from 'react';

class setPriority extends Component {
  render() {
    return(
      <div className='priority'>
        <h3>Priority</h3>
        <select name='prioritySelector'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    )
  }
}

class newToDo extends Component {
  render () {
    return(
      <div className='newToDo'>
        <h3>I want to...</h3>
        <input type='textarea'></input>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className='container'>
        <header>
          <h1>Very Simple To Do App</h1>
          <h4>Track all of the things</h4>
        </header>
        <hr style={{borderColor:'white'}}></hr>
        <div className='row'>
          <div className='column'>
            <userInput />
          </div>
        </div>
      </div>
    )
  }
}




  // render() {
  //   return (
  //     <div className='container'>
  //     <header>
  //       <h1>Very Simple To Do App</h1>
  //       <h4>Track all of the things</h4>
  //     </header>
  //     <hr></hr>
  //       <div className='row'>
  //         <div className='column'>
  //           <form name='userInput'>
  //             <h3>Add New ToDo</h3>
  //             <div className='form-group'>
  //               <label>I want to...</label>
  //               <input type='textarea'></input>
  //             </div>
  //             <div className='form-group'>
  //               <label>How much if a priority is this?</label>
  //               <select name='prioritySelector'>
  //                 <option>1</option>
  //                 <option>2</option>
  //                 <option>3</option>
  //               </select>
  //             </div>
  //             <div className='form-group'>
  //               <button type='submit' name='sumbit'>Add</button>
  //             </div>
  //           </form>
  //         </div>
  //         <div className='column'>

  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

export default App;
