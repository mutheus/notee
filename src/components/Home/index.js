import { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { NoteItem } from '../NoteItem';
import { IconContainer } from '../../styles';
import * as I from "react-icons/fi";
import { 
  RiBookletLine as Illustration 
} from "react-icons/ri";

import * as S from './styles';

export function Home({ 
  setIsEditing, 
  notes, 
  setNotes,
  toggleTheme 
}) {
  const { title, colors } = useContext(ThemeContext);
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredNotes, setFilteredNotes] = useState();
  const searchInputRef = useRef();
  const searchBtnRef = useRef();
  let history = useHistory();
  
  useEffect(() => {
    function filterNotes() {
      const filter = notes.filter((item) => {
        return (
          item.title.toLowerCase()
          .includes(search.toLowerCase())
        );
      });
      setFilteredNotes(filter);
    }

    filterNotes();
    
    function handleClickOutside(e) {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target) && !searchBtnRef.current.contains(e.target)) {
        setIsSearching(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [search, notes, searchInputRef, searchBtnRef])

  function handleDelete(itemId) {
    const newNotes = notes.filter((item) => item.id !== itemId);
    setNotes(newNotes);
  }
  
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAddClick() {
    history.push('/new');
    setIsEditing(true);
  }
  
  return (
    <S.HomeWrapper>
      <S.Header>
        <S.Logo>Notes</S.Logo>
        
        <S.IconsWrapper>
          {title === 'dark' ? (
            <S.ThemeButton onClick={toggleTheme}>
              <I.FiSun size={24} />
            </S.ThemeButton>
          ) : (
            <S.ThemeButton onClick={toggleTheme}>
              <I.FiMoon size={24} />
            </S.ThemeButton>
          )}
          
          {isSearching && (
            <IconContainer>
              <S.SearchInput 
                onChange={handleSearch}
                value={search}
                autoFocus
                ref={searchInputRef} 
                type="search" 
                placeholder="Search a note" 
              />
            </IconContainer>
          )}
          
          <IconContainer 
            onClick={() => setIsSearching(!isSearching)} 
            ref={searchBtnRef}
            style={{
              borderTopLeftRadius: isSearching ? 0 : '12px', 
              borderBottomLeftRadius: isSearching ? 0 : '12px'
            }}
          >
            <I.FiSearch size={24} />
          </IconContainer>
        </S.IconsWrapper>
      </S.Header>
      
      <S.NoteContainer 
        filteredNotes={isSearching ? filteredNotes.length : ''} 
        isEmpty={!!notes.length} 
        style={{
          placeContent: search && !!notes.length && !filteredNotes.length && 'center'
        }}
        >
        {!!notes.length && !search ? (
          notes.map((item) => (
            <NoteItem 
              key={item.id}
              setIsEditing={setIsEditing}
              onDelete={handleDelete}
              item={item}
            />
          ))
        ) : !notes.length ? (
              <S.EmptyContainer>
                <Illustration
                  color={'#939393'} 
                  size={50} 
                  style={{
                    strokeWidth: 1, 
                    stroke: `${colors.primary}`
                  }}
                />
            
                <span>No notes</span>
            
                <S.EmptyMsg as="h2">The notes you add will appear here.</S.EmptyMsg>
              </S.EmptyContainer>
            ) : search && !!filteredNotes.length ? (
                  filteredNotes.map((item) => (
                    <NoteItem 
                      key={item.id}
                      setIsEditing={setIsEditing}
                      onDelete={handleDelete}
                      item={item}
                    />
                  ))
                ) : (
                  <S.EmptyContainer>
                    <S.EmptyMsg as="h2">No notes found.</S.EmptyMsg>
                  </S.EmptyContainer>
                )}
      </S.NoteContainer>
      
      <S.AddContainer onClick={handleAddClick}>
        <I.FiPlus size={26} />
      </S.AddContainer>
    </S.HomeWrapper>
  );
}