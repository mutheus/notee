import styled from 'styled-components';

export const IconContainer = styled.div`
  height: 45px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  display: flex;
  place-content: center;
  place-items: center;
`;

export const AddContainer = styled(IconContainer)`
  border-radius: 50%;
  position: fixed;
  bottom: 1em;
  right: 1em;
  height: 55px;
`;