import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils'

const BudgetCard = ({
	name,
	amount,
	max,
	gray,
	hideButtons,
	onAddExpenseClick,
}) => {
	const bgClassNames = []
	if (amount > max) bgClassNames.push('bg-danger', 'bg-opacity-10')
	else if (gray) bgClassNames.push('bg-light')

	return (
		<Card className={bgClassNames.join(' ')}>
			<Card.Body>
				<Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
					<div className='me-2'>{name}</div>
					<div className='d-flex align-items-baseline'>
						{currencyFormatter.format(amount)}
						{max && (
							<span className='text-muted fs-6 ms-1'>
								/{currencyFormatter.format(max)}
							</span>
						)}
					</div>
				</Card.Title>
				{max && (
					<ProgressBar
						className='rounded-pill'
						variant={getProgressVariant(amount, max)}
						min={0}
						max={max}
						now={amount}
					/>
				)}
				{!hideButtons && (
					<Stack
						direction='horizontal'
						gap={2}
						className='mt-4 justify-content-end'>
						<Button variant='outline-secondary' onClick={onAddExpenseClick}>
							Add Expense
						</Button>
						<Button variant='outline-secondary'>View Expenses</Button>
					</Stack>
				)}
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
