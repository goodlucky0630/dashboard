import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EastIcon from '@mui/icons-material/East';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { purple, deepOrange, green, blue, grey } from '@mui/material/colors';

import BarChart from '../charts/BarChart.js';
import AreaChart from '../charts/AreaChart.js';

const datas = [
  { date: new Date('2022/5/11'), value: 40 },
  { date: new Date('2022/5/12'), value: 30 },
  { date: new Date('2022/5/13'), value: 41 },
  { date: new Date('2022/5/14'), value: 19 },
  { date: new Date('2022/5/15'), value: 38 },
  { date: new Date('2022/5/16'), value: 21 },
  { date: new Date('2022/5/17'), value: 30 }
]

const dataa = [
  { date: new Date('2022/5/11'), value: 1.5 },
  { date: new Date('2022/5/12'), value: 0.3 },
  { date: new Date('2022/5/13'), value: 1.8 },
  { date: new Date('2022/5/14'), value: 0 },
  { date: new Date('2022/5/15'), value: 1.3 },
  { date: new Date('2022/5/16'), value: 0 }
]

const Main = () => {
  const [value, setValue] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    setData1(datas);
    setData2(dataa);
  }, []);

	return(
		<Stack direction="column" alignItems="stretch" p={2} >
      <Paper elevation={3}>
				<Stack direction="column" alignItems="stretch" p={1.5} >
					<Grid container spacing={4}>
						<Grid item xs={3.5} m={1}>
							<Stack direction="row" spacing={3}>
								<Avatar sx={{ bgcolor: green[500], width: 70, height: 70, borderRadius: 3 }} variant="rounded">
									<AssignmentIcon fontSize='large' />
								</Avatar>
								<Stack direction="column">
									<Typography variant="subtitle1" display="block" gutterBottom>
										lonut Eftimoaie
									</Typography>
									<Typography variant="caption" display="block" gutterBottom>
										30.04.1987
									</Typography>
								</Stack>
								<Stack direction="row" sx={{ height: 33 }} spacing={1}>
									<Button variant="contained" size='small' sx={{ minWidth: 33, p: '3px' }}></Button>
									<Button variant="outlined" size='small' sx={{ minWidth: 0, p: '3px' }}>
										<AddIcon fontSize="medium" />
									</Button>
								</Stack>
							</Stack>
						</Grid>
						<Grid item xs={3.5} m={1}>
							<Typography variant="subtitle1" display="block" gutterBottom>
								Topinfo + Risiko
							</Typography>
							<Stack
								direction={{ xs: 'column', lg: 'row' }}
								spacing={1}
							>
								<Button variant="contained" size='small'>Adipositas</Button>
								<Button variant="contained" size='small'>Sucht</Button>
								<Button variant="contained" size='small'>Marcurmar</Button>
								<Button variant="outlined" size='small' sx={{ minWidth: 0, p: '3px' }}>
									<AddIcon fontSize="medium" />
								</Button>
							</Stack>
						</Grid>
						<Grid item xs={3} m={1}>
							<Typography variant="subtitle1" display="block" gutterBottom>
								More Info
							</Typography>
							<Typography variant="caption" display="block" gutterBottom>
								Labore proident commodo ipsum excepteur quis aliquip et ipsum nisi in do.
							</Typography>
						</Grid>
					</Grid>
				</Stack>
				<Divider variant="middle" />
				<Stack direction="row" p={2} spacing={1}>
          {
            [
              {pre: 33, now: 27, color: '#ef9a9a', bg: 'white', state: 'down'},
              {pre: 10, now: 10, color: '#ffcc80', bg: 'white', state: 'same'},
              {pre: 10, now: 10, color: '#ffcc80', bg: 'white', state: 'same'},
              {pre: 33, now: 27, color: 'lightGreen', bg: 'white', state: 'down'},
              {pre: 4, now: 5, color: 'lightGreen', bg: 'white', state: 'up'},
              {pre: 33, now: 27, color: 'lightGreen', bg: 'white', state: 'down'},
              {pre: 4, now: 5, color: 'lightGreen', bg: 'white', state: 'up'},
              {pre: 33, now: 27, color: 'lightGreen', bg: 'white', state: 'down'},
              {pre: 4, now: 5, color: 'lightGreen', bg: 'white', state: 'up'},
              {pre: 33, now: 27, color: 'lightGreen', bg: 'white', state: 'down'},
              {pre: 4, now: 5, color: 'lightGreen', bg: 'white', state: 'up'},
              {pre: '', now: '', color: '#bdbdbd', bg: '#bdbdbd', state: 33},
              {pre: '', now: '', color: '#bdbdbd', bg: '#bdbdbd', state: 33},
              {pre: '', now: '', color: '#bdbdbd', bg: '#bdbdbd', state: 33},
              {pre: '', now: '', color: '#bdbdbd', bg: '#bdbdbd', state: 33}
            ].map((value, index) => (
                <Stack direction="column" sx={{ p: '6px', width: '48px', border: 2, backgroundColor: value.bg, borderColor: value.color, borderRadius: '10px' }} key={index}>
                  <Typography variant="caption" sx={{ textAlign: 'center' }} display="block" gutterBottom>
                    QLIP
                  </Typography>
                  <Typography variant="caption" sx={{ textAlign: 'center' }} display="block" gutterBottom>
                    <Grid container>
                      <Grid item xs={4}>{ value.pre }</Grid>
                      <Grid item xs={4}>
                      {
                        value.state === 'down' ? <SouthEastIcon fontSize='inherit' /> :
                        value.state === 'up' ? <NorthEastIcon fontSize='inherit' /> :
                        value.state === 'same' ? <EastIcon fontSize='inherit' /> :
                        value.state
                      }
                      </Grid>
                      <Grid item xs={4}>{ value.now }</Grid>
                    </Grid>
                  </Typography>
                </Stack>
            ))
          }
				</Stack>
			</Paper>
      <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button variant="contained" size='large' sx={{ p: 2, bgcolor: deepOrange[300] }} fullWidth ><AddCircleOutlineIcon fontSize='medium' />Therapie hinzufugen</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size='large' sx={{ p: 2, bgcolor: purple[300] }} fullWidth ><AddCircleOutlineIcon fontSize='medium' />Starte Fragebogen</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size='large' sx={{ p: 2, bgcolor: blue[500] }} fullWidth ><AddCircleOutlineIcon fontSize='medium' />Fragebogen Per E-mail</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" size='large' sx={{ p: 2, bgcolor: green[500] }} fullWidth ><AddCircleOutlineIcon fontSize='medium' />Allg.Email</Button>
          </Grid>
        </Grid>
      </Stack>
      <Paper elevation={3}>
        <Box sx={{ p: 1, pb: 0 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item One" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Two" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Three" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Four" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Five" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Six" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Seven" />
          </Tabs>
        </Box>
        <Divider />
        <Box sx={{ p: 1, pb: 0 }}> 
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item One" />
            <Tab sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px', border: 1, borderBottom: 0, borderColor: grey[300] }} label="Item Two" />
          </Tabs>
        </Box>
        <Divider />
        <Stack direction="column" p={2}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Scores
          </Typography>
          <BarChart data={data1} />
          <AreaChart data={data2} />
        </Stack>
      </Paper>
    </Stack>
	)
}

export default Main