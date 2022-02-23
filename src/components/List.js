import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <Tooltip title="Home">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/empresas">
      <Tooltip title="Empresas">
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Empresas" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reportes</ListSubheader>
    <ListItem button component={Link} to="/pendientes">
      <Tooltip title="Pendientes">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Pendientes" />
    </ListItem>
    <ListItem button component={Link} to="/inventario">
      <Tooltip title="Inventario">
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
      </Tooltip>
      <ListItemText primary="Inventario" />
    </ListItem>
  </div>
);
