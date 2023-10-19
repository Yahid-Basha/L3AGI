import React, { useEffect } from 'react'

// import { IUser } from 'interfaces'
import { useAccountService, useUserService } from 'services'
import { AuthContext } from 'contexts'
import WelcomeLoader from 'components/Loader/WelcomeLoader'
import { useGetAccountModule } from 'utils/useGetAccountModule'
import { useTranslation } from 'react-i18next'
// import { useLocation } from 'react-router-dom'

// type AuthProviderProps = {
//   children: (user: any) => React.ReactElement
// }

const AuthProvider = ({ children }: any) => {
  const { t, i18n } = useTranslation()
  const { moduleNames } = useGetAccountModule()

  const { data: user, loading } = useUserService({})
  // const {i18n} = useTranslation()
  const { data: account } = useAccountService()

  const isAuthenticated = Boolean(user?.id)

  const contextValue = {
    user,
    loading,
    isAuthenticated,
    account,
  }

  const { welcome, agent, team, chat, home, datasource, discovery, models, schedule, toolkits } =
    moduleNames

  const handleTranslation = (value: string, newName: string) => {
    i18n.addResource('en', 'translation', value, newName)
  }

  useEffect(() => {
    // Update the translation dynamically
    if (welcome) handleTranslation('welcome-message', welcome)
    if (home) handleTranslation('home', home)
    if (chat) handleTranslation('chat', chat)
    if (agent) handleTranslation('agent', agent)
    if (team) handleTranslation('team', team)
    if (datasource) handleTranslation('datasource', datasource)
    if (toolkits) handleTranslation('toolkits', toolkits)
    if (models) handleTranslation('models', models)
    if (discovery) handleTranslation('discovery', discovery)
    if (schedule) handleTranslation('schedule', schedule)
  }, [moduleNames])

  if (loading) {
    return <WelcomeLoader />
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
