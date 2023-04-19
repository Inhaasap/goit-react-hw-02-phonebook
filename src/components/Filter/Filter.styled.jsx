import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const FilterSpan = styled.span`
  font-size: 15px;
`;

export const FilterInput = styled.input`
  padding: 5px 20px;
  font-size: 16px;
  font-style: italic;

  text-shadow: 0 1px 1px #fff;
  border-radius: 5px;

  background-color: #f7fffa;
  color: #063a36;

  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
`;
