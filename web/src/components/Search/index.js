import React, { useState, useEffect } from 'react'

import IconSearch from './IconSearch'

import { WrapperInput, MenuSearch } from './styles'

const Search = ({
  placeholder = 'Buscar',
  dataToFilter,
  hasNotFound = () => {},
  onFiltered = () => {}
}) => {
  const [inputValue, setInputValue] = useState('')

  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    const result = dataToFilter.filter(item =>
      item.name
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    )

    const notFound = inputValue.length > 0 && result.length === 0 && true

    hasNotFound(notFound)

    onFiltered(result)
  }, [inputValue])

  return (
    <WrapperInput>
      <MenuSearch>
        <span>
          <IconSearch />
        </span>
        <input
          placeholder={placeholder}
          onChange={onChange}
        />
      </MenuSearch>
    </WrapperInput>
  )
}

export default Search
