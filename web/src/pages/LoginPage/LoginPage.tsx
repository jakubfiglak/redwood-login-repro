import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import LoginForm from 'src/components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" />

      <LoginForm />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
    </>
  )
}

export default LoginPage
