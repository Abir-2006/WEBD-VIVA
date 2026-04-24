import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home       from './pages/Home';
import Recipes    from './pages/Recipes';
import Register   from './pages/Register';
import AddRecipe  from './pages/AddRecipe';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppInner() {
  const { mode } = useTheme();
  return (
    <div className={`theme-${mode}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/recipes"    element={<Recipes />} />
          <Route path="/register"   element={<Register />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
