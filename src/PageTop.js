import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { BrowserRouter as Router, Route, Link, useHistory, useParams } from 'react-router-dom';
import logo from './image/StartApps-logo.png';


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


  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative"  style={{ color: "#696969", backgroundColor: "#ffffff" }}>
        <Toolbar>
           <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
             <MenuIcon />
           </IconButton>
           <img src={logo} alt="logo" width="15%" height="15%" />
        </Toolbar>
      </AppBar>
      
      <main>
        {/* Hero unit */}
      <Box sx={{bgcolor: 'background.paper', pt: 8, pb: 6,}} >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>最新のWebサービス・アプリを紹介</Typography>
          </Container>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={2}>
         <Box component="img" sx={{
           height: 150,
           width: 150,
           maxHeight: { xs: 233, md: 167 },
           maxWidth: { xs: 350, md: 250 },
          }}alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
         />
        </Grid>  

        <Grid item xs={8}>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {productCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card  sx={{ maxWidth: 400 }}>
                 <CardMedia component="img" height="140" image={card.thumbnail} alt="green iguana"/>
                  <CardContent sx={{ flexGrow: 1 }}>
                     <Typography gutterBottom variant="h5" component="h2">{card.title}</Typography>
                     <Typography align="left">{card.body}</Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small">
                       <Link to={`/PageDetail/${card.id}`} onClick={() => history.push(`/PageDetail/${card.id}`)} >詳細を見る</Link>
                     </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
         </Container>
        </Grid>

        <Grid item xs={2}>
        <Box
          component="img"
          sx={{
           height: 150,
           width: 150,
           maxHeight: { xs: 233, md: 167 },
           maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
         />
        </Grid>  
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

