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
import { grey } from '@mui/material/colors';


const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ bgcolor: 'red', color: 'white', pb: 0 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="ORDINATION" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ bgcolor: '#202124' }}>
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
  );
}

export default Sidebar