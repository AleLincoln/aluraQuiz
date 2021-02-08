import styled from 'styled-components'
import db from '../db.json'
import Widget from '.././src/components/Widget'
import Footer from '.././src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import {useRouter} from 'next/router'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'
import Form from '../src/components/Form'

export default function Home() {
  const router = useRouter()
  let [name, setName] = React.useState('')


  console.log(name)

  function handleSubmit(event){
    event.preventDefault()
    
    
    router.push(`/quiz?name=${name}`)
    console.log('teste')
  }


  function handleChange(event){
    setName(event.target.value) 

    console.log(name)
  }


 return (
   <>
   
    <QuizBackground backgroundImage={db.bg}>
      
    <QuizContainer>
      <Widget>
      <Widget.Header>
            <h1>Naruto Quiz</h1>

          </Widget.Header>
        <Widget.Content> 
          <Form onSubmit={handleSubmit}>
            <Input 
              onChange={handleChange}
              placeholder='Diz aí seu nome'
              value={name}
              
              
              />
            <Button type='submit' disabled={name.length === 0}>
              Jogar {name}

            </Button>

          </Form>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <p>Qualquer bagulho</p>

        </Widget.Content>
      </Widget>

      <Footer/>
    </QuizContainer>
      
      
      
      <GitHubCorner projectUrl="https://www.alura.com.br"/>
    </QuizBackground>
   
   </>
 )
}
