import { useHistory } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { shade } from 'polished';

import styled from 'styled-components';

export function NoteItem({ setIsEditing, onDelete, item }) {
  const NoteItem = styled.div`
    width: 100%;
    max-height: 300px;
    max-width: 300px;
    aspect-ratio: 1/1;
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    
    @media(min-width: 1023px) {
      font-size: 1.1rem;
    }
    
    justify-content: space-between;
    position: relative;
    border-radius: 4px;
    padding: 1em;
    background-color: ${item.color};
  `;
  
  const Subtitle = styled.h2`
    word-break: break-word;
    font-size: 1em;
    color: #252525;
    margin: 0;
  `;
  
  const DateElem = styled.span`
    font-size: .8em;
    color: ${shade(0.50, `${item.color}`)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  
  const DeleteBtn = styled(DateElem)`
    padding: 0;
    background-color: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    
    @media(min-width: 1023px) {
      font-size: 18px;
    }
  `;
  
  let history = useHistory();
  
  function handleDelClick(e) {
    e.stopPropagation();
    onDelete(item.id);
  }
  
  function handleNoteClick() {
    history.push(`/${item.id}`);
    setIsEditing(false)
  }

  return (
    <NoteItem onClick={handleNoteClick}>
      <Subtitle>{item.title.length > 70 ? `${item.title.substring(0, 70)}...` : item.title}</Subtitle>
      <DateElem>
        {item.date} 
        
        <DeleteBtn 
          as="button" 
          onClick={(e) => handleDelClick(e)}
        >
          <FiTrash2 />
        </DeleteBtn>
      </DateElem>
    </NoteItem>
  );
}