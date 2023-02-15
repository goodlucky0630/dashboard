import React from 'react';
import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Main from '../Main'
import Buttons from '../Buttons'

export default function Dashboard() {

  return (
    <>
      <Navbar />
      <Grid container spacing={0} sx={{ height: 881 }}>
        <Grid item xl={2} sx={{ bgcolor: '#263238' }}>
          <Sidebar />
        </Grid>
        <Grid xl={8} sx={{ bgcolor: grey[200] }}>
          <Main />
        </Grid>
        <Grid xl={2}>
          <Buttons />
        </Grid>
      </Grid>
    </>
  );
}