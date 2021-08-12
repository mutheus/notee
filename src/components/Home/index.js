import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { NoteItem } from '../NoteItem';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import * as S from './styles';

export function Home({ 
  setIsEditing, 
  notes, 
  setNotes,
  toggleTheme 
}) {
  const { title } = useContext(ThemeContext);
  
  function handleDelete(itemId) {
    const newNotes = notes.filter((item) => item.id !== itemId);
    setNotes(newNotes);
  }
  
  return (
    <S.HomeWrapper>
      <S.Header>
        <S.Title>Notes</S.Title>
        
        <S.IconsWrapper>
          {title === 'dark' ? (
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
          notes.map((item) => (
            <NoteItem 
              key={item.id}
              setIsEditing={setIsEditing}
              onDelete={handleDelete}
              item={item}
            />
          ))
        ) : (
          <S.Title style={{fontSize: '1rem', gridColumn: '1/4', color: '#939393', textAlign: 'center'}}>Nothing to see here yet.</S.Title>
        )}
      </S.NoteContainer>
      
      <Link to="/new" onClick={() => setIsEditing(true)}>
        <S.IconContainer style={{borderRadius: '50%', position: 'fixed', bottom: '1em', right: '1em', height: '55px' }}>
          <FiPlus size={26} />
        </S.IconContainer>
      </Link>
    </S.HomeWrapper>
  );
}