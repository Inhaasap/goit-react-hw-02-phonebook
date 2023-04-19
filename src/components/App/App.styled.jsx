import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 400px;
  max-width: 100%;

  padding: 20px;
  margin: 10px auto;

  border-radius: 10px;
  box-shadow: inset 1px 1px 3px #8ba793, inset -1px -1px 5px #fff;
  background-color: rgb(212, 239, 224);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
`;

export const SubTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
`;
