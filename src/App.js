import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, Footer } from "./components";

function App() {
  return (
    <>
      <Router>
        <CssBaseline>
          <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
            <Footer />
          </Box>
        </CssBaseline>
      </Router>
    </>
  );
}

export default App;
