import { useEffect, useState, useCallback, FC, ReactNode } from 'react'
import { Tooltip } from 'react-tippy'

interface Props {
  readonly children: ReactNode
}

export const useErrorHandler = () => {
  const [error, setError] = useState('')

  const Banner = useCallback<FC<Props>>((props) => {
    return (
      <Tooltip
        html={(
          <div>
            <strong>
              {error}
            </strong>
          </div>
        )}
        open={!!error}
        position="top"
        trigger="manual"
        animation="perspective"
      >
        {props.children}
      </Tooltip>
    )
  }, [error])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        setError('')
      }, 3000);
    }
  }, [error])

  return { setError, Banner }
}