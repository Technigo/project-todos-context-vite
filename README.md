# Todo - useContext Project
This is a site where you can make a to-do-list, mark tasks as completed and/or remove them.

## The Problem
We quickly decided to have two lists displayed on the site. One for tasks that weren't completed and one for completed tasks. At first we accomplished this by having two different arrays and letting the checkbox add a task to the tasks-done-list and remove it from the tasks-not-done-list. But this lead to problems when we wanted to move things back from the done-list to the not-done-list. It also required us to have almost every function twice. So we decided to put "done" as a property in every task-object and use .filter to display the tasks in two different lists instead.

At the end we had some extra time, so we added functions to set all tasks as completed and to delete all finished tasks. If we were given even more time we would add the option to add a due date to every task and have that date displayed with the task. We would also add localStorage to save information between renderings.

### View it live

https://dulcet-truffle-49ef4e.netlify.app/
