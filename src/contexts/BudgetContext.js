import React, { useContext, useState } from 'react'

const BudgetsContext = React.createContext()

export function useBudgets() {
	return useContext(BudgetsContext)
}

export const BudgetProvider = ({ children }) => {
	const [budgets, setBudgets] = useState([])
	const [expenses, setExpenses] = useState([])

	const getBudgetExpenses = () => {}
	const addExpense = () => {}
	const addBudget = () => {}
	const deleteBudget = () => {}
	const deleteExpense = () => {}

	return (
		<BudgetsContext.Provider
			value={{
				budgets,
				expenses,
				getBudgetExpenses,
				addExpense,
				addBudget,
				deleteBudget,
				deleteExpense,
			}}>
			{children}
		</BudgetsContext.Provider>
	)
}
