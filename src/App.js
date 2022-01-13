import { Button, Container, Stack } from 'react-bootstrap'

function App() {
	return (
		<Container className='my-5'>
			<Stack direction='horizontal' className='mb-5'>
				<h1 className='me-auto' gap='2'>
					Budgetoi
				</h1>
				<Button variant='secondary' className='me-2'>
					Add Budget
				</Button>
				<Button variant='outline-secondary'>Add Expense</Button>
			</Stack>
		</Container>
	)
}

export default App
