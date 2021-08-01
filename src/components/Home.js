import styled from 'styled-components/macro'

import {Container,ChooseExams,ButtonHolder} from './genericStyledComponents'
import {Link} from 'react-router-dom'

export default function Home(){
    
    return(
        <Container>
            <ChooseExams >
                <p>Texto para escolher provas</p>
                
                <ButtonHolder>
                   
                    <button onClick={()=>console.log('fui clicado')}>
                        <Link to="/disciplines">
                            disciplinas
                         </Link>
                    </button>
                   
                    
                    {/* <Link> */}
                        <button onClick={()=>console.log('fui clicado')}>professores</button>
                    {/* </Link> */}
                    
                </ButtonHolder>
            </ChooseExams>
        </Container>
    )
}



