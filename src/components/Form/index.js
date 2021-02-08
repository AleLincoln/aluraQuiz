import styled from 'styled-components'


const FormArea = styled.form`

display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  & button{
    margin:20px;
    width:50%
  }

`


function Form({onSubmit}){
    
  
    return (
        <FormArea onSubmit={onSubmit}>
            

        </FormArea>
    )
  
}


export default Form