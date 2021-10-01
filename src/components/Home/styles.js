import styled from 'styled-components';
import { IconContainer } from '../../styles';

export const HomeWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2em 1em;
  
  @media(min-width: 1023px) {
    padding: 1em 5vw;
  }
`;

export const Logo = styled.h1`
  font-size: 2.2rem;
  margin: 0;
  font-weight: 400;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const ThemeButton = styled(IconContainer)`
  background-color: transparent;
`

export const NoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  @media(min-width: 359px) {
    grid-template-columns: ${({ isEmpty }) => isEmpty ? 'repeat(2, 1fr)' : 'auto'};
  }
  
  @media(min-width: 500px) {
    grid-template-columns: ${({ isEmpty }) => isEmpty ? 'repeat(3, 1fr)' : 'auto'};
  }
  
  @media(min-width: 735px) {
    grid-template-columns: ${({ isEmpty }) => isEmpty ? 'repeat(4, 1fr)' : 'auto'};
    padding: 0 1em 2em;
  }
  
  @media(min-width: 1023px) {
    grid-template-columns: ${({ isEmpty }) => isEmpty ? 'repeat(5, 1fr)' : 'auto'};
    padding: 0 5vw 2em;
  }
  
  place-content: ${({ isEmpty }) => isEmpty ? 'start' : 'center'};
  gap: 1em;
  padding: 0 1em 2em;
`;

export const EmptyContainer = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  place-items: center;
  
  span {
    color: #939393;
    margin-bottom: 3em;
  }
`;

export const EmptyMsg = styled(Logo)`
  font-size: 1rem;
  color: #939393;
`;

export const SearchInput = styled.input`
  height: 45px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  max-width: 160px;
  right: 3em;
  padding: 1em;
  padding-right: 0;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  outline: none;
`;

export const AddContainer = styled(IconContainer)`
  border-radius: 50%;
  position: fixed;
  bottom: 1em;
  right: 1em;
  height: 55px;

  @media(min-width: 1023px) {
    right: 5vw;
  }
`;
