import { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext()
export const __auth = () => useContext(AuthContext)

/**
 * @description context to provide auth system for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [subscribedUser] = useState({ ...user })

  const login = ({ email, password }) => {
    if (
      email === subscribedUser.email &&
      password === subscribedUser.password
    ) {
      console.log('logged')
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  const logout = () => {
    setLoggedIn(false)
  }

  const functions = {
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, subscribedUser, ...functions }}>
      {children}
    </AuthContext.Provider>
  )
}

const user = {
  id: 1,
  first_name: 'nadine',
  last_name: 'breaty',
  gender: 'female',
  stay_period: {
    checkin: '',
    checkout: '',
  },
  email: 'nadine@aol.du',
  password: 'nadineaol',
}
