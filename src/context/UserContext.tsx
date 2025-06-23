import React, { createContext, useState, ReactNode } from 'react'

interface UserContextType {
  user: string | null
  setUser: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}