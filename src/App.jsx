import { ColorModeContext, useMode } from './theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './pages/global/Topbar';
import Sidebar from './pages/global/Sidebar';
import Dashboard from './pages/dashboard';
import Team from './pages/team';
import Contacts from './pages/contacts';
import Invoices from './pages/invoices';
import UserCreation from './pages/userCreation';
import FAQ from './pages/faq';
import Bar from './pages/Charts/Bar';
import Pie from './pages/Charts/Pie';
// import Line from './pages/line';

// import Geography from './pages/geography';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/newuser" element={<UserCreation />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
