import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaDownload, FaPlus } from 'react-icons/fa';
import ExpensesList from '~/components/expenses/ExpensesList';
import { requireUserSession } from '~/data/auth.server';
import { getExpenses } from '~/data/expenses.server';

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses.length > 0;

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        {hasExpenses ? (
          <ExpensesList expenses={expenses} />
        ) : (
          <section id="no-expenses">
            <h1>No Expenses fount</h1>
            <p>
              Start <Link to="add">adding some</Link> now.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader({ request }) {
  //! important note
  // This route protection applies to all child routes, but if child routes have loader functions, they will run anyways. So you MUST put the route protection in loader functions inside child routes as well.
  const userId = await requireUserSession(request);

  const expenses = await getExpenses(userId);
  return expenses;
}
