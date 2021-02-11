import Widget from '../Widget'
import Logo from '../QuizLogo'

function ResultWidget({results}){
    return (
        <Widget>
                <Widget.Header>
                    <Logo />
                    <h3>Resultados</h3>
        
                    </Widget.Header>
                
                <Widget.Content>
                   <p>
                       Você acertou {results.filter((item) => item === true).length} perguntas
                   </p>
                   <ul>
                      {results.map((result, index) => {

                          return(

                              <li>
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