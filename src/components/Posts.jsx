// @ts-nocheck
import React, {   useState } from "react";
import {   useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
 import MoreVertIcon from "@mui/icons-material/MoreVert";
 import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, Checkbox, Menu, MenuItem , Stack, Button} from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'blue' : 'pink',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin:'20px',
  height:'500px',
}));

function Posts() {
  const myCards = [
    {
      letter: "K",
      color: "#053ea8",
      userName: "sahar",
      imgLink: " https://images.pexels.com/photos/11916517/pexels-photo-11916517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load "
    },
    {
      letter: "A",
      color: "#a020f0",
      userName: "laila",
      imgLink: "https://images.pexels.com/photos/14641608/pexels-photo-14641608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      letter: "N",
      color: "#008080",
      userName: "nouran",
      imgLink: "https://images.pexels.com/photos/14898925/pexels-photo-14898925.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      letter: "M",
      color: "#053ea8",
      userName: "yassin",
      imgLink: "https://images.pexels.com/photos/10897722/pexels-photo-10897722.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

    {
      letter: "l",
      color: "#053aa8",
      userName: "ayman",
      imgLink: "https://images.pexels.com/photos/15145983/pexels-photo-15145983.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      letter: "7",
      color: "#053aa8",
      userName: "ayman",
      imgLink: "https://images.pexels.com/photos/15145983/pexels-photo-15145983.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
  const theme = useTheme();

//  const ArrowCircleUpIcon= (
//     onclick = function () {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });

//   });


  return (
    <Box component="main" sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ maxWidth: { xs: "97%", sm: 444 }, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={<Avatar sx={{ color: theme.palette.getContrastText(item.color), bgcolor: item.color }} aria-label="recipe">
                {item.letter}
              </Avatar>}
              action={<IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>}
              title={item.userName}
              subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />} />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />

              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>



        );
      })}

      {renderMenu}

      <Stack divider={<divider></divider>} spacing={3} direction="row">
        <Button variant="contained">Just</Button>
        <Button variant="contained"> Live</Button>
        <Button variant="contained"> For ever</Button>

      </Stack>

    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid xs={9}>
          <Item>2</Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6} >
          <Item>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
    {/* <img src="/public/imges/11.jpg" alt="#"/> */}

          <ArrowCircleUpIcon 

  />
          
    </Box>
    
  );
}

export default Posts;
