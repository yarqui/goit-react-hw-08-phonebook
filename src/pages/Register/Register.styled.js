import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  padding: 5px;
  width: 150px;
  align-self: center;

  background-color: #a5f7ff;
  border: 1px solid #62c0c9;
  border-radius: 5px;

  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    background: #4fe7f5;
  }
`;
