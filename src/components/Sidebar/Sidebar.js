import React, { useState }  from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { grey } from '@mui/material/colors';


const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Avatar sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#263238', width: '100%', height: 100 }} variant="square">
        <AssignmentIcon sx={{ color: 'red', fontSize: '60px' }} />
        PainPool
      </Avatar>
      <List sx={{ bgcolor: 'red', color: 'white', pb: 0 }}>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="ORDINATION" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ bgcolor: '#263238' }}>
          <List component="div" disablePadding>
            {['Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts', 'Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon sx={{ color: grey[50] }}  /> : <MailIcon sx={{ color: grey[50] }}  />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
}

export default Sidebar