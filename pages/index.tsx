import type { NextPage } from 'next'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'
import useStore from '../store'
import { Auth } from '../components/Auth'
import { DashBoard } from '../components/DashBoard'

const Home: NextPage = () => {
  const session = useStore((state) => state.session)
  const setSession = useStore((state) => state.setSession)
  // ページがマウントされた時の処理
  useEffect(() => {
    setSession(supabase.auth.session())
    // ログインしたりログアウトしたりする際に処理が行われる
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [setSession])
  return <>{session ? <DashBoard /> : <Auth />}</>
}

export default Home
