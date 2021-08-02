//style imports
import {Container,ChooseExams,ButtonHolder} from './genericStyledComponents'
import styled from 'styled-components/macro'

//navigation imports
import {Link} from 'react-router-dom'


import axios from 'axios'
import {useEffect,useState} from 'react'


export default function Professors(){
    const [periods,setPeriods] = useState([])
    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/professors`)
        .then((response)=>{
            console.log('aqui')
            console.log(response.data)
            setPeriods(response.data)
           
            
        })
        // .catch((error)=>{
        //     console.log(error)

        // })
    },[])
    
    
    return (
        <Container>
            <ChooseExams >
                <p>Texto para escolher provas</p>
                
                <ButtonHolder>
                   
                    <button onClick={()=>console.log('fui clicado')}>
                        <Link to="/disciplines">
                            disciplinas
                         </Link>
                    </button>
                   
                    
                    <button onClick={()=>console.log('fui clicado')}>
                        <Link to="/professors"> 
                            professores
                        </Link> 
                    </button>
                    
                </ButtonHolder>
            </ChooseExams>
            
            <DisciplinesContainer>
               {periods?.map((item,index,arr)=>{
                   return(
                       <DisciplinesByPeriod key={item.id}>
                          <Link to={`professors/${item.id}`}>
                            <h1>{item.name}</h1>
                           </Link>
                          
                           

                       </DisciplinesByPeriod>
                   )
               })}
            </DisciplinesContainer>
        </Container>
    )



   
}

const DisciplinesContainer = styled.ul`

width: 400px;
//min-height:300px;
height: auto;
height: auto;
border: 1px solid red;

`

const DisciplinesByPeriod = styled.li`
    width: 100%;
   // min-height:100px ;
    height: auto;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: auto;

    p{
        font-size: 15px;
        margin:10px 0;
    }

    h1{
        font-size: 23px;
        margin: 15px 0;
        color: #4CA9A3;
    }
`

