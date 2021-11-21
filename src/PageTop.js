import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/core/Pagination';
import { BrowserRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import logo from './image/StartApps-logo.png';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";
import ChatIcon from "@material-ui/icons/Chat";


const theme = createTheme();


 
function App() {

    const [data, setDate] = useState([]);
    const productCards = Array.from(new Set(data));
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:3000/apps', {method: 'GET'})
        .then((response) => response.json())
        .then((data) => {setDate(data);
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
      
       <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6,}} >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>最新のWebサービス・アプリを紹介</Typography>
          </Container>
       </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container  spacing={4}  >
            {productCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card  sx={{ maxWidth: 400 }}>
                <Link style={{color: "black" ,textDecoration: 'none'}} to={`/PageDetail/${card.id}`} onClick={() => history.push(`/PageDetail/${card.id}`)} >
                 <CardMedia component="img" height="200" image={card.thumbnail} alt="green iguana"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                     <Typography gutterBottom variant="h5" component="h2">{card.title}</Typography>
                     <Typography align="left">{card.body}</Typography>
                     <Typography align="left" style={{ color: '#a9a9a9' }}>{card.date}</Typography>
                  </CardContent>
                </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
         </Container>
        
      </main>

      <Box height={50} display="flex" justifyContent="center" alignItems="center" fontSize={10}>
        <Pagination count={10}  size="large" />
      </Box>
                
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>StartApps</Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">Something here to give the footer a purpose!</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;

