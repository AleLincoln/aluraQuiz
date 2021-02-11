
import Widget from '../Widget'
import styled from 'styled-components'
import {GiSharpShuriken} from 'react-icons/gi'

const Spinner = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100px;
  height: 100px;
  animation-name: spin;
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:first-child{
     color:black;
     font-size:80px;
  }


@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }


`

export default function LoadingWidget(){
    return (

        <Widget>
                <Widget.Header>
                    <h3>Loading...</h3>
        
                    </Widget.Header>
                
                <Widget.ContentCenter>
                  <Spinner>
                      <GiSharpShuriken/>
                  </Spinner>

                       
                </Widget.ContentCenter>
                        

                        

                </Widget>
    )
}

  