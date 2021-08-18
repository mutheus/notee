import styled from 'styled-components';

export function Editable({
  text,
  type,
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
  
  const Paragraph = styled.p`
    font-size: 1em;
    max-width: 30em;
    word-break: break-word;
    margin: 0;
  `;
  
  return (
    <>
      {isEditing ? (
        <>
          {children}
        </>
      ) : (
        <>
        {type === 'input' ? (
          <Title>{text || placeholder}</Title>
        ) : (
          <Paragraph>{text || placeholder}</Paragraph>
        )}
        </>
      )}
    </>
  );
};
