import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }
  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect('/expenses');
  } else if (request.method === 'DELETE') {
    await deleteExpense(expenseId);
    return { deletedId: expenseId };
  }
  return null;
}

export function meta({ params, location, data, parentsData }) {
  const expense = parentsData['routes/__app/expenses'].find(
    (expense) => expense.id === params.id
  );
  return {
    title: expense.title,
    description: 'Update expense',
  };
}
