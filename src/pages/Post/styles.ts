import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 19rem 18rem 0 18rem;
`

export const TitleContainer = styled.div`
  width: 860px;
  height: 160px;
  max-width: 100%;

  padding: 1rem 1.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  h2 {
    color: ${(props) => props.theme['base-title']};
    padding: 1rem 0 1rem;
    font-size: 23px;
    line-height: 130%;
  }
`

export const StyledPageNavigation = styled.div`
  justify-content: space-between;
  display: flex;
`

export const StyledLink = styled(Link)`
  gap: 8px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 160%;
  text-decoration: none;
  cursor: pointer;
`
export const StyledUserInfoContainer = styled.div`
  color: ${(props) => props.theme['base-span']};
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.9rem;
  span {
    padding-right: 1rem;
  }
`
export const BodyContainer = styled.div`
  padding: 2rem;
  a {
    line-height: 1.6;
  }
`
