import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import MainFeaturedPost from './MainFeaturedPost';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';


const theme = createTheme();
 
function App() {

  const [dataDetail, setDate] = useState([]);
  const history = useHistory();
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



  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"  style={{ color: "#696969", backgroundColor: "#ffffff" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>StartApps</Typography>
        </Toolbar>
      </AppBar>


      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <img src={dataDetail.thumbnail} style={{ maxHeight: "600px", maxWidth: "600px" }} />
            <Grid container spacing={4}>
            </Grid>

                <Box height={100} display="flex" justifyContent="center" alignItems="center" fontSize={36}
                 >{dataDetail.title}
                </Box>

                <Box height={200} display="flex" justifyContent="flex-start" alignItems="flex-start" fontSize={18}>
                  <ListItemText
                   primary={<Typography variant="h6" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#000000' }}>サービス説明</Typography>}

                   secondary={<Typography variant="h7" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#000000' }}>{dataDetail.body}</Typography>}
                  />
                </Box> 

                <Box height={100} display="flex" justifyContent="flex-start" alignItems="flex-start" fontSize={18}>
                  <ListItemText
                   primary={<Typography variant="h6" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#000000' }}>公式ページ</Typography>}

                   secondary={<Typography variant="h7" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#000000' }}>
                     <a target="_blank" href="https://www.google.com/?hl=ja">https://www.google.com/?hl=ja</a></Typography>}
                  />
                </Box>

                <Box height={100} display="flex" justifyContent="flex-start" alignItems="flex-start" fontSize={18}>
                  <ListItemText
                   primary={<Typography variant="h6" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#000000' }}>運営会社</Typography>}

                   secondary={<Typography variant="h7" 
                   display="flex"
                   justifyContent="flex-start"
                   alignItems="flex-start" style={{ color: '#1E90FF' }}>
                     <a target="_blank" href="https://about.google">https://about.google</a></Typography>}
                  />
                </Box> 

        </Container>

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

