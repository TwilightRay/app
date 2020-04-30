import {useState, useCallback} from 'react' // импорт хука

export const useHttp = () => { // экспорт хука useHttp для работы с ассинхронными
  // запросами на сервер, позволяющий взаимодействовать с сервером
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    // useCallback, чтобы  реакт не входил в рекурсию
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body) // стрингифай для отправки логина и пароля
        headers['Content-Type'] = 'application/json'
        // если body есть, добавляем этот хедер
      }

      const response = await fetch(url, {method, body, headers})
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data; // если с запросом все хорошо и проверка пройдена, возвращаем с сервера данные

    } catch (e) {
        setLoading(false)
        setError(e.message)
        throw e
    }
  }, []) // useCallback принимает в себя два параметра: ассинхронная функция и
  // набор зависимостей (массив)

  const clearError = useCallback( () => setError(null), []) // очистка ошибок

  return { loading, request, error, clearError }; // возвращаем объект с флагом лоадинг
}
