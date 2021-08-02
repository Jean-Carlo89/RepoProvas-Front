//style imports
import {Container,ChooseExams,ButtonHolder} from './genericStyledComponents'
import styled from 'styled-components/macro'

//navigation imports
import {Link,useParams,useHistory} from 'react-router-dom'



import axios from 'axios'
import {useEffect,useState} from 'react'

export default function DisciplinesById(){
    const history = useHistory()
    const {id} = useParams()
    const [disciplineData,setDisciplineData] = useState()
    const [load,setLoad] = useState(true)
    let categoryObject={}
    const [categoryArray,setCategoryArray] =useState([]) 

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/disciplines/${id}`)
        .then((response)=>{
            console.log(response.data)
            setDisciplineData(response.data)

          

            response.data?.exams.forEach((item)=>{
                
                if(!categoryObject[`${item.category.name}`]){
                    categoryArray?.push(item.category.name)
                }
                categoryObject[`${item.category.name}`]=true
                
               
            })
            console.log(categoryObject)
            console.log(categoryArray)
           categoryArray.sort()
           console.log(categoryArray)
           setLoad(false)
        })
    },[id])

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

            <DisciplinesContainer>
              <h1 onClick={()=>console.log(categoryArray)}>{disciplineData?.name}</h1>

                {categoryArray?.map((item)=>{
                    return(
                        <>
                         <h2>{item}</h2>
                        
                        {disciplineData?.exams.map((i)=>{
                           
                            if(i.category.name===item){
                                return(
                            <Exams key ={i.id}>
                                <h3 onClick={()=>window.open(i.urlLink)}>{i.year} - {i.period.name} &nbsp; &nbsp;  {i.professor.name}  </h3>
                                    
                                        
                            </Exams>
                            )
                            }
                          
                        })}
                    </>
                    )
                })}
               

            </DisciplinesContainer>
        </Container>
    )


    function print(item,i){

        console.log(item)
        console.log(i.category.name)
        if(i.category.name===item){
            return true
               
        
        }
    }
}


const DisciplinesContainer = styled.ul`

width: 400px;
min-height:300px;
height: auto;
border: 1px solid red;
display: flex;
align-items: center;
flex-direction: column;
font-size: 25px;

`

const Exams = styled.li`
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
       // margin:10px 0;
    }

    h3{
        font-size: 23px;
        margin: 15px 0;
        
    }

    h3{
        font-size: 15px;
    }
`
