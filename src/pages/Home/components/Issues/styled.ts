import styled from 'styled-components'

export const IssueContainer = styled.div`
  width: 25.5rem;
  max-width: 100%;
  height: 14.375rem;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  cursor: pointer;

  title {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    width: 17.5rem;

    display: inline-flex;
    align-items: top;
    font-weight: 800;
  }
  span {
    width: 17.5rem;
    font-size: 0.875rem;
    display: inline-flex;
    flex-direction: row;
    justify-content: end;
    color: ${(props) => props.theme['base-text']};
    margin-right: -50px;
    font-weight: initial;
  }
`
export const TextBody = styled.a`
  padding-top: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const MainContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
