# JavaScript Output Methods

JavaScript has different ways to send/output information.
The method depends on **where we want the output to appear**.

## 1. `document.write()`

```js
document.write("Hello");
```

### What it does

`document` represents the current HTML document (webpage), and `write()` writes content directly into it.

### When to use

* Learning basic JavaScript
* Very simple examples

### Avoid when

The webpage is already loaded. It can overwrite the existing page.

---

## 2. `alert()`

```js
alert("Login successful");
```

### What it does

Shows the message in a browser popup box.

### When to use

* Simple notifications
* Quick testing
* Learning

### Avoid when

Building a modern website UI. It interrupts the user and blocks JavaScript until the user clicks **OK**.

---

## 3. `console.log()`

```js
console.log("Hello");
```

### What it does

Prints information in the browser's **Developer Console**, not on the webpage.

Open it using:

```text
F12 → Console
```

### When to use

* Debugging
* Checking variables
* Understanding what your code is doing

Example:

```js
let price = 50000;
console.log(price);
```

The user won't see `50000` on the webpage.

---

## 4. `innerHTML`

HTML:

```html
<p id="message"></p>
```

JavaScript:

```js
document.getElementById("message").innerHTML = "Hello";
```

### What it does

Finds an HTML element and changes the HTML/content inside it.

The webpage will show:

```text
Hello
```

### When to use

* Dynamically changing webpage content
* Showing API/data results
* Updating sections, cards, messages, etc.

Example:

```js
document.getElementById("price").innerHTML = "₹50,000";
```

---

## Which one should I use?

| Requirement                    | Use                |
| ------------------------------ | ------------------ |
| Write directly into document   | `document.write()` |
| Show popup                     | `alert()`          |
| Check/debug something          | `console.log()`    |
| Show/change content on webpage | `innerHTML`        |

### Simple rule

**Developer needs to see it?** → `console.log()`

**User needs a popup?** → `alert()`

**User needs to see it on the webpage?** → `innerHTML`

**Just learning/direct document writing?** → `document.write()`

For modern web development, **DOM manipulation (`textContent`, `innerHTML`, etc.) is generally preferred for webpage output**, while `console.log()` is the main tool for debugging.
