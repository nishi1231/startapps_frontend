import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import logo from './image/StartApps-logo.png';


const theme = createTheme();
 
function App() {

  const [dataDetail, setDate] = useState([]);
  const { id } = useParams();
  const url = new URL('http://localhost:3000/apps/');
  const searchUrl = url + id
  

  useEffect(() => {
      fetch(searchUrl, {method: 'GET'})
      .then((response) => response.json())
      .then((dataDetail) => {setDate(dataDetail);console.log(dataDetail);
       }
      );
  },[]);

  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
  setValue(value);
  };


  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"  style={{ color: "#696969", backgroundColor: "#ffffff" }}>
        <Toolbar>
           <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
             <Grid item xs={3}>
              <img src={logo} alt="logo"  width="200px" height="77px" />
             </Grid>
           </Grid> 
        </Toolbar>
      </AppBar>


      <main>

      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs ">
          <Tab label="ALL" style={{ color: '#191970' }}/>
          <Tab label="旅行" />
          <Tab label="金融" />
          <Tab label="不動産・建設" />
          <Tab label="医療" />
          <Tab label="飲食" />
          <Tab label="エンタメ" />
          <Tab label="メディア" />
          <Tab label="ショッピング" />
          <Tab label="クーポン" />
          <Tab label="ライフスタイル" />
          <Tab label="SNS" />
          <Tab label="人事・労務" />
          <Tab label="経理" />
          <Tab label="開発" />
        </Tabs>

      <Box sx={{bgcolor: 'background.paper', pt: 1, pb: 1,}} >
          <Container maxWidth="sm">
          </Container>
       </Box>
      <Grid container >

       <Grid item xs={1.5}></Grid>

       <Grid item xs={9}>
        <CardMedia component="img" maxHeight="400％" maxWidth="100％" image={dataDetail.thumbnail} alt="image"/>
         <CardContent sx={{ flexGrow: 1 }}>
           <Typography gutterBottom variant="h4" component="h2">{dataDetail.title}</Typography>
           <Typography align="left">{dataDetail.body}</Typography>
          </CardContent>
       </Grid>

       <Grid item xs={1.5}></Grid>

      </Grid>
  
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>StartApps</Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">Something here to give the footer a purpose!</Typography> 
      </Box>
    </ThemeProvider>
  );
}
export default App;

