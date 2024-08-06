# [MORTGAGE CALCULATOR](https://www.greatfrontend.com/questions/user-interface/mortgage-calculator/solution)

## Type: ReactJS

## Level: Easy

### Descriptions

Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.

### Requirements

- The user should be able to enter:

  - Loan amount ($)
  - Annual interest rate (%). This is also known as the annual percentage rate (APR)
  - Loan term (in years)

- Using the inputs, the calculator should compute the following and display the results to the user:

  - Monthly mortgage payment
  - Total payment amount
  - Total interest paid

  > **The formula for calculating the monthly payment is:**
  >
  > **M = P(i(1+i)n)/((1+i)n - 1)**
  >
  > M: Monthly mortgage payment
  >
  > P: Loan amount
  >
  > i: Monthly interest rate (APR / 12)
  >
  > n: Total number of payments (loan term in years x 12)

- If a non-numerical string is entered into any input field, the calculator should display an error message.

- Additionally, the calculator should handle any other invalid inputs that may arise.

- Round the result amounts to 2 decimal places.

> **Asking clarification questions is IMPORTANT.**
>
> The last two requirements might not be given to you during interviews, **you're expected to clarify**.

### Starter Code

React component

```javascript
import "./styles.css";

export default function App() {
  return (
    <form>
      <input type="text" />
    </form>
  );
}
```

```css
body {
  font-family: sans-serif;
}
```

### References

https://frontendeval.com/questions/mortgage-calculator
