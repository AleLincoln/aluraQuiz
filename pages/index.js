import styled from 'styled-components'
import db from '../db.json'
import Widget from '.././src/components/Widget'
import Footer from '.././src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import {useRouter} from 'next/router'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  background-size:cover;
  flex:1;
  background-position:center;

`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  
`

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  & input {
    border: solid 2px ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  & input::placeholder{
    text-align:center;
  }

  & button{
    margin:20px;
    width:50%
  }
`

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
            <input onChange={handleChange} placeholder='Diz aí seu nome' />
            <button type='submit' disabled={name.length === 0}>
              Jogar {name}
            </button>

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
