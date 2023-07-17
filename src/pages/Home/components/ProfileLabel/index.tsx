import { useContext } from 'react'
import {
  Label,
  ProfileContainer,
  InfoProfile,
  StyledFontAwesomeIcon,
  StyledLink,
} from './styles'

import { ContextData } from '../../../../context/ContextData'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

library.add(faGithub)

export function ProfileLabel() {
  const { profileData } = useContext(ContextData)

  if (!profileData) {
    return <span>loading...</span>
  }

  return (
    <ProfileContainer>
      <Label>
        <img src={profileData.avatar_url} alt="" />
        <InfoProfile>
          <div>
            <h1>{profileData.name}</h1>

            <StyledLink
              to="https://github.com/ssarahkoch"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </StyledLink>
          </div>

          <a>
            Olá! Sou uma entusiasta da programação em busca de aprimorar minhas
            habilidades em desenvolvimento web, atualmente focada em aprender
            ReactJS.
          </a>
          <StyledFontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileData.login}</span>

            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>

            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profileData.followers} seguidores</span>
          </StyledFontAwesomeIcon>
        </InfoProfile>
      </Label>
    </ProfileContainer>
  )
}
