import React from 'react';
import './DetailContainer';
import Maps from '../modules/Maps';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, ClickAwayListener, IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DetailPopup from './DetailPopup';
import DefaultTooltip from './ClusterTooltip';
import ClusterTooltip from './ClusterTooltip';


const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background : 'transparent',
    border:'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    marginTop:'60px',
  },
  drawerButton:{
    background:'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,

      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function MapsContainer() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open} classes={{paper: classes.drawerPaper}}>
                <div className={classes.drawerHeader}>
                  <IconButton className={classes.drawerButton} onClick={handleDrawerClose} >
                    <ChevronRightIcon />
                  </IconButton>
                </div>
                <DetailPopup/>
            </Drawer>
            <Maps drawerOpen={handleDrawerOpen}/>
        </div>
    )
}
export default MapsContainer;