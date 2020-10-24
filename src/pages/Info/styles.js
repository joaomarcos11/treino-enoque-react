import styled from 'styled-components';

export const Card = styled.div`
  /* padding: 10px; */
  padding: ${props => props.padding ? props.padding : "10px"};
  /* border-left: 10px solid blue; */
  border-left: ${(props) => props.genero === 'male' ? '10px solid blue' : '10px solid pink'};
  background-color: #f5f5f5;
  margin: 10px 0;
`;