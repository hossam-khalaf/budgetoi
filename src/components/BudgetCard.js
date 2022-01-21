import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({ name, amount, max }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
					<div className='me-2'>{name}</div>
					<div className='d-flex align-items-baseline'>
						{currencyFormatter.format(amount)}/{' '}
						<span className='text-muted fs-6 ms-1'>
							{currencyFormatter.format(max)}
						</span>
					</div>
				</Card.Title>
				<ProgressBar
					className='rounded-pill'
					variant={getProgressVariant(amount, max)}
					min={0}
					max={max}
					now={amount}
				/>
				<Stack
					direction='horizontal'
					gap={2}
					className='mt-4 justify-content-end'>
					<Button variant='outline-secondary'>Add Expense</Button>
					<Button variant='outline-secondary'>View Expenses</Button>
				</Stack>
			</Card.Body>
		</Card>
	)
}

// handling progress bar color upon amount compared to max
const getProgressVariant = (amount, max) => {
	const ratio = amount / max
	if (ratio < 0.5) return 'primary'
	if (ratio < 0.75) return 'warning'
	return 'danger'
}

export default BudgetCard
