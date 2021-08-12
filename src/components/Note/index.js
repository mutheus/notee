import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Editable } from '../Editable';
import { format } from 'date-fns';
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
  const [desc, setDesc] = useState(id ? notes[id].desc : '');
  const [title, setTitle] = useState(id ? notes[id].title : '');
  const [isCreating, setIsCreating] = useState(true);
  const prevInputRef = useRef();
  
  useEffect(() => {
    prevInputRef.current = title;
  });
  
  const prevInput = prevInputRef.current;
  
  function handleChange() {
    setIsEditing(!isEditing);
    const date = format(new Date(), 'MMM dd, yyyy / HH:mm');
    if (id) {
      const removeFromNotes = notes.splice(id, 1);
      setNotes(removeFromNotes);
      const note = {
        title,
        desc,
        date
      };
      const newNotes = [note, ...notes];
      setNotes(newNotes);
    } else if (isCreating) {
      setIsCreating(false);
      const note = {
        title,
        desc,
        date
      };
      const newNotes = [note, ...notes];
      setNotes(newNotes);
    } else {
      const removeFromNotes = notes.splice(0, 1);
      setNotes(removeFromNotes);
      const note = {
        title,
        desc,
        date
      };
      const newNotes = [note, ...notes];
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
          placeholder={id ? notes[id].title : ''}
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
        
        <DateElem>{id && notes[id].date || !id && !isCreating && notes[0].date}</DateElem>
        
        <Editable 
          text={desc}
          type="textarea"
          placeholder={id ? notes[id].desc : ''}
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