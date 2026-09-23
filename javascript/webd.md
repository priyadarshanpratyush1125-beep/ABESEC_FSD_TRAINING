If your main goal is to learn JavaScript for interviews + practical development, you do not need to master HTML/CSS first.

You need enough HTML/CSS to understand what JavaScript is manipulating.

1. HTML — learn about 20–30%

You should be comfortable creating a basic webpage and understanding the DOM.

Learn these:

Must know
HTML structure
├── html
├── head
└── body


Common elements
├── h1–h6
├── p
├── div
├── span
├── a
├── img
├── button
├── input
├── label
├── form
├── select
├── option
└── textarea


Attributes
├── id
├── class
├── name
├── value
├── href
└── src

Especially understand:

<button id="buyBtn">Buy Now</button>
<p id="message"></p>

because JavaScript will do:

const button = document.getElementById("buyBtn");
const message = document.getElementById("message");

You should understand what id, class, elements, attributes, parent and child mean.

Also learn
semantic HTML
forms
tables
lists
HTML5 basics

But don't spend weeks on HTML.

2. CSS — learn about 20–30%

You don't need to become a CSS expert for JavaScript.

Learn enough to make your JavaScript projects usable.

Must know
Selectors
├── element
├── .class
└── #id


Colors
Fonts
Margin
Padding
Border
Width / Height


Box Model
    content
    padding
    border
    margin


display
├── block
├── inline
├── inline-block
└── none


position
├── static
├── relative
├── absolute
└── fixed


Flexbox
Grid basics


Responsive basics

Flexbox is particularly important.

You should be able to make something like:

┌──────────────────────────────┐
│        Shopping Cart         │
├──────────────────────────────┤
│ Product      ₹500    Remove  │
│ Product      ₹300    Remove  │
├──────────────────────────────┤
│             Total ₹800       │
└──────────────────────────────┘

You don't need advanced animations, complex CSS architecture, or pixel-perfect design.

3. How much time should you spend?

For your goal, I'd do roughly:

Skill	Depth	Time
HTML	Basic → comfortable	3–5 days
CSS	Basic → comfortable	5–7 days
JavaScript	Deep	4–6 weeks
DOM + Events	Deep	5–7 days
Async JS	Deep	4–7 days

The exact days aren't important. Understanding is more important than finishing a playlist.

4. Your learning ratio should be

Think approximately:

HTML       15%
CSS        20%
JavaScript 65%

For a JavaScript developer, JavaScript deserves the majority of your effort.

Later, if you decide to become a frontend developer:

HTML
CSS
JavaScript
   ↓
React
   ↓
Frontend development

Then you can deepen HTML/CSS.

5. Very important: don't separate HTML/CSS and JS completely

Learn them together through small examples.

For example:

HTML
<input id="name">
<button id="btn">Submit</button>
<p id="output"></p>
CSS
#output {
    font-size: 20px;
}
JavaScript
const input = document.getElementById("name");
const button = document.getElementById("btn");
const output = document.getElementById("output");


button.addEventListener("click", function () {
    output.textContent = input.value;
});

Now you understand the entire flow:

HTML
 ↓
creates elements


CSS
 ↓
styles elements


JavaScript
 ↓
finds elements
 ↓
reads data
 ↓
performs logic
 ↓
changes elements

This is exactly the level of HTML/CSS you need before going deep into JavaScript.

Your order should be:

HTML basics → CSS basics → JavaScript fundamentals → DOM → Events → Advanced JavaScript → Async JS → Projects → Node.js/React

Don't spend 1–2 months learning HTML/CSS before touching JavaScript.
Yes. Since your goal is full-stack development, I would not recommend learning “all of HTML → all of CSS → all of JavaScript → all of Node…” separately. You should learn just enough frontend first, then move into backend, and continuously build projects.

Your uploaded notes are mainly an HTML reference, covering HTML basics, forms, semantic layout, responsive design, JavaScript inclusion, Web APIs, etc. They also cover forms and validation-related attributes such as min, max, multiple, pattern, and maxlength.

For you, I'd follow this sequence:

Full-Stack Roadmap
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Browser / HTTP fundamentals
 ↓
Node.js
 ↓
Express.js
 ↓
REST API
 ↓
MongoDB
 ↓
Authentication & Authorization
 ↓
Advanced Backend
 ↓
Testing
 ↓
Deployment
 ↓
React
 ↓
Full-Stack Projects

The important thing is depth changes at every stage.

0. Web Fundamentals — BEFORE Backend

Don't skip this.

You need to understand what actually happens when you type:

https://example.com

Learn:

Client vs server
Browser
Web server
HTTP
HTTPS
Request
Response
URL
DNS — basic understanding
IP address — basic understanding
Port
TCP — basic understanding
HTTP methods
GET
POST
PUT
PATCH
DELETE
HTTP status codes
200
201
400
401
403
404
409
500
Headers
Body
JSON
Cookies
Sessions — concept
Depth

Medium.

Don't become a networking expert yet.

You should be able to explain:

Browser
   ↓
HTTP Request
   ↓
Server
   ↓
Application
   ↓
Database
   ↓
Server
   ↓
HTTP Response
   ↓
Browser
Mini project

HTTP Request Inspector

Build a simple Node server later that displays:

Method: GET
URL: /users
Headers:
User-Agent: ...
Host: ...

This will make HTTP much easier to understand.

1. HTML

Your uploaded notes already give you a large HTML foundation: elements, attributes, links, images, tables, lists, semantic layout, responsive concepts, etc.

But you do NOT need to memorize every HTML tag.

Learn deeply
Basic structure
<!DOCTYPE html>
<html>
<head>
<body>
Common elements
h1-h6
p
div
span
a
img
button
ul
ol
li
table
form
input
textarea
select
option
Semantic HTML

Very important:

header
nav
main
section
article
aside
footer

Your notes specifically cover semantic layout elements such as header, nav, section, article, aside, and footer.

Forms

Very important for backend.

Learn:

<form>
<input>
<label>
<textarea>
<select>
<option>
<button>

And:

name
value
type
required
placeholder
min
max
maxlength
pattern
multiple

Your notes already cover these validation/input concepts.

Don't spend much time on

You can skim:

image maps
HTML entities
HTML colors
<iframe>
obsolete/rare HTML features
HTML canvas
HTML audio/video details
Web Workers
SSE

Your uploaded notes contain these topics, but they aren't priorities for becoming a backend/full-stack developer.

Mini projects

Project 1: Personal Portfolio

Then:

Project 2: Registration Form

Then:

Project 3: College Student Portal UI

Don't move on until you can create a page without constantly looking up basic tags.

2. CSS

You don't need to become a CSS designer.

You need enough CSS to build a usable frontend.

Learn deeply
Selectors
.class
#id
element
element.class
*
Box model

This is extremely important:

content
padding
border
margin

Your notes introduce padding and margin as the spaces inside and outside an element's border.

Display
block
inline
inline-block
none
flex
grid
Flexbox

Learn well:

display:flex
flex-direction
justify-content
align-items
gap
flex-wrap
Grid

Learn:

grid-template-columns
grid-template-rows
gap
Position
static
relative
absolute
fixed
sticky
Responsive design

Learn:

@media

Your notes also introduce responsive design and media queries.

Mini projects

Build:

1. Login page
2. Dashboard
3. Responsive navbar
4. E-commerce product page

At this point:

HTML + CSS

should be comfortable.

3. JavaScript — MOST IMPORTANT FRONTEND STAGE

This is where I would spend significantly more time.

Because you want Node.js backend, JavaScript becomes your frontend + backend language.

Level 1 — Core JavaScript

Learn deeply:

variables
let
const
data types
operators
if/else
switch
loops
functions
arrays
objects
strings

Then:

scope
hoisting
closures
this
destructuring
spread/rest
template literals
4. JavaScript Arrays & Objects

Very important because API data looks like this:

[
  {
    "id": 1,
    "name": "Rahul"
  },
  {
    "id": 2,
    "name": "Aman"
  }
]

Learn:

map()
filter()
reduce()
find()
findIndex()
some()
every()
sort()
forEach()

You were recently working with filter() and reduce(), so this is directly useful for your next stage.

Mini project

Student Result Analyzer

Input:

students

Calculate:

average marks
top student
passed students
failed students
subject statistics
5. DOM

Now connect JS to HTML.

Learn:

document.getElementById()
querySelector()
querySelectorAll()
createElement()
append()
remove()

Then:

events
click
submit
input
change
keydown

Your notes already introduce JavaScript modifying HTML through methods such as getElementById().

Mini project

Todo App

Features:

Add task
Delete task
Edit task
Complete task
Filter tasks
6. Asynchronous JavaScript

This is critical before Node.js.

Learn:

synchronous vs asynchronous
callback
Promise
.then()
.catch()
async
await
try/catch

Then:

fetch()

Understand:

Request
   ↓
Promise
   ↓
Response
   ↓
JSON
   ↓
Data
Mini project

Weather/API Dashboard

Frontend:

User enters city
       ↓
fetch()
       ↓
API
       ↓
JSON
       ↓
Display data
7. Browser Storage

Learn:

localStorage
sessionStorage

Understand what should and shouldn't be stored there.

Mini project

Expense Tracker

Store:

income
expenses
categories

using localStorage.

8. Git + GitHub

You already use Git, so continue alongside everything.

Learn properly:

repository
commit
branch
merge
remote
pull
push
clone
pull request
.gitignore
README

You recently encountered:

current branch main has no upstream

so don't just memorize the fix—understand:

local branch
        ↓
remote branch
        ↓
upstream tracking
9. Node.js — START BACKEND

Now you enter the backend.

Don't immediately jump into Express.

First understand Node itself.

Learn
What is Node.js?
V8
Node runtime
CommonJS
ES Modules
npm
package.json
node_modules
package-lock.json

Then Node APIs:

fs
path
os
process
events
http

Also understand:

stdin
stdout
environment variables

Because you already have an interest in Linux/system programming, Node's interaction with the OS will be particularly useful.

10. Build HTTP Server WITHOUT Express

This is extremely important.

Create:

const http = require("http");

Build:

GET /
GET /users
POST /users

Understand:

request
response
headers
statusCode
method
URL
body
Mini project

Mini REST Server without Express

Endpoints:

GET /users
GET /users/:id
POST /users
DELETE /users/:id

Store users temporarily in:

const users = [];

Once you understand this, Express will make much more sense.

11. npm

Learn:

npm init
npm install
npm uninstall
npm scripts
dependencies
devDependencies
package.json
package-lock.json

Understand:

npm install express

What actually happens.

12. Express.js

Now learn Express.

This becomes your main backend framework.

Learn deeply
app
routes
request
response
middleware
router
params
query
body
status codes
error handling

Example architecture:

Request
   ↓
Middleware
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Response
13. REST API

This is one of the most important backend topics.

Learn how to design:

GET    /users
GET    /users/:id
POST   /users
PATCH  /users/:id
DELETE /users/:id

Understand:

resource
endpoint
HTTP method
status code
request body
response body
pagination
filtering
sorting
search
Mini project

Student Management REST API

POST   /students
GET    /students
GET    /students/:id
PATCH  /students/:id
DELETE /students/:id

Initially use an array.

Then move to MongoDB.

14. MongoDB

Now database.

Learn:

database
collection
document
field
_id
CRUD

Then:

MongoDB queries
insert
find
findOne
update
delete

Then MongoDB indexes and data modeling.

15. Mongoose

For your Node/Express/Mongo stack, learn Mongoose after understanding MongoDB itself.

Learn:

Schema
Model
Document
validation
timestamps
references
populate
middleware/hooks
Mini project

Upgrade:

Student Management API

from:

Array

to:

Express
   ↓
Mongoose
   ↓
MongoDB
16. Backend Architecture

This is where you stop writing everything inside server.js.

Learn:

routes/
controllers/
services/
models/
middlewares/
utils/
config/

Example:

backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── middlewares/
│   ├── utils/
│   └── config/
│
├── package.json
└── server.js

Don't over-engineer this.

Understand why each layer exists.

17. Authentication

VERY important.

Learn:

Authentication
Authorization

Understand:

Register
   ↓
Password hashing
   ↓
Login
   ↓
Credential verification
   ↓
Session/token
   ↓
Authenticated request

Learn:

password hashing
bcrypt/Argon2 concepts
JWT
access token
refresh token
cookies
HTTP-only cookies

Don't just copy a JWT tutorial.

You should understand:

Why does the server need to know who sent the request?

18. Authorization

Authentication:

Who are you?

Authorization:

What are you allowed to do?

Example:

Admin
Employee
Manager
Student

API:

GET /users

might be accessible to everyone.

But:

DELETE /users/:id

might require:

admin
Mini project

College Portal Backend

Roles:

Admin
Teacher
Student

Permissions:

Admin → everything
Teacher → manage marks
Student → view marks
19. Validation

Never trust frontend validation.

Learn backend validation:

required fields
type validation
length
format
range
sanitization

For example:

{
  "email": "abc"
}

Your backend should reject it even if the frontend said it was valid.

20. Error Handling

Learn proper API errors.

Instead of:

Something went wrong

return meaningful responses:

{
  "success": false,
  "message": "Student not found"
}

Understand:

400
401
403
404
409
422
500

Also learn centralized Express error middleware.

21. Security

Once your basic backend works, learn:

CORS
CSRF
XSS
NoSQL injection
SQL injection concept
rate limiting
password security
environment variables
secret management
secure cookies
HTTP headers
input validation

Don't try to become a cybersecurity expert here.

Learn enough to build a reasonably secure web application.

22. File Uploads

Very useful in real applications.

Learn:

multipart/form-data
file upload
file validation
file size limits
storage
URLs
Mini project

Employee Document Portal

Employee uploads:

photo
PDF
certificate
document

Backend stores metadata.

This connects very nicely with your Employee Task Verification Portal idea.

23. Email

Learn:

SMTP
email service
verification email
password reset
Mini project

Add:

Forgot Password
       ↓
email
       ↓
reset link
       ↓
new password
24. Database — Advanced

After basic MongoDB, learn:

indexes
compound indexes
aggregation
relationships
pagination
transactions
atomic operations
query optimization

Also learn SQL.

Even if your primary stack is MongoDB, I strongly recommend learning:

PostgreSQL

later.

Because backend developers should understand relational databases.

25. Caching

Learn Redis at this stage.

Understand:

cache
TTL
key-value
session storage
rate limiting

Example:

Client
 ↓
API
 ↓
Redis
 ↓
MongoDB
Mini project

API Cache

Cache:

GET /products

for:

60 seconds
26. Background Jobs

Learn:

queue
worker
job
retry

Example:

User registers
      ↓
API returns immediately
      ↓
Job queue
      ↓
Worker
      ↓
Send email

Later learn tools such as BullMQ.

27. WebSockets

Only after REST APIs.

Learn:

WebSocket
connection
message
broadcast
rooms
Mini project

Real-time Chat

User A
 ↕
WebSocket Server
 ↕
User B
28. Testing

Learn backend testing.

Start with:

unit tests
integration tests
API tests

Test:

POST /users
GET /users
DELETE /users/:id

Also learn API testing tools such as Postman/Insomnia.

29. Logging & Debugging

Learn:

logs
log levels
error logs
request logs
debugging

Understand how you would investigate:

User says:
"Login isn't working."

You should trace:

Request
 ↓
Route
 ↓
Middleware
 ↓
Controller
 ↓
Database
 ↓
Response
30. Deployment

Only after you can build the application locally.

Learn:

Linux server
environment variables
process
port
reverse proxy
domain
HTTPS
logs
database deployment

Then:

GitHub
 ↓
Server
 ↓
Node
 ↓
Express
 ↓
MongoDB

You already have Linux/SSH experience, so this part should become a strength for you.

31. React

Now return to frontend.

Why?

Because now you understand what the backend actually provides.

Learn:

components
props
state
events
hooks
useState
useEffect
forms
conditional rendering
lists
React Router
API calls
loading
error handling

Then:

Context

and later:

state management

Don't start Redux immediately.

32. Full-Stack Integration

Now combine:

React
   ↓
HTTP
   ↓
Express
   ↓
Authentication
   ↓
MongoDB

Example:

React Login Page
        ↓
POST /api/auth/login
        ↓
Express
        ↓
Database
        ↓
Authentication
        ↓
Response
        ↓
React Dashboard

This is where you finally become a full-stack developer rather than someone who knows several technologies.

Your Project Ladder

I would structure your practical learning like this:

Stage	Project
HTML	Portfolio
HTML + CSS	College website
JS	Student Result Analyzer
DOM	Todo App
JS + API	Weather Dashboard
Node	HTTP Server
Express	Student REST API
MongoDB	Student Management API
Auth	Login/Register API
Authorization	College Portal
File Upload	Employee Document Portal
Redis	Cached API
WebSocket	Chat App
React	Dashboard
Full Stack	E-commerce
Advanced Full Stack	Employee Task Verification Portal
Your BIG Project

For you, I would eventually build:

Smart Employee Task Verification & Work Monitoring Portal

You already have this project idea.

Architecture:

                    FRONTEND
                       │
                     React
                       │
                    HTTP/API
                       │
                       ▼
                 ┌───────────┐
                 │  Express  │
                 └───────────┘
                       │
          ┌────────────┼────────────┐
          │            │            │
       Auth         Tasks        Uploads
          │            │            │
          └────────────┼────────────┘
                       │
                    MongoDB
                       │
                  ┌────┴────┐
                  │         │
                Redis     Storage

Features:

Admin login
Employee login
Supervisor login

Create employee
Assign task
Update task
Submit task proof
Upload photo
Task verification
Task status
Priority
Deadline
Timestamp
GPS information
Notifications
Analytics

This single project can demonstrate most of your backend knowledge.

How Deep Should You Go?

This is the most important part.

Don't make the mistake of trying to learn every technology to 100%.

Use this rule:

🟢 Basic

You can:

use it correctly.

Examples:

HTML tags
CSS properties
npm
Git
React basics
🟡 Intermediate

You can:

build something without following a tutorial.

Examples:

JavaScript
Node
Express
MongoDB
REST APIs
Authentication
React
🔴 Deep

You can:

explain what's happening internally and debug problems.

For you, go deep in:

JavaScript
HTTP
Node.js
Express middleware
REST APIs
Databases
Authentication
Backend architecture
Linux
Git
The Most Important Practical Rule

Don't do this:

HTML course
↓
CSS course
↓
JS course
↓
Node course
↓
Express course
↓
Mongo course
↓
React course
↓
Finally build project

You'll forget half of it.

Instead:

HTML
 ↓
mini project
 ↓
CSS
 ↓
improve project
 ↓
JavaScript
 ↓
make project interactive
 ↓
Node
 ↓
add backend
 ↓
MongoDB
 ↓
persist data
 ↓
Authentication
 ↓
add users
 ↓
React
 ↓
convert frontend

That's much better.

Your Exact Order

If I were planning your learning from today, I'd use:

PHASE 1
HTML
CSS
        ↓
Portfolio + College Dashboard

PHASE 2
JavaScript fundamentals
Arrays/Objects
DOM
Events
Async JS
Fetch
        ↓
Todo + API Project

PHASE 3
HTTP
JSON
REST
Node.js
npm
        ↓
HTTP Server

PHASE 4
Express
Routing
Middleware
Controllers
Error handling
        ↓
Student REST API

PHASE 5
MongoDB
Mongoose
CRUD
Data modeling
        ↓
Student Management Backend

PHASE 6
Authentication
Authorization
JWT/Cookies
Password hashing
Validation
Security
        ↓
College Portal

PHASE 7
File uploads
Email
Pagination
Search
Filtering
Redis
        ↓
Employee Portal Backend

PHASE 8
React
        ↓
React Dashboard

PHASE 9
React + Express + MongoDB
        ↓
FULL STACK

PHASE 10
Testing
Docker
Linux deployment
CI/CD
WebSockets
System design
        ↓
PRODUCTION-LEVEL PROJECT
One important adjustment for you

Because you're already learning C, GCC, Makefiles, ELF, Linux, SSH and system programming, don't abandon that path while learning full-stack. Keep it as your systems/CS track, while this becomes your development track:

             YOU
              │
       ┌──────┴──────┐
       │             │
   CS/SYSTEMS     FULL STACK
       │             │
 C/C++ / OS       JS
 GCC              Node
 ELF              Express
 Linux            MongoDB
 Networking       React
 Git              REST
       │             │
       └──────┬──────┘
              │
        Strong CSE Profile

That combination is actually much stronger than simply learning MERN tutorials.

And your uploaded HTML notes are a good reference, but don't try to finish every section before starting JavaScript; the notes contain many topics that are peripheral to your backend goal.

Today 11:29 PM
weekly-current-affairs Public

Scrapes weekly current affairs PDFs from MadeEasy websites.

 JavaScript Updated on Nov 15, 2025

svg

svg

svg

SyncBackup Public

Schedules periodic sync of specified folders to a local backup directory.

 Batchfile Updated on Oct 5, 2025

svg

svg

svg

video-player Public

video-playerhtml5-videoplaylist-managerlocal-and-web-media

 HTML star 2 Updated on Sep 9, 2025

svg

svg

svg

riuandg5 Public

Updated on Sep 17, 2024

svg

svg

svg

eld-labs Public

Embedded Logic Design Labs

xilinxxpmzedboardxilinx-vivadoxilinx-sdkembedded-logic-designzybo-z7-10

 Tcl star 1 Updated on Jul 15, 2024

svg

svg

svg

xpm Public

XPM - Xilinx Project Manager

xilinxxpmxilinx-fpgaxilinx-vivadoxilinx-sdk

 Shell star 4 svgMIT License Updated on Jul 4, 2024

svg

svg

svg

object-tracking-app Public

An attempt to integrate OpenCV.js in React app to test object tracking in video.

 JavaScript star 1 Updated on Mar 4, 2024

svg

svg

svg

task-execute Public

A utility to create tasks, group tasks, and execute.

taskparallelseriesgroup

 TypeScript svgMIT License Updated on Sep 11, 2023

svg

svg

svg

riuandg5.github.io Public

My portfolio!

 HTML Updated on Jul 4, 2023

svg

svg

svg

foobar.withgoogle.com Public

Google Foobar Journey

 Python Updated on Oct 19, 2022

svg

svg

svg

learn-makefile Public

Learn to make a makefile for making things XD

cmakefile

 Makefile star 6 fork 2 svgMIT License Updated on Jul 20, 2021

svg

svg

svg

lnt-emb-c-activities Public

 C fork 2 Updated on May 15, 2021

svg

svg

svg

lnt-mini-project-c Public

Applied SDLC using C language

 C fork 1 svgCreative Commons Zero v1.0 Universal Updated on Apr 22, 2021

svg

svg

svg

lnt-stepin-c Public

LnT StepIn assignments and projects in C

Updated on Apr 9, 2021

svg

svg

svg

MiniProject_Template Public

Forked from stepin654321/MiniProject_Template

 C svgCreative Commons Zero v1.0 Universal Updated on Apr 5, 2021

svg

svg

svg

floating-pacman Public

 HTML star 2 fork 1 Updated on Jun 2, 2020

svg

svg

svg

sih2020 Public

Smart India Hackathon 2020 Problem Statements

hackathonsihproblem-statementssmart-india-hackathonsih2020sih20

 HTML star 2 Updated on Jan 31, 2020

svg

svg

svg

pid_controller Public

Forked from ojasvishaklya/pid_controller

Matlab code for PID controller design using Nicols method

 MATLAB Updated on Nov 9, 2019

svg

svg

svg

learn-advanced-javascript Public

Documentation to learn new and advanced features in javascript.

Updated on Aug 26, 2019

svg

svg

svg

2019-Team-6 Public

Forked from igdtuwhacks/2019-Team-6

 C++ Updated on Jul 8, 2019

svg

svg

svg

react-lights-out Public

 JavaScript Updated on May 29, 2019

svg

svg

svg

react-pokedex Public

 JavaScript Updated on May 22, 2019

svg

svg

svg

win10-like-reveal-effect Public

Reveal items on mouseover. It's like focusing light on objects in the dark!

 HTML star 3 Updated on May 16, 2019

svg

svg

svg

clitodo Public

Command line todo list manager.

 JavaScript svgMIT License Updated on Mar 9, 2019

svg

svg

svg

flexicons Public

flexible icons made using power of CSS

 CSS Updated on Oct 7, 2018

svg

svg

svg

donate-for-kerala Public

 CSS star 1 Updated on Oct 2, 2018

svg

svg

svg

Geekseek Public

A project to provide students with study material.

 HTML star 3 Updated on Oct 1, 2018

svg

svg

svg

muggler Public

Muggler is a node.js module for using Google Drive API in a simplified way.

 JavaScript star 1 Updated on Jul 10, 2018

svg

svg

svg

auth-passport-local Public

Authentication sample in Express app using local strategy of passport.js

 JavaScript fork 1 Updated on Jul 5, 2018

svg

svg

svg

auth-passport-facebook Public

Authentication sample in Express app using facebook strategy of passport.js

 JavaScript Updated on Jul 4, 2018

figchalk Public

Node package combining figlet and chalk.

clicolorterminalchalkfigletfigchalk

 JavaScript star 4 Updated on Jun 28, 2018

svg

svg

svg

reuMark Public

A web application to bookmark your links with a preview.

nodejsbookmarklinkpreviewpassportjs

 JavaScript svgMIT License Updated on Jun 9, 2018

svg

svg

svg

daastaan Public

Just a blog to share my poetry.

 HTML svgMIT License Updated on Jun 2, 2018

svg

svg

svg

minions-gallery Public

Responsive website made using Bootstrap.

 HTML Updated on Jun 2, 2018

svg

svg

svg

HangmanGame Public

Forked from ShivamJoker/HangmanGame

The HangmanGame made with love

 JavaScript Updated on Apr 21, 2018

svg

svg

svg

WinWebDevProMgr Public

Windows Web Development Project Manager

 Batchfile star 1 svgMIT License Updated on Apr 2, 2018

svg

svg

svg

reuBot Public

Just a batch file bot to have some chat.

 Batchfile svgMIT License Updated on Feb 26, 2018

svg

svg

svg

reu-java-snakes Public

Snakes game purely based on JavaScript.

 JavaScript Updated on Jan 18, 2018

svg

svg

svg

text-encryption-and-decryption Public

Encrypt and decrypt text in C

 C Updated on Dec 4, 2017

svg

svg

svg

lexical-sort-for-strings-in-C Public

C code to arrange words in lexical order or dictionary order.

 C Updated on Dec 3, 2017

svg

svg

svg

hello-world Public

starting up on github!

Updated on Nov 30, 2017

svg

svg

svg

api-design Public

Forked from livingsocial/api-design

LivingSocial API Design Guide

Updated on Jul 28, 2017

svg

svg

svg tell which project is imporatnt for me during this leaing and sort then easy to hard and trll foundation project

Yes. Looking at this specific repository list, there are several projects that are very useful for your full-stack/backend learning, but you should not try to do all of them.

Your target should be:

Foundation → JavaScript → Node.js → Express → API → Database → Auth → Full-stack

My ranking for YOU
Order	Project	Difficulty	What you'll learn	Priority
1	clitodo	⭐	JS basics, functions, arrays, objects, modules, CLI	🟢 Foundation
2	learn-advanced-javascript	⭐⭐	JS concepts beyond basics	🟢 Foundation
3	video-player	⭐⭐	HTML5, DOM, events, JS, media APIs	🟢 Foundation
4	react-pokedex	⭐⭐⭐	React, API calls, components, state	🟢 Important
5	react-lights-out	⭐⭐⭐	React state/events/components	🟢 Important
6	muggler	⭐⭐⭐	Node.js, package/module, Google API	🟡 Backend foundation
7	reuMark	⭐⭐⭐⭐	Node.js, Express, API, authentication, database concepts	🔴 Very important
8	auth-passport-local	⭐⭐⭐⭐	Authentication + Express	🔴 Important
9	auth-passport-facebook	⭐⭐⭐⭐	OAuth/social authentication	🟡 Later
10	weekly-current-affairs	⭐⭐⭐⭐	JS + scraping + automation	🟡 Useful
11	task-execute	⭐⭐⭐⭐⭐	TypeScript, async execution, parallel/series tasks