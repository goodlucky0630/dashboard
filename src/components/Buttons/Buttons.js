import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Buttons = () => {
  return (
    <Stack direction="column" alignItems="stretch" p={2} spacing={2} justifyContent="center" sx={{ height: 800 }}>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}

export default Buttons