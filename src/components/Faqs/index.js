import {Component} from 'react'
import './index.css'

import FaqItem from '../FaqItem'

export default class Faqs extends Component {
  constructor(props) {
    super(props)

    const {faqsList} = props

    const initialFaqsToggleAnswerStatusList = faqsList.map(faqsListItem => ({
      faqId: faqsListItem.id,
      showAnswer: false,
    }))

    this.state = {
      faqsToggleAnswerStatusList: initialFaqsToggleAnswerStatusList,
    }
  }

  onFAQAnswerDisplayToggle = toggledFaqId => {
    this.setState(previousFaqsToggleAnswerStatusListState => {
      const {
        faqsToggleAnswerStatusList,
      } = previousFaqsToggleAnswerStatusListState
      const updatedFaqsToggleAnswerStatusList = faqsToggleAnswerStatusList.map(
        listItem => {
          if (listItem.faqId === toggledFaqId) {
            return {
              faqId: listItem.faqId,
              showAnswer: !listItem.showAnswer,
            }
          }

          return listItem
        },
      )

      return {
        faqsToggleAnswerStatusList: updatedFaqsToggleAnswerStatusList,
      }
    })
  }

  render() {
    const {faqsToggleAnswerStatusList} = this.state
    const {faqsList} = this.props

    return (
      <div className="faqs-bg-container">
        <div className="faqs-content-container">
          <h1 className="faqs-header">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(faqsListItem => (
              <FaqItem
                key={faqsListItem.id}
                itemData={faqsListItem}
                answerDisplayToggleHandler={this.onFAQAnswerDisplayToggle}
                showAnswer={
                  faqsToggleAnswerStatusList.find(
                    listItem => listItem.faqId === faqsListItem.id,
                  ).showAnswer
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
