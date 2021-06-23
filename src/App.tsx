import { BrowserRouter, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './context/AuthContext';
import { Login, NewRoom } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/themes/defaultTheme';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Route path={'/'} exact component={Login}></Route>
          <Route path={'/rooms/new'} component={NewRoom}></Route>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
