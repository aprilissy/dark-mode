import useLocalStorage from './useLocalStorage'

const useDarkMode = (darkMode) => {
 const [darkModeValue, setDarkModeValue] = useLocalStorage('darkKey',darkMode)

 const toggleDarkMode = () => {
  setDarkModeValue(!darkModeValue)
  console.log('dark',darkModeValue);
  
 }

 return [darkModeValue, toggleDarkMode]
}

export default useDarkMode