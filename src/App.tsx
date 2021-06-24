import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AuthContextProvider } from './context/AuthContext';
import { Login, NewRoom, Room } from './pages';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/themes/defaultTheme';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Switch>
            <Route path={'/'} exact component={Login}></Route>
            <Route path={'/rooms/new'} exact component={NewRoom}></Route>
            <Route path={'/rooms/:id'} component={Room}></Route>
          </Switch>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
