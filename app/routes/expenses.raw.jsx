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

export function loader() {
  return DUMMY_EXPENSES;
}
