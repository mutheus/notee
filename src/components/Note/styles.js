import styled from 'styled-components/macro';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 2em 1em;
  
  @media(min-width: 1023px) {
    padding: 1em 5vw;
  }
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  flex-direction: column;
  padding: 0 1em 2em;
  max-width: 30em;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: grid;
  font-size: 2rem;
  resize: none;
  width: 100%;
  outline: none;
  background-color: transparent;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  border: none;
`;

export const DateElem = styled.span`
  font-size: .9em;
  color: #939393;
`;

export const Textarea = styled.textarea`
  display: flex;
  resize: none;
  font-size: 1rem;
  width: 100%;
  outline: none;
  background-color: transparent;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  border: none;
`;

export const RadioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  max-width: 20em;
  margin: 0 auto;
  gap: 1em;
  justify-content: space-between;

  div {
    display: flex;
    cursor: pointer;
    color: #252525;
    place-content: center;
    place-items: center;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 8px;
  }
`;