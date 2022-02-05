import { Button, Container, Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useState } from 'react'
import { useBudgets } from './contexts/BudgetContext'
import AddExpenseModal from './components/AddExpenseModal'
import UncatogerizedBudgetCard from './components/UncatogerizedBudgetCard'

function App() {
	const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
	const [addAddExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
	const { budgets, getBudgetExpenses } = useBudgets()

	function openAddExpenseModal(budgetId) {
		setShowAddExpenseModal(true)
		setAddExpenseModalBudgetId(budgetId)
	}

	return (
		<>
			<Container className='my-5'>
				<Stack direction='horizontal' gap='2' className='mb-5'>
					<h1 className='me-auto'>Budgetoi</h1>
					<Button
						variant='secondary'
						onClick={() => setShowAddBudgetModal(true)}>
						Add Budget
					</Button>
					<Button variant='outline-secondary' onClick={openAddExpenseModal}>
						Add Expense
					</Button>
				</Stack>
				{/* custom css grid */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))',
						gap: '1rem',
						alignItems: 'flex-start',
					}}>
					{budgets.map((budget) => {
						const amount = getBudgetExpenses(budget.id).reduce(
							(total, expense) => total + expense.amount,
							0
						)

						return (
							<BudgetCard
								key={budget.id}
								name={budget.name}
								amount={amount}
								max={budget.max}
								onAddExpenseClick={() => openAddExpenseModal(budget.id)}
							/>
						)
					})}
					<UncatogerizedBudgetCard />
				</div>
			</Container>
			<AddBudgetModal
				show={showAddBudgetModal}
				handleClose={() => setShowAddBudgetModal(false)}
			/>
			<AddExpenseModal
				defaultBudgetId={addAddExpenseModalBudgetId}
				show={showAddExpenseModal}
				handleClose={() => setShowAddExpenseModal(false)}
			/>
		</>
	)
}

export default App
