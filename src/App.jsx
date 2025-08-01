import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header ,Footer } from './Components'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch() 
  useEffect(() => {

    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap  bg-gray-400'>
      <div>
        <Header />
        <main>
          Todo: {/* Outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
