import styled from 'styled-components';
import { shade } from 'polished';

export const HomeWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 2em 1em;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  font-weight: 400;
`;

export const IconsWrapper = styled.div`
  display: flex;
  place-items: center;
  gap: 20px;
`;

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

export const NoteContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: ${({ isEmpty }) => isEmpty ? 'start' : 'center'};
  gap: 1em;
  padding: 0 1em 2em;
`;

export const NoteItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 4px;
  padding: 1em;
  background-color: #FFAA91;
`;

export const Subtitle = styled.h4`
  color: #252525;
  margin: 0;
`;

export const DateElem = styled.small`
  color: ${shade(0.50, '#FFAA91')};
`;