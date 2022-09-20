import {Component} from 'react'
import './index.css'

export default class Faqs extends Component {
  state = {
    faqsToggleAnswerStatusList: this.generateInitialFaqsToggleAnswerStatusList(),
  }

  generateInitialFaqsToggleAnswerStatusList = () => {
    const {faqsList} = this.props

    return faqsList.map(faqsListItem => ({
      faqId: faqsListItem.id,
      showAnswer: false,
    }))
  }

  render() {
    const {faqsToggleAnswerStatusList} = this.state
    const {faqsList} = this.props

    return (
      <div className="faqs-bg-container">
        <div className="faqs-content-container">
          <h1 className="faqs-header">FAQs</h1>
          <ul className="faqs-list"></ul>
        </div>
      </div>
    )
  }
}
