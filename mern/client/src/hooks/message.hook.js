import {useCallback} from 'react'

// функция для вывода сообщения с помощью хука
export const useMessage = () => {
  return useCallback( text => {
    if (window.M && text) {
      window.M.toast({ html: text })
    }
  }, [])
}
