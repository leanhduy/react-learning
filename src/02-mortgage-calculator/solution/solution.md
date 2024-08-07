# Solution

> This question evaluates whether you understand:
>
> - how to allow users to enter form inputs
> - validate inputs
> - perform calculations based on the inputs.

## Topics to review
- using different `type` attribute
- validate form inputs with built-in html attributes: `required`, `min`, `max`

## Form Markup

To collect user data, we use a `<form>` element and `<input>` fields.

To validate input, we can either:

1. use the built-in input type validators (`<input type="number">`)
2. use the `Number()` constructor to convert user input to numbers and check for `NaN` values.

You can use the `required` attribute in HTML to ensure that all input fields are filled out and the `min` attribute to ensure that input fields have a valid minimum value before the submit event callback is fired.

> There's no need to use controlled values for the form fields as we only have to calculate during submission..

## Form Submission

We can use JavaScript to attach on `onClick` event to the "Calculate" button that calculates the mortgage payment using the formula. But it'd be better to add an `onSubmit` event handler to the `<form>` so that both clicking on the "Calculate" button and hitting "Enter" in any of the input fields will submit the form.

It's also necessary to use `event.preventDefault()` to intercept the browser submit action which by default triggers a page redirect and is not desired here.

## Displaying Results

After computing the 3 necessary amounts using the formula, use `Intl.NumberFormat()` to format the amounts to 2 d.p. with a dollar symbol.

Feel free to customize the formatting to your own locale and currency.

## Test Cases

**Basic case**

- Enter a loan amount, interest rate, and loan term for a simple mortgage scenario, and verify that the monthly mortgage payment and total amount paid are calculated correctly.
- For example, a **30-year mortgage** on a **$100,000 loan** at **3% interest rate** should result in a monthly payment of **$421.60**, a total amount paid of **$151,777.45**, and total interest of **$51,777.45**.

**Invalid inputs**

- Leave the loan amount field blank and submit.
- Expected Result:
  - An error message prompting the user to fill out the field.
- Try to enter text instead of numeric characters in any of the fields. `<input type="number">` should prevent non-numeric characters from being entered.

## Accessibility

- Use a `<label>` for the form fields to indicate what the `<input>` is for. You can nest `<input>` within `<label>` to make the association implicit.
- Add `aria-live="polite"` to the results container element to announce content changes to users of assistive technologies.
