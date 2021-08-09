import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Editable } from '../Editable';
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
  width: 50px;
  aspect-ratio: 1/1;
  background-color: #3B3B3B;
  color: var(--text);
  border-radius: 12px;
  display: flex;
  place-content: center;
  place-items: center;
`;

const NoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  flex-direction: column;
  padding: 2em 1em;
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
  color: var(--text);
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
  color: var(--text);
  border: none;
`;

export function Note({ 
  setIsEditing, 
  isEditing, 
  setNotes, 
  notes
}) {
  const { id } = useParams();
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState(id ? notes[id].title : '');
  
  function handleChange() {
    setIsEditing(!isEditing);
    if (id) {
      const removeFromNotes = notes.splice(id, 1);
      setNotes(removeFromNotes);
      const note = {
        title,
        desc
      };
      const newNotes = [note, ...notes];
      setNotes(newNotes);
    } else if(!!title) {
      alert(title === notes[0].title)
      const removeFromNotes = notes.splice(0, 1);
      setNotes(removeFromNotes);
      const note = {
        title,
        desc
      };
      const newNotes = [note, ...notes];
      setNotes(newNotes);
    } else {
      const note = {
        title,
        desc
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
            <IconContainer>
              <FiCheckSquare size={20} />
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
          placeholder={id ? notes[id].title : ''}
          isEditing={isEditing}
        >
          <Input 
            type="text" 
            name="title"
            placeholder="Type a title..." 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
        </Editable>
        
        { isEditing ? (
          <Textarea onChange={e => setDesc(e.target.value)} rows="5" placeholder="Type a description..."></Textarea>
        ) : (
          <Paragraph>{desc}</Paragraph>
        )}
      </NoteWrapper>
    </>
  );
}