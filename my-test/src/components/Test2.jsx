function test2() {
  const expeneDate = new Date(2022, 6, 18);
  const expenseTitle = "The coursen for programming";
  const expenseAmount = 500000;
  return (
    <div>
      Date: {expeneDate.toString()}
      <h2>Why: {expenseTitle}</h2>
      <p>Price {expenseAmount}</p>
    </div>
  );
}
export default test2;
