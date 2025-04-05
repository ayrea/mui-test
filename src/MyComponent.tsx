// import Checkbox from '@mui/material/Checkbox'
import { Button, Card, CardContent, Paper, useTheme } from '@mui/material'
import { useState } from 'react'

interface CounterValue {
    value: number;
}

const initialCountValue: CounterValue = {
    value: 0
};

function MyComponent() {
    const [count, setCount] = useState<CounterValue>(initialCountValue);
    const theme = useTheme();

    const incCounter = () => {
        const newCounterValue: CounterValue = {
            ...count,
            value: count.value + 1
        };
        setCount(newCounterValue);
    }

    return (
        <div>
            <main>This is a test</main><p />
            <Card>
                <CardContent>
                    Card Content<p />
                    <Button variant='outlined' onClick={() => { incCounter() }}>Click me {count.value}</Button><p />
                </CardContent>
            </Card>
            <Paper style={{ color: theme.palette.secondary.main }}>This is paper (secondary.main)</Paper>
            <Paper style={{ color: theme.palette.primary.veryLight }}>This is paper (primary.veryLight)!!!</Paper>
        </div>
    )
}

export default MyComponent
