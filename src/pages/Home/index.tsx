import { Header } from '../../components/Header'
import { ProfileLabel } from './components/ProfileLabel'
import { Input } from './components/Input'
import { MainContainer } from './styles'
import { Issues } from './components/Issues'

export function Home() {
  return (
    <div>
      <Header />
      <MainContainer>
        <ProfileLabel />
        <Input />
        <Issues />
      </MainContainer>
    </div>
  )
}
