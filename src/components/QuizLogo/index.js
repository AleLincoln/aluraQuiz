import db from '../../../db.json'
import styled from 'styled-components'

const LogoImg = styled.img`
    width:10em;
    
`


export default function Logo(){
    return(
       <LogoImg src={db.logo}></LogoImg> 
    )
}


