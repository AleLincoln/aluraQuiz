import Widget from '../Widget'
import Logo from '../QuizLogo'
import {useRouter} from 'next/router'

function ResultWidget({results}){
    
    const name = useRouter().query.name

    return (
        <Widget>
                <Widget.Header>
                    <Logo />
                    <h3>Resultados</h3>
        
                    </Widget.Header>
                
                <Widget.Content>
                   <p>
                       {name}, você acertou {results.filter((item) => item === true).length} perguntas
                   </p>
                   <ul>
                      {results.map((result, index) => {

                          return(

                              <li key={index+result}>
                                  {index+1}: {result === true? 'acerto':'errou'}
                              </li>
                             
                          )
                      })}
                   </ul>

                       
                </Widget.Content>
                        

                        

                </Widget>
    )
}

export default ResultWidget