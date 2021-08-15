import { Link } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import { shade } from 'polished';

import styled from 'styled-components';

export function NoteItem({ setIsEditing, onDelete, item }) {
const NoteItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 4px;
  padding: 1em;
  background-color: ${item.color};
`;

const Subtitle = styled.h4`
  color: #252525;
  margin: 0;
`;

const DateElem = styled.small`
  color: ${shade(0.50, '#FFAA91')};
`;

  return (
    <div style={{position: 'relative'}}>
      <Link 
        to={`/${item.id}`} 
        onClick={() => setIsEditing(false)} 
      >
        <NoteItem>
          <Subtitle>{item.title}</Subtitle>
          <DateElem>{item.date}</DateElem>
        </NoteItem>
      </Link>
      <FiTrash2 onClick={() => onDelete(item.id)} size={15} style={{color: `${shade(0.50, '#FFAA91')}`, position: 'absolute', right: '1em', bottom: '1.1em'}} />
    </div>
  );
}