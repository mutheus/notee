import { Link } from 'react-router-dom';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import * as S from './styles';

export function Home({ setIsEditing, notes, toggleTheme, isDarkOn }) {
  function handleNoteItemClick(id) {
    setIsEditing(false);
  }
  
  return (
    <S.HomeWrapper>
      <S.Header>
        <S.Title>Notes</S.Title>
        
        <S.IconsWrapper>
          {isDarkOn ? (
            <FiSun onClick={toggleTheme} size={24} />
          ) : (
            <FiMoon onClick={toggleTheme} size={24} />
          )}
          
          <S.IconContainer>
            <FiSearch size={24} />
          </S.IconContainer>
        </S.IconsWrapper>
      </S.Header>
      
      <S.NoteContainer isEmpty={!!notes.length}>
        {!!notes.length ? (
          notes.map((item, index) => (
            <Link to={`/${index}`} key={index}>
              <S.NoteItem 
                onClick={() => handleNoteItemClick(index)}
              >
                <S.Subtitle>{item.title}</S.Subtitle>
                <S.DateElem>{item.date}</S.DateElem>
              </S.NoteItem>
            </Link>))
        ) : (
          <S.Title style={{fontSize: '1rem', gridColumn: '1/4', color: '#939393', textAlign: 'center'}}>Nothing to see here yet.</S.Title>
        )}
      </S.NoteContainer>
      
      <Link to="/create" onClick={() => setIsEditing(true)}>
        <S.IconContainer style={{borderRadius: '50%', position: 'fixed', bottom: '1em', right: '1em', height: '55px' }}>
          <FiPlus size={26} />
        </S.IconContainer>
      </Link>
    </S.HomeWrapper>
  );
}