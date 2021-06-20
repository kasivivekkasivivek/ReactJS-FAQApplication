import { Component } from "react";
import "./index.css";

class FaqItemAnswers extends Component {
  render() {
    const { answer } = this.props;
    console.log(answer);
    return (
      <li className="answer-item">
        <p className="answer-text">{answer}</p>
      </li>
    );
  }
}

export default FaqItemAnswers;
