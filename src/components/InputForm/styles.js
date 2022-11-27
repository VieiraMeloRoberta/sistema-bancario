import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px auto;
  padding: 10px;
  background: #fff;
  width: 90%;
  border-radius: 5px;
  border: 2px solid teal; //#533693
  form{
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 1em;
    width: 100%;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  color: #000; //#fff
  gap: 0.5em;
`;