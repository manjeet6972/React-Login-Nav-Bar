import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';
// import UserList from '../UserList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    color: 'black',
    backgroundColor: 'white',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  textBox1: {
    alignItems: 'left',
  },
  paper1: {
    height: 600,
    width: 650
  }
});


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      anchorEl: null,
      textBox1: '',
      textBox2: '',
    }
  }

  handleClick = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  }
  handleClose = (e) => {
    this.setState({ anchorEl: null });
    this.props.history.push('/login');
  }
  handleTextBox1 = (e) => {
    this.setState({ textBox1: e.target.value })
  }
  handleTextBox2 = (e) => {
    this.setState({ textBox2: e.target.value })
  }
  render() {
    const { classes } = this.props;
    const { open, anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>

            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <TextField id="outlined-basic" label="Name" variant="outlined" /> &nbsp;
            <TextField id="outlined-basic" label="Text Box 1" variant="outlined" value={this.state.textBox1} onChange={this.handleTextBox1} className={classes.textBox1} /> &nbsp;
          </Typography>
            <TextField id="outlined-basic" label="Text Box 2" variant="outlined" value={this.state.textBox2} onChange={this.handleTextBox2} />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={this.handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose.bind(this)}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={3}>

              <Grid item xs={12} md={4} lg={6}>
                <Paper className={classes.paper}  > View 1
                  <div>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue={this.state.textBox1}
                    variant="outlined"
                  />
                  </div>
                  </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={6}>
                <Paper className={classes.paper}  > View 2
                <div>
                  <TextField
                 
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue={this.state.textBox2}
                    variant="outlined"
                  />
                  </div>

                </Paper>
              </Grid>

                {/* <Grid item>
                  <Paper className={classes.paper1} >View 1
           {this.state.textBox1}
    
          </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper1} >View 2
    {this.state.textBox2}</Paper>
                </Grid> */}

              </Grid>
            </Grid>
          </Grid>
        </main>
      </div>
    )
  }
}

export default Dashboard = withStyles(styles, { withTheme: true })(Dashboard)
