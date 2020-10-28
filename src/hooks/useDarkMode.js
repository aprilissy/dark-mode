import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
 const [value, setValue] = useLocalStorage(darkMode, false)

 const toggleDarkMode = () => {
  setValue(!darkMode)
 }

 return [value, toggleDarkMode]
}