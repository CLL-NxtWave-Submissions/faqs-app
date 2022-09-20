import './index.css'

const FaqItem = props => {
  const {itemData, answerDisplayToggleHandler, showAnswer} = props
  const {id, questionText, answerText} = itemData

  const onAnswerDisplayToggleButtonClick = () => answerDisplayToggleHandler(id)

  return (
    <li className="faq-item-container">
      <div className="faq-question-container">
        <p className="faq-question-text">{questionText}</p>
        <button
          type="button"
          className="faq-toggle-answer-button"
          onClick={onAnswerDisplayToggleButtonClick}
        >
          <img
            className="faq-toggle-answer-button-img"
            src={
              showAnswer
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
            }
            alt={showAnswer ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {showAnswer && (
        <>
          <hr className="faq-question-answer-separator" />
          <p className="faq-answer-text">{answerText}</p>
        </>
      )}
    </li>
  )
}

export default FaqItem
