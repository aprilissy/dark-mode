import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {

  const [storedValue, setStoredValue] = useState(() => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined 
    const item = window.localStorage.getItem(key) //get from local storage by key
    return item ? JSON.parse(item) : initialValue //parse and return stored json or, if undefined, return initial value
  })

  const setValue = (value) => {
    setStoredValue(value) // set our new value into state
    window.localStorage.setItem(key, JSON.stringify(value)) // set out new value into localStorage
  }

  return [storedValue, setValue]
}