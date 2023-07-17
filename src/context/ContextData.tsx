import React, { ReactNode, createContext, useState } from 'react'

export interface ProfileData {
  avatar_url: string
  name: string
  login: string
  followers: number
}
interface IssuesData {
  name: string
  id: number
  has_issue: boolean
  issues_url: string
  body: string
  title: string
  updated_at: Date
}
interface DataContextType {
  profileData: ProfileData | null
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData | null>>
  issuesData: IssuesData[] | null
  setIssuesData: React.Dispatch<React.SetStateAction<IssuesData[] | null>>
  listWithAllIssues: IssuesData[] | undefined
  setListWithAllIssues: React.Dispatch<
    React.SetStateAction<IssuesData[] | undefined>
  >
}
export const ContextData = createContext<DataContextType>({
  profileData: null,
  setProfileData: () => {},
  issuesData: null,
  setIssuesData: () => {},
  listWithAllIssues: undefined,
  setListWithAllIssues: () => {},
})
interface ProfileDataContextProviderProps {
  children: ReactNode
}

export function ProfileDataProvider({
  children,
}: ProfileDataContextProviderProps) {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [issuesData, setIssuesData] = useState<IssuesData[] | null>(null)
  const [listWithAllIssues, setListWithAllIssues] = useState<
    IssuesData[] | undefined
  >(undefined)
  return (
    <ContextData.Provider
      value={{
        profileData,
        setProfileData,
        issuesData,
        setIssuesData,
        listWithAllIssues,
        setListWithAllIssues,
      }}
    >
      {children}
    </ContextData.Provider>
  )
}
