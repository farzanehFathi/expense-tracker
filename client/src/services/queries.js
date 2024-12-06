import { useQuery, useQueries, keepPreviousData } from "@tanstack/react-query";

import { getExpenses, getExpense } from "./api";

export function ExpensesQuery() {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: () => getExpenses(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}

export function ExpenseQueries(ids) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["expense", id],
        queryFn: () => getExpense(id),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
      };
    }),
  });
}
