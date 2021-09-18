import React,{useState} from "react";
import styled from "styled-components";
import Messages from "./Components/Messages";

const DivPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
const DivContainer = styled.div `
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50vw;
  height: 100vh;
  justify-content: flex-end;
  background-color: green;
  `

const DivMessages = styled.div `
  display: flex;
`

const NameDiv = styled.input`
  width: 20%;
`

const MessageDiv = styled.input`
  width: 70%;
`
const ButtonDiv = styled.button`
  width: 30%;
`


function App() {
  const [messages, setMessages] = useState ([])
  const [user, setUser] = useState ("")
  const [message, setMessage] = useState ("")

  function sendMessages (){
    const getMessages = {
    user: user,
    message: message
    }

    const important = [...messages, getMessages]
    setMessages(important)

    setUser ("")
    setMessage ("")

    console.log(message)
    console.log(messages)
    console.log(getMessages)
  }
    return (
      <DivPrincipal>
        <DivContainer>
          <Messages messages={messages}/>
            <DivMessages>
              <NameDiv 
                type="text" 
                placeholder="Usuário" 
                onChange={(e) => {setUser(e.target.value)}} 
                value={user}
              />
              <MessageDiv 
                type="text" 
                placeholder="Mensagem" 
                onChange={(e) => {setMessage(e.target.value)}} 
                value={message}
              />
              <ButtonDiv onClick={sendMessages}>Enviar</ButtonDiv>
            </DivMessages>
        </DivContainer>
      </DivPrincipal>

    )}


export default App;
