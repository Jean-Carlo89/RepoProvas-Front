import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: gray;
    flex-direction:column;
    align-items: center;

    

`


const ChooseExams = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid  red;
   // margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    p{
        font-size: 30px;
        width: 100%;
        text-align: center;
    }
`

const ButtonHolder = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

   

    button{
        width: 40%;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        height: 30px;
        font-size: 15px;
    }
`

export{Container,ChooseExams,ButtonHolder}