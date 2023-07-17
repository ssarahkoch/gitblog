import { useContext, useEffect } from 'react'
import axios from 'axios'
import { ContextData } from '../context/ContextData'

export function AxiosLib() {
  const { setProfileData, setListWithAllIssues } = useContext(ContextData)

  useEffect(() => {
    const getAllTitles = async () => {
      try {
        const issuesResponse = await axios.get(
          `https://api.github.com/search/issues?q=repo:ssarahkoch/gitblog`,
          {
            headers: {
              Authorization: 'Bearer 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',
            },
          },
        )
        const issues = issuesResponse.data.items
        const allIssues = []
        allIssues.push(...issues)

        setListWithAllIssues(allIssues)
      } catch (error) {
        console.error(error)
      }
    }
    getAllTitles()
  }, [setListWithAllIssues])

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/ssarahkoch',
          {
            headers: {
              Authorization: 'Bearer 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',
            },
          },
        )

        setProfileData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProfileData()
  }, [setProfileData])

  return null
}
