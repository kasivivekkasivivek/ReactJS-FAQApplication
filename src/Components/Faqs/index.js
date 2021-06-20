import { Component } from "react";
import FaqItem from "../FaqItem";
import "./index.css";

const faqsList = [
  {
    id: 0,
    questionText: "Fix a problem",
    answers: [
      "Troubleshoot problems playing videos",
      "Troubleshoot account issues",
      "Fix upload problems",
      "Fix YouTube Premium membership issues",
      "Get help with the YouTube Partner Programme",
    ],
  },
  {
    id: 1,
    questionText: "Manage your account and settings",
    answers: [
      "Sign up and manage your account",
      "Manage account settings",
      "Manage privacy settings",
      "Manage accessibility settings",
      "Troubleshoot account issues",
    ],
  },
  {
    id: 2,
    questionText: "Watch videos",
    answers: [
      "Sign up and manage your account",
      "Manage account settings",
      "Manage privacy settings",
      "Manage accessibility settings",
      "Troubleshoot account issues",
    ],
  },
  {
    id: 3,
    questionText: "Supervised experience on YouTube",
    answers: [
      "Sign up and manage your account",
      "Manage account settings",
      "Manage privacy settings",
      "Manage accessibility settings",
      "Troubleshoot account issues",
    ],
  },
  {
    id: 4,
    questionText: "Join and manage YouTube Premium",
    answers: [
      "Sign up and manage your account",
      "Manage account settings",
      "Manage privacy settings",
      "Manage accessibility settings",
      "Troubleshoot account issues",
    ],
  },
  {
    id: 5,
    questionText: "Create and grow your channel",
    answers: [
      "Sign up and manage your account",
      "Manage account settings",
      "Manage privacy settings",
      "Manage accessibility settings",
      "Troubleshoot account issues",
    ],
  },
];

class Faqs extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="faq-container">
          <div className="header-container">
            <h1 className="heading-text">How can we Help You ?</h1>
          </div>
          <div className="faqlist-class">
            <ul className="faqlist-unordered-list">
              {faqsList.map((eachItem) => (
                <FaqItem key={eachItem.id} faqDetails={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
