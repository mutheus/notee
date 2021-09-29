import { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { nanoid } from 'nanoid';
import { Editable } from '../Editable';
import { RadioButton } from '../RadioButton';
import { IconContainer } from '../../styles';
import { FiChevronLeft } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import TextareaAutosize from 'react-textarea-autosize';

import * as S from './styles';

export function Note({ 
  setIsEditing, 
  isEditing, 
  setNotes, 
  notes
}) {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note ? note.title : '');
  const [desc, setDesc] = useState(note ? note.desc : '');
  const [isCreating, setIsCreating] = useState(true);
  const [selectedColor, setSelectedColor] = useState(note ? note.color : '#ffab91');
  const colors = ['#ffab91', '#ffcc80', '#e8ed9b', '#82deeb', '#d094da', '#f48fb1'];
  let history = useHistory();

  function createNote(id, title, desc, date, color, notes) {
    const newNote = {
     id,
     title,
     desc,
     date,
     color
    };
    
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  }
  
  function handleChange() {
    if (!title.length) {
      return;
    }
    
    setIsEditing(!isEditing);
    const date = format(new Date(), 'MMM dd, yyyy / HH:mm');
    const id = nanoid();
    
    if (note) {
      const removeFromNotes = notes.filter((item) => item.id !== note.id);
      
      createNote(id, title, desc, date, selectedColor, removeFromNotes);
      
      history.push(`/${id}`);
    } else if (isCreating) {
      setIsCreating(false);
      createNote(id, title, desc, date, selectedColor, notes);
    } else {
      const removeFromNotes = notes.slice(1);
      createNote(id, title, desc, date, selectedColor, removeFromNotes);
    }
  }
  
  return (
    <>
      <S.Header>
        <Link to="/">
          <IconContainer>
            <FiChevronLeft size={24} />
          </IconContainer>
        </Link>
        
        { isEditing ? (
            <IconContainer onClick={handleChange} style={{aspectRatio: '1.7/1'}}>
              <strong>Save</strong>
            </IconContainer>
        ) : (
            <IconContainer onClick={() => setIsEditing(!isEditing)}>
              <FiEdit size={20} />
            </IconContainer>
        )}
      </S.Header>
      
      <S.NoteWrapper>
        <Editable 
          text={title}
          type="input"
          placeholder={title}
          isEditing={isEditing}
        >
          <S.Input 
            as={TextareaAutosize}
            minRows={1} 
            type="text" 
            name="title"
            placeholder="Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
        </Editable>
        
        <S.DateElem>
          {(note && note.date) || (!isCreating && notes[0].date)}
        </S.DateElem>
        
        <Editable 
          text={desc}
          type="textarea"
          placeholder={desc}
          isEditing={isEditing}
        >
          <S.Textarea 
            as={TextareaAutosize}
            type="text" 
            minRows={5}
            name="description"
            placeholder="Type something..." 
            value={desc} 
            onChange={e => setDesc(e.target.value)} 
          />
        </Editable>
        
        {isEditing && (
          <S.RadioWrapper>
            {
              colors.map((color, index) => (
                <RadioButton 
                  key={index}
                  color={color}
                  selectedColor={selectedColor}
                  onChange={setSelectedColor}
                />
              ))
            }
          </S.RadioWrapper>
        )}
      </S.NoteWrapper>
    </>
  );
}
