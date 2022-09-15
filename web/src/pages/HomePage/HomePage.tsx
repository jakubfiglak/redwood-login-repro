import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import ArticlesCell from 'src/components/ArticlesCell'
import LoginForm from 'src/components/LoginForm/LoginForm'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <LoginForm />
      <ArticlesCell />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
    </>
  )
}

export default HomePage
