'use client'

import Image from 'next/image'
import { useState } from 'react'
import useSWR from 'swr'
import { filterCountries } from 'utils/filterCountries'
import { sortCountries } from 'utils/sortCountries'
import styles from './countrySelector.module.scss'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const CountrySelector = () => {
  const [selected, setSelected] = useState('')
  const { data: countries, error } = useSWR(
    'https://restcountries.com/v3/all',
    fetcher
  )

  const handleChange = e => {
    if (e.target.value === '') {
      setSelected('')
      return
    }
    const filtered = filterCountries(countries, e.target.value)
    setSelected(filtered)
  }

  if (error) return <div>Error fetching data</div>
  if (!countries) return <div>Loading...</div>

  return (
    <>
      <select
        className={`${styles.countries} ${selected && styles.countries_indent}`}
        onChange={handleChange}>
        {/* default option */}
        <option value={''}>Choose Country</option>

        {countries?.sort(sortCountries).map(country => (
          <option value={country.name.common} key={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>

      {/* show/hiden flag image when option is chosen/not chosen */}
      {selected && (
        <span className={styles.flag}>
          <Image
            src={selected[0]?.flags[1] || '/assets/images/flagPlaceholder.png'}
            fill
            alt={`flag of ${selected[0]?.name.common}`}
            sizes='100%'
          />
        </span>
      )}
    </>
  )
}

export default CountrySelector
