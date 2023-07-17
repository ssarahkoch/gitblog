import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: relative;
  top: 11rem;
`

export const Label = styled.div`
  display: flex;

  width: 100%;
  height: 200px;
  border-radius: 10px;
  padding: 1.7rem 2rem;
  background: ${(props) => props.theme['base-profile']};
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 1rem;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }
  :first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;

  font-size: 0.7rem;
  font-weight: 800;
  color: ${(props) => props.theme.blue};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const StyledFontAwesomeIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  padding-top: 0.7rem;
  color: ${(props) => props.theme['base-label']};
  span {
    padding-right: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
