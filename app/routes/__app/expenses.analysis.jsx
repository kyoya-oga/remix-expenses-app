import Chart from '~/components/expenses/Chart';
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date().toISOString(),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date().toISOString(),
  },
];

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
