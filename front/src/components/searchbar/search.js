import styled from 'styled-components';

export const DivSearch = styled.div`
    padding: 1em;
    display: flex;
    justify-content: center;
`

export const Btn = styled.button`
    background-color:#00ff40;
    color: rgb(12, 20, 69);
    font-weight: 600;
    font-size: 1em;
    border-radius:0.5em;
    border: none;
    position: absolute;
    padding: 0.3em;
    margin-left: 10em;
    margin-top: 0.4em;
    transform-style: preserve-3d;
    transform: translateZ(-20px) rotateX(20deg);
    &:hover {
        background-color: rgba(233, 164, 36, 0.83);
        cursor: pointer;
    }
`

export const Input = styled.input`
    border-radius: 0.5em;
    margin-left: 0.5em;
    padding: 0.5em;
    border:double #00ff40 0.3em;
    background-color:#ececec;
    color:#370617;
    position: relative;
    font-weight: 700;
    font-size: 1em;
    transform-style: preserve-3d;
    transform: translateZ(-10px) rotateX(10deg);
    &:hover{
        background-color: #283618;
      color:#ececec;
    }
`
export const DivImg = styled.div`
    position: absolute;
    margin-right :180em ;
    margin-top: -1.5em;
    `

export const Img = styled.img`
width: 10em;
`