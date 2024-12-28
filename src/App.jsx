import ProductsPage from "./pages/ProductsPage";
import FavoritesPage from "./pages/FavoritesPage";

import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import { Box } from "@mui/material";
import * as theme from "./AppTheme";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Box style={theme.AppWrapper}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Box>
    </Provider>
  );
};

export default App;
