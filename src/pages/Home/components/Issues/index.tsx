import { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ContextData } from '../../../../context/ContextData'
import { IssueContainer, MainContainer, TextBody } from './styled'
import { useNavigate } from 'react-router-dom'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const numberReplacements: { [key: string]: string } = {
  um: '1',
  uma: '1',
  dois: '2',
  três: '3',
  quatro: '4',
  cinco: '5',
  seis: '6',
  sete: '7',
  oito: '8',
  nove: '9',
}

function replaceNumbers(string: string) {
  return string.replace(/\b(\w+)\b/g, (match) =>
    Object.prototype.hasOwnProperty.call(numberReplacements, match)
      ? numberReplacements[match]
      : match,
  )
}

export function Issues() {
  const navigate = useNavigate()

  const { listWithAllIssues, issuesData } = useContext(ContextData)
  const [postDates, setPostDates] = useState<string[]>([])

  useEffect(() => {
    if (listWithAllIssues) {
      const dates = listWithAllIssues.map((item) => {
        const fromNow = dayjs(item.updated_at).fromNow()
        const replacedFromNow = replaceNumbers(fromNow)
        return capitalizeFirstLetter(replacedFromNow)
      })
      setPostDates(
        dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime()),
      )
    }
  }, [listWithAllIssues])

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function sendIdConfirmation(id: number) {
    const findIssueId = listWithAllIssues?.find((item) => item.id === id)

    if (findIssueId) {
      localStorage.setItem('findIssueData', JSON.stringify(findIssueId))
      navigate(`/issues/${id}`)
    }
  }

  return (
    <MainContainer>
      {!issuesData
        ? listWithAllIssues
            ?.sort(
              (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime(),
            )
            .map((item, index) => (
              <IssueContainer
                key={item.id}
                onClick={() => sendIdConfirmation(item.id)}
              >
                <title>
                  {item.title}
                  <span>{postDates[index]}</span>
                </title>
                <TextBody>{item.body}</TextBody>
              </IssueContainer>
            ))
        : issuesData
            ?.sort(
              (a, b) =>
                new Date(b.updated_at).getTime() -
                new Date(a.updated_at).getTime(),
            )
            .map((item, index) => (
              <IssueContainer
                key={item.id}
                onClick={() => sendIdConfirmation(item.id)}
              >
                <title>
                  {item.title}
                  <span>{postDates[index]}</span>
                </title>
                <TextBody>{item.body}</TextBody>
              </IssueContainer>
            ))}
    </MainContainer>
  )
}
