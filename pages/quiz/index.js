
import styled from 'styled-components'
import db from '../../db.json'
import Widget from '../../src/components/Widget'
import Footer from '../../src/components/Footer'
import GitHubCorner from '../../src/components/GitHubCorner'
import QuizBackground from '../../src/components/QuizBackground'
import {useRouter} from 'next/router'

import Button from '../../src/components/Button'
import QuizContainer from '../../src/components/QuizContainer'
import Logo from '../../src/components/QuizLogo'
import LoadingWidget from '../../src/components/LoadingWidget'

function QuestionWidget({question, totalQuestions, questionIndex, onSubmit, addResult}){
  const questionId = `question_${questionIndex}`
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
  const isCorrect = selectedAlternative === question.answer
  const  [isFormSubmited, setIsFormSubmited ] = React.useState(false)
  const hasAlternativeSelected = selectedAlternative !== undefined
  return (
    <Widget>
    <Widget.Header>
          <h3>Pergunta {questionIndex+1} de {totalQuestions}</h3>

        </Widget.Header>
     
      <Widget.Content>
        <img 
            alt='description'
            style={{
                width:'100%',
                height:'150px',
                objectFit:'cover'
            }}
            src={question.image}
        ></img>
        <h2 style={{color:'black'}}>
               {question.title}
            </h2>
            <form  onSubmit={(event) => {
              event.preventDefault()
              setIsFormSubmited(true)
              setTimeout(() =>{
                onSubmit()
                setIsFormSubmited(false)
                setSelectedAlternative(undefined)
              }, 3 * 1000)
              
            }}>
            {question.alternatives.map((alternative, index) =>
            {
              const alternativeId = `alternative__${index}`
              const alternativeStatus = isCorrect? 'SUCCESS' : 'ERROR'
              
              return(

              <Widget.Topic as='label'  key={alternativeId} htmlFor={alternativeId}>
            
              <input  id={alternativeId}
                     
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
            {isFormSubmited && isCorrect && <p>Parabéns!</p>}
            {isFormSubmited && !isCorrect && <p>Errou!</p>}
            </form>
            

      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  quiz:'QUIZ',
  loading:'LOADING',
  result:'RESULT'
}




function QuizPage(){
  const [screenState, setScreenState] = React.useState(screenStates.loading)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion
  const question = db.questions[questionIndex]
  const totalQuestions = db.questions.length
  const [results, setResults] = React.useState([])


 

  React.useEffect(() =>{
    
    setTimeout(() =>{
      setScreenState(screenStates.quiz)
  
    }, 1*2000)

  }, [])

  function handleSubmit(){
    const nextQuestion = questionIndex + 1
    nextQuestion < totalQuestions? setCurrentQuestion(questionIndex+1):setScreenState(screenStates.result)
    
  }

  function handleChange(){
    console.log(setSelectedAlternative())
  }

    return (
    
              
              <QuizBackground backgroundImage={db.bg}>
                
      <QuizContainer>
      <Logo/>
      {screenState === screenStates.quiz && (
          <QuestionWidget 
          question = {question} 
          totalQuestions = {totalQuestions}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
          onChange={handleChange}
          /> 

      )}
       
  
      {screenState === screenStates.loading &&  <LoadingWidget />}
      {screenState === screenStates.result &&  <div>Seu resultado é...</div>}
      </QuizContainer>
      <GitHubCorner />
      </QuizBackground>
        
    )
}

export default QuizPage