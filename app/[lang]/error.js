'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    console.log('MAIN error.js file, error')
  }, [error])

  return (
    <div>
      <h2>Something went wrong in MAIN LAYOUT component!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>
    </div>
  )
}
