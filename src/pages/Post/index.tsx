import { Header } from '../../components/Header'
import {
  TitleContainer,
  Container,
  BodyContainer,
  StyledPageNavigation,
  StyledLink,
  StyledUserInfoContainer,
} from './styles'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useContext } from 'react'
import { ContextData } from '../../context/ContextData'

dayjs.extend(relativeTime)

export function Post() {
  const { setIssuesData } = useContext(ContextData)
  const storedFindIssueData = localStorage.getItem('findIssueData')
  const findIssueData = storedFindIssueData
    ? JSON.parse(storedFindIssueData)
    : null
  const createdAt = findIssueData?.updated_at
  const timeAgo =
    dayjs(createdAt).fromNow().charAt(0).toUpperCase() +
    dayjs(createdAt).fromNow().slice(1)

  return (
    <div>
      <Header />
      <Container>
        <TitleContainer key={findIssueData?.id}>
          <StyledPageNavigation>
            <StyledLink to="/" onClick={() => setIssuesData(null)}>
              <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
            </StyledLink>

            <StyledLink
              to={findIssueData?.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </StyledLink>
          </StyledPageNavigation>

          <h2>{findIssueData?.title}</h2>

          <StyledUserInfoContainer>
            <FontAwesomeIcon icon={faGithub} />
            <span>{findIssueData?.user.login}</span>

            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{timeAgo}</span>

            <FontAwesomeIcon icon={faComment} />
            <span>{findIssueData.comments} comentários</span>
          </StyledUserInfoContainer>
        </TitleContainer>

        <BodyContainer>
          <ReactMarkdown>{`${findIssueData?.body}`}</ReactMarkdown>
        </BodyContainer>
      </Container>
    </div>
  )
}
