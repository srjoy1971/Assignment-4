1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll ?
getElementById() selects a single element using an ID.
getElementsByClassName() selects multiple elements using a class name (returns HTMLCollection).
querySelector() selects the first element that matches a CSS selector.
querySelectorAll() selects all matching elements (returns NodeList).

2. How do you create and insert a new element into the DOM?
Use document.createElement() to create an element and appendChild() or append() to insert it.

3. What is Event Bubbling?
Event Bubbling is when an event starts from the target (child) element and moves upward through its parent elements to the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is attaching a single event listener to a parent element to handle events for its child elements.
It is useful because it improves performance and works with dynamically added elements.

5. Difference between preventDefault() and stopPropagation()
preventDefault() stops the browser’s default behavior (like form submission or link navigation).
stopPropagation() stops the event from bubbling up to parent elements.
