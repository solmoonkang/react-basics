// import logo from './logo.svg';
// import './App.css';

// Functional Conference
// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;


// Class Conference
import React, {Component} from "react";
import './App.css';

export default class App extends Component {

  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
    ],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => { 
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id!== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({ todoData: [...this.state.todoData, newTodo] });
  };
  
  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map(data => (
            <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false} />
            {" "}{data.title}
            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
          </div>
          ))}

          {/* 할 일 목록 추가하기 */}
          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            {/* 할 일 목록을 입력하는 부분 */}
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            {/* 입력 버튼 */}
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />
          </form>
        </div>
      </div>
    );
  }
}
