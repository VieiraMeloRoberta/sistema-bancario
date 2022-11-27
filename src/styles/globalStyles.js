import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  html,body,#root{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 100%;
  }
  
  body{
    background: teal; //teal #171923
    -webkit-font-smoothing: antialiase;
  }
  body, input, button{
    font: 14px sans-serif;
    color: #000;
  }
  input{
    height: 40px;
    width: 70%;
    border-radius: 8px;
    padding: 0 16;
    background: #000; //fff
   
    border: 1px solid teal; // #6c63ff
    background: #fff;
   
    color: #000;

    &::placeholder{
       //font-weight: bold;
      color: #000;
    }
  }
  button{
    cursor: pointer;
    height: 40px;
    width: 150px;
    border-radius: 8px;
    font-weight: 600;
    color: #000;
    border: 0;
    background: teal;

     &:hover{
    
    background: #dbe9e9;
  }
  }
`;