import { createContext, useContext, useState } from 'react'
export const TitleContext = createContext()

//usar el contexto dentro de la aplicacion

export const useTitle = () => useContext(TitleContext)

export const TitleProvider = ({ children }) => {
  const [grayBg, setGrayg] = useState(true)
  return (
    <TitleContext.Provider value={{ grayBg, setGrayg }}>
      {children}
    </TitleContext.Provider>
  )
}
