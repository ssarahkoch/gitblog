import { useContext } from 'react'
import { ContentSearch, LabelSearch } from './styles'
import { ContextData } from '../../../../context/ContextData'
import axios from 'axios'

export function Input() {
  const { setIssuesData } = useContext(ContextData)

  function filterByFirstWord(searchValue: string) {
    getSearchTitle(searchValue)
  }

  const getSearchTitle = async (titleName: string) => {
    try {
      const encodedTitle = encodeURIComponent(titleName)
      const issuesResponse = await axios.get(
        `https://api.github.com/search/issues?q=${encodedTitle}+repo:ssarahkoch/gitblog+in:title`,
        {
          headers: {
            Authorization: 'Bearer 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',
          },
        },
      )
      const issues = issuesResponse.data.items
      const allIssues = []
      allIssues.push(...issues)

      if (titleName.length === 0) {
        setIssuesData(null)
      } else {
        setIssuesData(allIssues)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <LabelSearch>Publicações</LabelSearch>
      <ContentSearch
        placeholder="Buscar"
        onChange={(e) => filterByFirstWord(e.target.value)}
      />
    </div>
  )
}
