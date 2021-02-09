
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

function QuestionWidget({question, totalQuestions, questionIndex}){
  const questionId = `question_${questionIndex}`

  return (
    <Widget>
    <Widget.Header>
          <h3>Pergunta {questionIndex} de {totalQuestions}</h3>

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
            <form >
            {question.alternatives.map((item, index) =>   
            {

             
              return(

              <Widget.Topic as='label' htmlFor={questionId}>
            
              <input id={index} type='radio' name={questionId} />
                  {item} 
              </Widget.Topic>
              )

            })}
            </form>
            

            <Button>
                Confirmar
            </Button>
      </Widget.Content>
    </Widget>
  )
}





function QuizPage(){
  const questionIndex = 1
  const question = db.questions[questionIndex]
  const totalQuestions = db.questions.length

    return (
    
              
              <QuizBackground backgroundImage={db.bg}>
                <Logo/>
      <QuizContainer>
    
       <QuestionWidget 
        question = {question} 
        totalQuestions = {totalQuestions}
        questionIndex={questionIndex}
        /> 
        <LoadingWidget />
  
        <Footer/>
      </QuizContainer>
      <GitHubCorner />
      </QuizBackground>
        
    )
}

export default QuizPage