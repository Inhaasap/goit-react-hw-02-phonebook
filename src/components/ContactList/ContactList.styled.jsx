import styled from '@emotion/styled';

export const ContactUl = styled.ul`
  list-style: circle;
  margin: 0;
  padding: 30px 0px 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactLi = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;

  text-shadow: 0 1px 1px #fff;
  font-style: italic;

  background-color: #f7fffa;
  color: #063a36;

  border-radius: 5px;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;
export const ContactBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;

  color: white;
  background-color: #7ca78c;
  font-size: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: rgb(0 0 0 / 24%) 10px 10px 5px 0px;
  transition: all 0.2s ease-in-out;
  
  :hover,
  :focus {
    background-color: rgb(234, 152, 11);
    color: #063a36;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
  }
`;
