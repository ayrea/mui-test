// import Checkbox from '@mui/material/Checkbox'
import { createTheme, CssBaseline, Switch, TextField, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import MyComponent from './MyComponent';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ff7961',
      main: '#0000ff',  // This one
      dark: '#ba000d',
      contrastText: '#000000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff0000',
      main: '#00ff00',  // This one
      dark: '#0000ff',
      contrastText: '#000',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: 'yellow',
        }
      }
    }
  }
});

function App() {
  const [isLight, setIsLight] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <MyComponent />
      <TextField value={'Dark'} />
      <Switch checked={isLight} onChange={() => {
        setIsLight(!isLight);
      }} />
      <TextField value={'Light'} />
    </ThemeProvider>
  )
}

export default App
