import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetsContext = React.createContext()

export function useBudgets() {
	return useContext(BudgetsContext)
}

/* 
// budget example
{
  id:  ,
  name: ,
  max: ,
}

// expense example
{ 
  id: , 
  budgetId: ,
  amount: ,
  description: ,
}
*/

export const BudgetProvider = ({ children }) => {
	const [budgets, setBudgets] = useLocalStorage('budgets', [])
	const [expenses, setExpenses] = useLocalStorage('expenses', [])

	const getBudgetExpenses = (budgetId) => {
		return expenses.filter((expense) => expense.budgetId === budgetId)
	}

	const addExpense = ({ description, amount, budgetId }) => {
		setExpenses((previousExpenses) => {
			return [
				...previousExpenses,
				{ id: uuidv4(), description, amount, budgetId },
			]
		})
	}

	const addBudget = ({ name, max }) => {
		setBudgets((previousBudgets) => {
			if (previousBudgets.find((budget) => budget.name === name)) {
				return previousBudgets
			}

			return [...previousBudgets, { id: uuidv4(), name, max }]
		})
	}

	const deleteBudget = ({ id }) => {
		// TODO Deal with deleted expenses => move to uncatogrized budgets
		setBudgets((previousBudgets) => {
			return previousBudgets.filter((budget) => budget.id !== id)
		})
	}

	const deleteExpense = ({ id }) => {
		setExpenses((previousExpnses) => {
			return previousExpnses.filter((expense) => expense.id !== id)
		})
	}

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
