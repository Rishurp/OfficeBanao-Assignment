import AddImage from "./Components/AddImage/AddImage";
import "react-image-crop/dist/ReactCrop.css";
import MasonryImageList from "./Components/MasonryImageList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AddImage />} />
          <Route path="/image-list" element={<MasonryImageList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
