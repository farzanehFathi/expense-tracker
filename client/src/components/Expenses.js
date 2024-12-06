import { ExpensesQuery, ExpenseQueries } from "../services/queries";

const Expenses = () => {
  const expensesQueryResult = ExpensesQuery();
  const expenseQueriesResults = ExpenseQueries(expensesQueryResult.data._id);

  return (
    <>
      {expensesQueryResult.isPending ? (
        <>Loading ... </>
      ) : expensesQueryResult.isError ? (
        <>There is an error {expensesQueryResult.error.message}</>
      ) : (
        <>
          {expensesQueryResult.data?.map((expense) => (
            <p key={expense._id}>
              {expense._id}, {expense.title}, {expense.amount},{" "}
              {expense.category}, {expense.necessity}
            </p>
          ))}
        </>
      )}
    </>
  );
};

export default Expenses;
