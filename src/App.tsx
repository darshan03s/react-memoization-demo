import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages";
import Layout from "./components/Layout/Layout";
import CustomComparator from "./components/custom-comparator/CustomComparator";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/custom-comparator" element={<CustomComparator />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
