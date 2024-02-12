// import {MainContainer,TextEditorContainer,Heading,Img,TextInput,Header,Ul,Li,TextArea} from './styledComponents'

import styled from 'styled-components'

export const MainContainer = styled.div`
background-color: #25262c;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px;
`
export const TextEditorContainer = styled.div`
background-color: #1b1c22;
width: 80%;
height: auto;
display: flex;
justify-content: space-between;
`

export const ImgDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50%;

`
export const Heading = styled.h1`
color: #f8fafc;
margin-bottom: 50px;
`
export const Img = styled.img`
height: 430px;
width: 400px;
`
export const TextInput = styled.div`
background-color: #25262c;
width: 50%;
border: 1px solid #334155;
border-radius: 10px;
margin: 12px;
`
export const Header = styled.div``
export const Ul = styled.ul`
list-style-type: none;

`
export const Li = styled.li``

export const Button = styled.button`
margin: 10px;
background: transparent;
border-style: none;
outline: none;

color: ${props => (props.active ? '#faff00' : '#f1f5f9')}
`
export const Line = styled.hr`
border: 1px solid #334155;
width: 100%;

`
export const TextArea = styled.textarea`
width: 100%;
height: 500px;
padding: 20px;
font-size: 23px;
color: #cbd5e1;
background: transparent;
outline: none;
border-style: none;
font-weight: ${props => (props.activeBold ? 'bold' : 'normal')};
font-style: ${props => (props.activeItalic ? 'italic' : 'normal')};
text-decoration: ${props => (props.activeUnderline ? 'underline' : 'normal')};
`
