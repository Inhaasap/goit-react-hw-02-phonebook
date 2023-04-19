import styled from '@emotion/styled';

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  
`;

export const LabelSpan = styled.span`
  margin-right: 10px;
  font-weight: 400;
  font-size: 16px;
`;

export const BtnSubmit = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 15px;
  letter-spacing: 0.02em;
  font-weight: 500;
  background-color: #7ca78c;
  box-shadow: rgb(0 0 0 / 24%) 10px 10px 5px 0px;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;
  
  :hover,
  :focus {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
    background-color: #b1dfc1;
  }
`;
