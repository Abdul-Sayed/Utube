import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <>
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        padding: { xs: "2px", sm: "4px", md: "8px" },
      }}
    >
      <Link to="/" style={{ display: "flex", alignSelf: "center" }}>
        <YouTubeIcon sx={{ fontSize: 80, color: "red" }} />
      </Link>

      <SearchBar />
    </Stack>
  </>
);
export default Navbar;
