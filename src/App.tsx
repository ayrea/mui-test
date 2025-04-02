// import Checkbox from '@mui/material/Checkbox'
import { Box, Button, Card, CardActions, CardContent, createTheme, CssBaseline, Switch, TextField, ThemeProvider, Typography } from '@mui/material'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0);
  const [isLight, setIsLight] = useState<boolean>(true);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
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
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <main>This is a test</main><p/>
      <Card>
        <CardContent>
          Card Content<p/>
          <Button variant='outlined' onClick={() => { setCount(count + 1) }}>Click me {count}</Button><p />
        </CardContent>
      </Card>
      <TextField value={'Dark'} /><Switch checked={isLight} onChange={() => {
        setIsLight(!isLight);
      }} /><TextField value={'Light'} />
    </ThemeProvider>
  )
}

export default App
