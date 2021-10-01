import styled from 'styled-components';

export const IconContainer = styled.button`
  height: 45px;
  aspect-ratio: 1/1;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  display: flex;
  place-content: center;
  place-items: center;
`;