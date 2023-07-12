import { Box, Paper } from '@mui/material'
import{Outlet} from 'react-router-dom'
import React from 'react'

const Auth: React.FC<any> = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#180fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component={Paper} sx={{ width: '30%', height: '50%', p: 2}}>
       <Outlet />
      </Box>
    </Box>
  )
}

export default Auth
