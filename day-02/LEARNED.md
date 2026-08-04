# Contact Form Comparison

## Overview

Three different approaches were implemented to understand how React handles form state:

- Controlled Component
- Uncontrolled Component using `useRef`
- Uncontrolled Component using `FormData`

---

| Feature                 | Controlled         | Uncontrolled (useRef) | Uncontrolled (FormData) |
| ----------------------- | ------------------ | --------------------- | ----------------------- |
| State management        | React State        | DOM                   | DOM                     |
| Re-render on typing     | ✅ Yes             | ❌ No                 | ❌ No                   |
| Validation while typing | ✅ Easy            | ⚠️ Manual             | ⚠️ Manual               |
| Reset form              | Easy with state    | Manual                | Native (`form.reset()`) |
| Readability             | Medium             | Medium                | High                    |
| Boilerplate             | High               | High                  | Low                     |
| Performance             | Lower (re-renders) | Better                | Best                    |
| Access field values     | Immediate          | Through refs          | On submit               |
| Best use case           | Complex forms      | Legacy integrations   | Simple forms            |

---

## Pros & Cons

### Controlled Components

#### Pros

- React is the single source of truth.
- Easy real-time validation.
- Easy conditional rendering.
- Easy to integrate with libraries like Formik or React Hook Form.
- Predictable behavior.

#### Cons

- More boilerplate.
- Every keystroke triggers a re-render.
- More code for large forms.

---

### Uncontrolled Components (useRef)

#### Pros

- Fewer re-renders.
- Direct DOM access.
- Useful for focusing inputs or third-party libraries.

#### Cons

- One ref per field.
- More repetitive code.
- Validation is less convenient.

---

### Uncontrolled Components (FormData)

#### Pros

- Very little code.
- Excellent performance.
- Native browser API.
- Great for simple forms.

#### Cons

- No access to values until submit.
- Real-time validation is harder.
- Less React-centric approach.

---

## Conclusion

For simple forms, using `FormData` provides the cleanest and simplest implementation.

For forms requiring live validation, dynamic UI updates, or complex business logic, controlled components are the preferred solution.

Using `useRef` is helpful when direct interaction with DOM elements is required, but it becomes verbose as the number of fields increases.
