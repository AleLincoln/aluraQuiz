
import styled from 'styled-components'
import db from '../../db.json'
import Widget from '../../src/components/Widget'
import GitHubCorner from '../../src/components/GitHubCorner'
import QuizBackground from '../../src/components/QuizBackground'

import Logo from '../../src/components/QuizLogo'
import Button from '../../src/components/Button'
import QuizContainer from '../../src/components/QuizContainer'
import LoadingWidget from '../../src/components/LoadingWidget'
import ResultWidget from '../../src/components/ResultWidget'
import AlternativesForm from '../../src/components/AlternativeForms'

const QuizImg = styled.img`
    width:60%;
    object-fit:cover;
    
`



function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit, addResult }) {
  const questionId = `question_${questionIndex}`
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
  const isCorrect = selectedAlternative === question.answer
  const [isFormSubmited, setIsFormSubmited] = React.useState(false)
  const hasAlternativeSelected = selectedAlternative !== undefined
  const [myBrightness, setMyBrightness] = React.useState(0)
  return (
    <Widget>
      <Widget.Header>
        <Logo />
        <h3>Pergunta {questionIndex + 1} de {totalQuestions}</h3>

      </Widget.Header>

      <Widget.Content>
        <QuizImg
          style={{filter:`brightness(${myBrightness})`}}
          alt='description'
          src={question.image}
        ></QuizImg>
        <h2 style={{ color: 'black' }}>
          {db.globalQuestion}
        </h2>
        <AlternativesForm onSubmit={(event) => {
          event.preventDefault()
          setIsFormSubmited(true)
          setMyBrightness(1)
          setTimeout(() => {
            addResult(isCorrect)
            onSubmit()
            setMyBrightness(0)
            setIsFormSubmited(false)
            setSelectedAlternative(undefined)
          }, 3 * 1000)

        }}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
            const isSelected = selectedAlternative === index

            return (

              <Widget.Topic as='label' key={alternativeId} htmlFor={alternativeId} data-selected={isSelected} data-status={isFormSubmited && alternativeStatus}>

                <input id={alternativeId}
                  style={{ display: 'none' }}
                  onChange={() => {
                    setSelectedAlternative(index)
                  }}
                  name={questionId}
                  type='radio'

                />
                {alternative}
              </Widget.Topic>
            )

          })}
          <Button type='submit' disabled={!hasAlternativeSelected}>
            Confirmar
            </Button>

        </AlternativesForm>


      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  quiz: 'QUIZ',
  loading: 'LOADING',
  result: 'RESULT'
}




function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.loading)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]
  const totalQuestions = db.questions.length
  const [results, setResults] = React.useState([])





  React.useEffect(() => {

    setTimeout(() => {
      setScreenState(screenStates.quiz)

    }, 1 * 2000)

  }, [])

  function handleSubmit() {
    const nextQuestion = questionIndex + 1
    nextQuestion < totalQuestions ? setCurrentQuestion(questionIndex + 1) : setScreenState(screenStates.result)

  }

  function addResult(result) {
    setResults(
      [
        ...results,
        result
      ]
    )
  }

  function handleChange() {
    console.log(setSelectedAlternative())
  }

  return (


    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>

        {screenState === screenStates.quiz && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            onChange={handleChange}
            addResult={addResult}
          />

        )}


        {screenState === screenStates.loading && <LoadingWidget />}
        {screenState === screenStates.result && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>

  )
}

export default QuizPage