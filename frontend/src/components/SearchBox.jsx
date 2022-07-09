import React, { useState } from 'react'
import { Form, Button, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form onSubmit={submitHandler}>
      <Stack direction='horizontal' gap={3}>
        <Form.Control
          type='text'
          name='q'
          onChange={({ target }) => setKeyword(target.value)}
          placeholder='Search Products...'
        ></Form.Control>
        <Button type='submit' variant='outline-success' className='p-2'>
          Search
        </Button>
      </Stack>
    </Form>
  )
}

export default SearchBox
