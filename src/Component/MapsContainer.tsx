import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DateSlider from './DateSlider';
import '../dist/ContentContainer.css';
import './DetailContainer';
import Maps from '../modules/Maps';
import DetailContainer from './DetailContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Drawer, ClickAwayListener } from '@material-ui/core';
import styled from 'styled-components';
import ContainerDimensions from "react-container-dimensions"
import Navi from './Navi';
import DetailPopup from './DetailPopup';
import {useMapEvents} from 'react-leaflet';
import { NONAME } from 'dns';

const SFullScreen = styled.div`
  height : 100%;
  width : 100%;
`;

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
    background : 'transparent'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
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
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Maps />
            <ClickAwayListener onClickAway={handleDrawerClose}>
                <Drawer className={classes.drawer} variant="persistent" anchor="right" open={open} classes={{paper: classes.drawerPaper,}}>
                    <DetailPopup/>
                </Drawer>
            </ClickAwayListener>
        </div>
        
        // <SFullScreen>
        //     <Maps />
        //     <DetailPopup/>
        // </SFullScreen>
    )
}
export default MapsContainer;