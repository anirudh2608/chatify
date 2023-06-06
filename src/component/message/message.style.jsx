import styled from "styled-components";

export const MessageContainer = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
`
export const OwnerMessageContainer = styled(MessageContainer)`
flex-direction: row-reverse;
`

export const MessageInfo = styled.div`
display: flex;
flex-direction: column;
color: gray;
font-weight: 300;

img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fits: cover;
}
`
export const MessageContent = styled.div`
max-width: 80%;
display: flex;
flex-direction: column;
gap: 10px;

p{
    background-color: white;
    padding: 10px 20px; 
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
}
img{
    width: 50%;
}

`
export const OwnerMessageContent = styled(MessageContent)`
align-items: flex-end;

p{
    background-color: #19171A;
    color: white;
    border-radius: 10px 0px 10px 10px;
}

`