import React from 'react'
import {AppBar, Toolbar,Typography,Box,InputBase, Button,ImageList, ImageListItemBar, ImageListItem} from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles"
import {allData, searchInput} from "../Functions/index"
import axios from "axios"



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginTop:"5px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
   
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    
    
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

 const useStyle = makeStyles({
    root:{
      display: "flex",

      "& .logo":{
        fontWeight:"bold",
      

      "& .MuiTypography-root":{
           fontSize:"30px",

           
     "@media (max-width: 800px)":{
       fontSize:"20px",
       marginTop:"10px"
      }
       },

        
      },

      "& .aldiv":{
        width: '800px',
        height: "auto",
     
       "@media (max-width: 800px)":{
        width: "100%",
      }
      }
    },
    cen:{
      display: "center",
      justifyContent:"center",
      alignItems:"center",
      width: "100%",

      "& .not":{
        width: "100%",
        height:" calc(100vh - 60px)",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",


      "& .MuiTypography-root":{
           fontSize:"30px",
           color:"#1976D2",

           
     "@media (max-width: 800px)":{
       fontSize:"20px",
       marginTop:"10px"
      }
       },
      }
      
    }
  })

function Home() {
  const [allDatashow, setAllDataShow] = React.useState([])
  const [search, setSearch] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [loa, setLoa] = React.useState("");
   
  const getAll = async ()=>{
    const md = await allData()
    if(md){
      setAllDataShow(md.data)
    }
    console.log("opp", md.data)
     console.log( "see data", allDatashow)
  }

  // const handleSerach = async (query) =>{
  //   setSearch(query)
  //   if(!query){
  //     return;
  //   }
  //   setLoading(true)
  //   const { data } = await axios.get(`https://quobators.herokuapp.com/api?search=${search}`);
  //   console.log("this is search",data)
  //   setSearchResult(data)

  // }
  const buttonSearch = async ()=>{
    setLoading(true)
    // setSearch(search)
    const {data} = await axios.get(`https://quobators.herokuapp.com/api?search=${search}`);
    setSearchResult(data)
    // setSearchResult(search(""))
     
    console.log("search data",searchResult)
    
  }

  React.useEffect(()=>{
    getAll()
    // handleSerach()
     
  },[])
 
  const classes = useStyle()
  return (
  
    <div>
    <AppBar>
      <Toolbar>
        <Box  className={classes.root}>
        <div className="logo">
          <Typography  >
            <div style={{cursor:"pointer"}} onClick={getAll}>
                 qudator.
            </div>
               
          </Typography>
        
        </div>
        <div className='aldiv' >
       <Search>
        
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
               
              // onChange={e => handleSerach(e.target.value) }
            />
          </Search>
        </div>
        <div>
        
      <Button variant="contained" sx={{backgroundColor:"red", height:"40px", marginTop:"3px"}}
      onClick={()=>{
        buttonSearch()
      }}
      >Search</Button>
      
        </div>
        </Box>
      </Toolbar>
    </AppBar>
    <div className={classes.cen}>
      <br/>
      <br/>
      <br/>
      {
        loading  ? <div>

          {
            !searchResult ? <div>loading</div> : searchResult?.length > 0 ?
            <div>
               <ImageList
      sx={{ width: "100%", height: "auto"}}
      variant="masonry"
      cols={3}
      rowHeight={225}
    >
      {searchResult.map((item) => (
        <ImageListItem   gap={8} key={item._id}  sx={{height:"600px", cursor:"pointer", transition: "all 300ms ease-in-out", transform: "scale(1.0)"}} >
          <img
            src={`${item.pic}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            style={{objectFit:"contain", height: "100%", width:"100%"}}
            
          />
          <ImageListItemBar
           title={item.imageName}
          />
          
        </ImageListItem>
      ))}
    </ImageList>
            </div> : <div  className="not">
              <Typography>PRODUCT NOT FOUND</Typography></div>
          }

        </div>:
         <div>
           <ImageList
      sx={{ width: "100%", height: "auto"}}
      variant="masonry"
      cols={3}
      rowHeight={225}
    >
      {allDatashow.map((item) => (
        <ImageListItem   gap={8} key={item._id}  sx={{height:"600px", cursor:"pointer", transition: "all 300ms ease-in-out", transform: "scale(1.0)"}} >
          <img
            src={`${item.pic}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            style={{objectFit:"contain", height: "100%", width:"100%"}}
            
          />
          <ImageListItemBar
           title={item.imageName}
          />
          
        </ImageListItem>
      ))}
    </ImageList>
        </div>

      }
   
    </div>
    </div>
  )
}

export default Home
