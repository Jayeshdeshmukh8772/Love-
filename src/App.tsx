import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import { LoveWebsite } from './pages/LoveWebsite';
import { Admin } from './pages/Admin';
import { GiftSurprise } from './components/GiftSurprise';

function App() {
  return (
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoveWebsite />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/gift" element={<GiftSurprise />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  );
}

export default App;
