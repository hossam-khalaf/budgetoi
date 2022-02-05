import { Modal, Form, Button } from 'react-bootstrap'
import { useRef } from 'react'
import { useBudgets } from '../contexts/BudgetContext'

const AddBudgetModal = ({ show, handleClose }) => {
	const nameRef = useRef()
	const maxRef = useRef()
	const { addBudget } = useBudgets()

	const handleSubmit = (e) => {
		e.preventDefault()
		addBudget({
			name: nameRef.current.value,
			max: parseFloat(maxRef.current.value),
		})

		handleClose()
	}

	return (
		<Modal show={show} onHide={handleClose}>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Add Budget</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className='mb-3' controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							ref={nameRef}
							type='text'
							placeholder='Type name'
							required
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='max'>
						<Form.Label>Max spending</Form.Label>
						<Form.Control
							ref={maxRef}
							type='number'
							placeholder='Type Max $'
							min={0}
							step={0.01}
							required
						/>
					</Form.Group>
					<div className='d-flex justify-content-end'>
						<Button variant='secondary' type='submit'>
							Add
						</Button>
					</div>
				</Modal.Body>
			</Form>
		</Modal>
	)
}

export default AddBudgetModal
