import { Component } from "react";

import FaqItemAnswers from "../FaqItemAnswers";

import "./index.css";

const PLUS_IMAGE =
  "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";
const MINUS_IMAGE =
  "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png";

class FaqItem extends Component {
  state = {
    isActive: false,
  };

  toggleAnswers = () => {
    this.setState((prevState) => ({ isActive: !prevState.isActive }));
  };

  renderImage = () => {
    const { isActive } = this.state;
    const imgSrc = isActive ? MINUS_IMAGE : PLUS_IMAGE;
    const imgAltText = isActive ? "MINUS_IMAGE" : "PLUS_IMAGE";

    return (
      <button
        type="button"
        className="plus-minus-button"
        onClick={this.toggleAnswers}
      >
        <img className="plus-minus-image" src={imgSrc} alt={imgAltText} />
      </button>
    );
  };

  renderAnswer = () => {
    const { isActive } = this.state;
    const { faqDetails } = this.props;
    const { answers } = faqDetails;
    if (isActive) {
      return (
        <ul className="answer-container">
          {answers.map((eachAnswer) => (
            <FaqItemAnswers answer={eachAnswer} />
          ))}
        </ul>
      );
    }
  };

  render() {
    const { faqDetails } = this.props;
    const { questionText } = faqDetails;
    const { isActive } = this.state;
    const faqClassName = isActive ? "faq-list-item-color" : "";
    return (
      <li className={`faq-list-item ${faqClassName}`}>
        <div className="question-container">
          <h1 className="question-text">{questionText}</h1>
          {this.renderImage()}
        </div>
        <div className="answer-container-main">{this.renderAnswer()}</div>
      </li>
    );
  }
}

export default FaqItem;
