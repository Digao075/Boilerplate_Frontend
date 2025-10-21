import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';

function App() {
  return (
    <Routes>
      {/* Rotas que usam o layout principal com Navbar */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* Adicione outras páginas principais aqui, ex: <Route path="about" element={<AboutPage />} /> */}
      </Route>

      {/* Rotas que não usam o layout, como a de login */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;