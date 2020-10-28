import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
 const [darkModeValue, setDarkModeValue] = useLocalStorage(darkMode)

 const toggleDarkMode = () => {
  setDarkModeValue(!darkMode)
 }

 return [darkModeValue, toggleDarkMode]
}