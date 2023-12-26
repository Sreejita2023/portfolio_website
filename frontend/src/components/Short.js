import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { NavLink } from 'react-router-dom'

// Icons
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import HouseIcon from '@mui/icons-material/House';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CloudIcon from '@mui/icons-material/Cloud';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         {/* Home */}
         <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
            <ListItemText><NavLink to="/">Home</NavLink></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* Project */}
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
                 <FolderCopyIcon />
              </ListItemIcon>
            <ListItemText><NavLink to="/project">Projects</NavLink></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* Skills */}
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
                 <CloudIcon />
              </ListItemIcon>
            <ListItemText><NavLink to="/skill/web">Skills</NavLink></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* About */}
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
                  <AccountCircleIcon />
              </ListItemIcon>
            <ListItemText><NavLink to="/about">About Me</NavLink></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* Contact */}
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
                <PermPhoneMsgIcon />
              </ListItemIcon>
            <ListItemText><NavLink to="/contact">Contact Me</NavLink></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} ><div className='text-center text-white text-sm font-black  uppercase  rounded-md border border-white border-opacity-30 py-3 px-8'>Menu</div></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
