import { Button, Container, Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'

function App() {
	return (
		<Container className='my-5'>
			<Stack direction='horizontal' gap='2' className='mb-5'>
				<h1 className='me-auto'>Budgetoi</h1>
				<Button variant='secondary'>Add Budget</Button>
				<Button variant='outline-secondary'>Add Expense</Button>
			</Stack>
			{/* custom css grid */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
					gap: '1rem',
					alignItems: 'flex-start',
				}}>
				<BudgetCard name='Entertainment' amount={500} max={1000} gray />
			</div>
		</Container>
	)
}

export default App
