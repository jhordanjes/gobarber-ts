import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  color: #312e38;
  margin-top: 16px;
  font-weight: 500;
  transition: 0.5s background-color;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
