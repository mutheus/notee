import { useHistory } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { shade } from 'polished';

import styled, { css } from 'styled-components/macro';

const NoteItemWrapper = styled.div`
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
    background-color: ${({ color }) => color};
  `;
  
  const Title = styled.h2`
    font-size: 1em;
    color: #252525;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
  
  const DateElem = styled.span`${({ color }) => css`
    font-size: .8em;
    color: ${color};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}`;
  
  const DeleteBtn = styled(DateElem)`
    padding: 0;
    background-color: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    color: inherit;
    
    @media(min-width: 1023px) {
      font-size: 18px;
    }
  `;

export function NoteItem({ setIsEditing, onDelete, item }) {
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
    <NoteItemWrapper color={item.color} onClick={handleNoteClick}>
      <Title>{item.title}</Title>

      <DateElem color={shade(0.50, item.color)}>
        {item.date} 
        
        <DeleteBtn 
          as="button" 
          onClick={(e) => handleDelClick(e)}
        >
          <FiTrash2 />
        </DeleteBtn>
      </DateElem>
    </NoteItemWrapper>
  );
}