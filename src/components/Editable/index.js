import styled from 'styled-components';

export function Editable({
  text,
  placeholder,
  children,
  isEditing
}) {
  const Title = styled.h1`
    word-break: break-word;
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
  `;
  
  return (
    <>
      {isEditing ? (
        <>
          {children}
        </>
      ) : (
        <Title>{text || placeholder}</Title>
      )}
    </>
  );
};
