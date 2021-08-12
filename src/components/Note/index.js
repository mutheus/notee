import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Editable } from '../Editable';
import { format } from 'date-fns';
import { nanoid } from 'nanoid';
import { FiChevronLeft } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";

import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 2em 1em;
`;

const Title = styled.h1`
  word-break: break-word;
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
`;

const IconsWrapper = styled.div`
  display: flex;
  place-items: center;
  gap: 20px;
`;

const IconContainer = styled.div`
  height: 45px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  display: flex;
  place-content: center;
  place-items: center;
`;

const NoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  flex-direction: column;
  padding: 0 1em 2em;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const Input = styled.input`
  display: flex;
  font-size: 2rem;
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

const Textarea = styled.textarea`
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

const DateElem = styled.small`
    color: #939393;
  `;

export function Note({ 
  setIsEditing, 
  isEditing, 
  setNotes, 
  notes
}) {
  const { id } = useParams();
  const note = notes.filter((item) => item.id === id);
  const [title, setTitle] = useState(note[0] ? note[0].title : '');
  const [desc, setDesc] = useState(note[0] ? note[0].desc : '');
  const [isCreating, setIsCreating] = useState(true);
  let history = useHistory();
  
  function handleChange() {
    setIsEditing(!isEditing);
    const date = format(new Date(), 'MMM dd, yyyy / HH:mm');
    const id = nanoid();
    
    if (note[0]) {
      const removeFromNotes = notes.filter((item) => item.id !== note[0].id);
      const newNote = {
        id,
        title,
        desc,
        date,
      };
      const newNotes = [newNote, ...removeFromNotes];
      setNotes(newNotes);
      history.push(`/${id}`);
    } else if (isCreating) {
      setIsCreating(false);
      const note = {
        id,
        title,
        desc,
        date
      };
      const newNotes = [note, ...notes];
      setNotes(newNotes);
    } else {
      const removeFromNotes = notes.slice(1);
      const note = {
        id,
        title,
        desc,
        date
      };
      const newNotes = [note, ...removeFromNotes];
      setNotes(newNotes);
    }
  }
  
  return (
    <>
      <Header>
        <Link to="/">
          <IconContainer>
            <FiChevronLeft size={24} />
          </IconContainer>
        </Link>
        
        { isEditing ? (
          <Link onClick={handleChange}>
            <IconContainer style={{aspectRatio: '1.7/1'}}>
              <strong>Save</strong>
            </IconContainer>
          </Link>
        ) : (
          <Link onClick={() => setIsEditing(!isEditing)}>
            <IconContainer>
              <FiEdit size={20} />
            </IconContainer>
          </Link>
        )}
      </Header>
      
      <NoteWrapper>
        <Editable 
          text={title}
          type="input"
          placeholder={title}
          isEditing={isEditing}
        >
          <Input 
            type="text" 
            name="title"
            placeholder="Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
        </Editable>
        
        <DateElem>
          {note[0] && note[0].date || !isCreating && notes[0].date}
        </DateElem>
        
        <Editable 
          text={desc}
          type="textarea"
          placeholder={desc}
          isEditing={isEditing}
        >
          <Textarea 
            type="text" 
            name="description"
            placeholder="Type something..." 
            value={desc} 
            onChange={e => setDesc(e.target.value)} 
          />
        </Editable>
      </NoteWrapper>
    </>
  );
}