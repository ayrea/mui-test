// import Checkbox from '@mui/material/Checkbox'
import { Button, Card, CardContent, Paper, useTheme } from '@mui/material'
import { useState } from 'react'

function MyComponent() {
    const [count, setCount] = useState<number>(0);
    const theme = useTheme();

    return (
        <div>
            <main>This is a test</main><p />
            <Card>
                <CardContent>
                    Card Content<p />
                    <Button variant='outlined' onClick={() => { setCount(count + 1) }}>Click me {count}</Button><p />
                </CardContent>
            </Card>
            <Paper style={{color: theme.palette.secondary.main}}>This is paper</Paper>
        </div>
    )
}

export default MyComponent
