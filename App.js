import { Routes, Route } from "react-router-dom";
import HistoryScreen from "./screens/HistoryScreen";
import HomeScreen from "./screens/HomeScreen";
import ServiceScreen from "./screens/ServiceScreen";
import MediaScreen from "./screens/MediaScreen";
import FaqScreen from "./screens/FaqScreen";
import CareerScreen from "./screens/CareerScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="history" element={<HistoryScreen />} />
        <Route path="services" element={<ServiceScreen />} />
        <Route path="media" element={<MediaScreen />} />
        <Route path="faq" element={<FaqScreen />} />
        <Route path="careers" element={<CareerScreen />} />
        <Route path="contact" element={<ContactScreen />} />
      </Routes>
    </>
  );
}

export default App;
