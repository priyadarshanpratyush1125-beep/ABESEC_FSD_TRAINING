# JavaScript — Variables & Data Types

## What I Learned

I learned how JavaScript runs through an HTML file, how to print output using `console.log()`, how variables work, and why JavaScript is called dynamically typed.

---

## 1. Problem: How do I run JavaScript?

I learned:

```js
console.log("Hello");
```

But a `.js` file is not directly opened like a normal webpage.

### Solution

Connect the JavaScript file with an HTML file:

```text
index.html → script.js → Browser → Inspect → Console
```

Then I can see the output in the browser's Console.

### Practical

**index.html**

```html
<script src="script.js"></script>
```

**script.js**

```js
console.log("Hello");
```

---

## 2. Problem: Why don't we write a datatype before a variable?

Coming from C/C++, I expected:

```c
int roll = 29;
```

But JavaScript allows:

```js
let roll = 29;
```

I don't write `int`, `float`, `char`, etc.

### Solution: Dynamic Typing

JavaScript is **dynamically typed**.

JavaScript determines the type from the value.

```js
let roll = 29;
let name = "Pratyush";
let follow = true;
```

Here:

```text
29          → Number
"Pratyush"  → String
true        → Boolean
```

So:

> **Dynamic typing means I don't have to declare a fixed datatype for the variable.**

It does **not** mean JavaScript has no datatypes.

---

## 3. Problem: If JavaScript is dynamically typed, why do datatypes exist?

I thought:

> "If one variable can store Number, String, Boolean, etc., why do I need datatypes?"

### Solution

The **variable** can refer to values of different types, but every **value still has a datatype**.

```js
let x = 29;
x = "Pratyush";
x = true;
```

Conceptually:

```text
x → 29          → Number
x → "Pratyush"  → String
x → true        → Boolean
```

Datatype matters because different types behave differently.

For example:

```js
10 + 20
```

is Number + Number.

But:

```js
"10" + "20"
```

is String + String.

So:

> **Dynamic typing means I don't declare the type beforehand. Datatypes still exist because values behave according to their type.**

---

# 4. Problem: Why do we need `let`, `const`, and `var`?

I initially thought:

> "Why not simply write `score = 0` and later change it?"

### Solution

`let`, `const`, and `var` are **not datatypes**.

They are used to **declare variables**.

They also define important rules about:

1. **Redeclaration**
2. **Scope**
3. **Whether the value can be changed/reassigned**

---

# `var`

`var` is the older JavaScript way of declaring variables.

### 1. Redeclaration — Allowed

The same variable can be declared again using `var`.

```js
var age = 15;
var age = 24;
var age = 6;

console.log(age);
```

Output:

```text
6
```

The last assignment is the current value.

So:

> **var → redeclaration is allowed**

### 2. Scope

`var` is **function-scoped**.

If declared outside a function, it can behave as a global variable.

It does not respect normal `{ }` block scope like `let` and `const`.

### 3. Value can change

A `var` variable can be reassigned:

```js
var age = 15;
age = 24;
```

So:

```text
var
├── Redeclaration → Allowed
├── Scope         → Function scope
└── Reassignment  → Allowed
```

---

# `let`

`let` is the modern way to declare a variable when its value may change.

### 1. Redeclaration — Not Allowed in the Same Scope

```js
let age = 25;
let age = 23;
```

This gives an error.

But reassignment is allowed:

```js
let age = 25;
age = 23;

console.log(age);
```

Output:

```text
23
```

So remember the difference:

```text
let age = 25;  → declaration
age = 23;      → reassignment
```

> **let → cannot redeclare the same variable in the same scope, but can reassign its value**

### 2. Scope

`let` is **block-scoped**.

A block is generally represented by `{ }`.

```js
if (true) {
    let age = 25;
}

console.log(age);
```

Here `age` cannot be accessed outside the block.

### 3. Value can change

```js
let score = 0;

score = 10;
score = 20;
```

So:

```text
let
├── Redeclaration → Not allowed in same scope
├── Scope         → Block scope
└── Reassignment  → Allowed
```

---

# `const`

`const` is used when a variable should **not be reassigned**.

### 1. Redeclaration — Not Allowed

```js
const age = 25;
const age = 23;
```

This gives an error.

### 2. Scope

`const` is **block-scoped**, just like `let`.

```js
if (true) {
    const age = 25;
}
```

`age` exists only inside that block.

### 3. Value cannot be reassigned

```js
const age = 25;

age = 23; // Error
```

So:

> **const → use when you don't want to reassign the variable**

So:

```text
const
├── Redeclaration → Not allowed in same scope
├── Scope         → Block scope
└── Reassignment  → Not allowed
```

---

# 5. Easy Comparison

| Feature           | `var`         | `let`                  | `const`                             |
| ----------------- | ------------- | ---------------------- | ----------------------------------- |
| Redeclaration     | ✅ Allowed     | ❌ Not in same scope    | ❌ Not in same scope                 |
| Reassignment      | ✅ Allowed     | ✅ Allowed              | ❌ Not allowed                       |
| Scope             | Function      | Block                  | Block                               |
| Modern preference | Usually avoid | Use when value changes | Use by default when no reassignment |

---

# 6. The Main Confusion: Redeclaration vs Reassignment

These are different.

### Redeclaration

Creating the same variable again:

```js
let age = 25;
let age = 23; // ❌
```

### Reassignment

Changing the existing variable's value:

```js
let age = 25;
age = 23; // ✅
```

This distinction is important.

---

# Final Understanding

```text
var
→ old method
→ redeclaration allowed
→ function-scoped
→ value can change

let
→ modern variable
→ redeclaration not allowed in same scope
→ block-scoped
→ value can change

const
→ modern variable
→ redeclaration not allowed in same scope
→ block-scoped
→ value cannot be reassigned
```

### Practical Rule

```text
Will I reassign the variable?
        │
     ┌──┴──┐
    YES    NO
     ↓      ↓
    let    const

var → mainly understand it for older JavaScript code
```

And remember:

> **`let`, `const`, and `var` describe how the variable is declared and what rules it follows. `Number`, `String`, `Boolean`, etc. describe the type of the value.**
