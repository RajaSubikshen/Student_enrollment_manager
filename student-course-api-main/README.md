# Bug Fixes and Improvements

## Project Overview

This project implements a **Student Course Enrollment API** using **Node.js and Express**.
The system allows students to register, courses to be created, and students to enroll in courses.

During testing and debugging, multiple issues were discovered across different layers of the application (middleware, services, routing, and file handling).
The following fixes were applied to stabilize the system and ensure correct API behavior.

---

# 1. Middleware Execution Bug

### Issue

The request logger middleware did not properly forward requests to the next layer.

Original code:

```js
next
```

This referenced the function but never executed it, causing requests to stop in middleware.

### Fix

The middleware was updated to properly invoke the next handler.

```js
next()
```

### Result

Requests now correctly flow from middleware to routes and controllers.

---

# 2. File Writing Error in File Handler

### Issue

The `fs.writeFile()` function was used without a callback function.

```js
fs.writeFile(path, JSON.stringify(data,null,2))
```

Node.js requires a callback when using `writeFile`.

### Fix

The function was replaced with the synchronous version:

```js
fs.writeFileSync(path, JSON.stringify(data,null,2))
```

### Result

Data now saves correctly to JSON files without runtime errors.

---

# 3. Incorrect Object Added During Student Registration

### Issue

The student registration service created a new student object but pushed the original request data into the array.

```js
students.push(data)
```

This caused incorrect data to be stored.

### Fix

The correct object is now added.

```js
students.push(student)
```

### Result

Student records now contain the generated ID and correct structure.

---

# 4. Assignment Instead of Comparison in Enrollment Logic

### Issue

Course lookup used an assignment operator.

```js
courses.find(c => c.id = courseId)
```

This overwrote course IDs and returned incorrect results.

### Fix

```js
courses.find(c => c.id == courseId)
```

### Result

Courses are now correctly matched by ID.

---

# 5. Missing Students Array in Course Data

### Issue

Enrollment logic expected a `students` array in each course, but it was not guaranteed to exist.

This caused errors like:

```
Cannot read property 'students' of undefined
```

### Fix

Courses now ensure a students array exists before modifying it.

```js
if(!course.students){
   course.students = []
}
```

### Result

Enrollment operations run safely without runtime errors.

---

# 6. Course Capacity Validation Bug

### Issue

The capacity condition allowed one extra student.

```js
students.length <= maxStudents
```

### Fix

```js
students.length >= maxStudents
```

### Result

Courses now enforce the correct maximum number of students.

---

# 7. Incorrect Student Removal Logic

### Issue

Enrollment drop used `splice()` with student ID instead of array index.

```js
course.students.splice(studentId,1)
```

### Fix

The removal now filters by student ID.

```js
course.students = course.students.filter(id => id != studentId)
```

### Result

Students are removed correctly from courses.

---

# 8. Missing Validation for Course Existence

### Issue

The system attempted to access course data even when the course did not exist.

### Fix

```js
if(!course){
   throw new Error("Course not found")
}
```

### Result

The API now returns a proper error instead of crashing.

---

# 9. Route Misuse During API Testing

### Issue

Requests were made to unsupported endpoints such as:

```
POST /enroll/4
```

The API only supports:

```
POST /enroll
```

### Fix

Requests were corrected to send IDs through the request body.

### Result

Endpoints now match the defined routing structure.

---

# Final Outcome

After resolving the above issues:

• Student registration works correctly
• Course creation and deletion work as expected
• Enrollment logic respects course capacity
• Duplicate enrollment is prevented
• Students can be dropped from courses correctly
• The API handles invalid inputs more safely

The system now operates reliably across all core features and demonstrates a stable backend architecture using Node.js and Express.

---
