import { TextField, Paper } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import  SearchIcon  from "@mui/icons-material/Search";

function SearchInput() {
  return (
    <>
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <TextField sx={{ ml: 1, flex: 1 }} label="Search" />
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon /> 
      </IconButton> 
    </Paper>
    </>
  );

}

export default SearchInput;
