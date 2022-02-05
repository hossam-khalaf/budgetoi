import { UNCATEGORIZER_BUDGET_ID, useBudgets } from '../contexts/BudgetContext'
import BudgetCard from './BudgetCard'

function UncatogerizedBudgetCard(props) {
	const { getBudgetExpenses } = useBudgets()

	const amount = getBudgetExpenses(UNCATEGORIZER_BUDGET_ID).reduce(
		(total, expense) => total + expense.amount,
		0
	)

	if (amount === 0) return null

	return <BudgetCard name='Uncatogerized' amount={amount} gray {...props} />
}

export default UncatogerizedBudgetCard
