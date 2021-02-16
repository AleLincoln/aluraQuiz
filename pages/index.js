
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
import Logo from '../src/components/QuizLogo'



export default function Home() {
  const router = useRouter()
  let [name, setName] = React.useState('')

  function handleSubmit(event){
    event.preventDefault()
    
    
    router.push(`/quiz?name=${name}`)
  }


  function handleChange(event){
    setName(event.target.value)
  }


 return (
   <>
   
    <QuizBackground backgroundImage={db.bg}>
      
    <QuizContainer>
    
      <Widget>
      
      <Widget.Header>
      <Logo />

          </Widget.Header>
        <Widget.Content> 
          <Form onSubmit={handleSubmit}>
            <Input 
              onChange={handleChange}
              name={name}
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
          <Widget.Header>
            <h2>Quizes da galera</h2>
          </Widget.Header>

          <Widget.Content>
                <ul>
                  {db.external.map((item, index) => {
                    const content = item.replace('https://', '').replace('.vercel.app/', '')
                    return (<li key={index}><Widget.Topic href={item} target='__blank'>{content}</Widget.Topic></li>)
                  })}
                </ul>
          </Widget.Content>

      </Widget>
      <Footer/>
    </QuizContainer>
      
      
      
      <GitHubCorner projectUrl="https://alura-quiz-pi-ochre.vercel.app/"/>
    </QuizBackground>
   
   </>
 )
}
