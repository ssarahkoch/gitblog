import styled from 'styled-components'

export const ContentSearch = styled.input`
  width: 864px;
  max-width: 100%;
  height: 50px;
  padding: 1rem;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  top: 13rem;
  color: ${(props) => props.theme['base-text']};

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
export const LabelSearch = styled.h4`
  color: ${(props) => props.theme['base-title']};
  margin-top: 11rem;
  padding: 3rem 0 0.7rem;
`
