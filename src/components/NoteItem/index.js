import { Link } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { shade } from 'polished';

import styled from 'styled-components';

export function NoteItem({ setIsEditing, onDelete, item }) {
  const NoteItem = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    @media(min-width: 1023px) {
      font-size: 1.3rem;
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
    
    @media(min-width: 1023px) {
      font-size: 20px;
    }
  `;
  
  function handleDelClick(e) {
    e.preventDefault();
    onDelete(item.id);
  }

  return (
    <Link 
      to={`/${item.id}`} 
      onClick={() => setIsEditing(false)} 
    >
      <NoteItem>
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
    </Link>
  );
}