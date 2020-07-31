#index.html 

<p> In index html we created the basic template of what the quiz is supposed to look like. 

We start by creating a container and populate it with ids, classes and buttons. 
The main page contains a header and two buttons (start and high score). 
The quiz contains timer, questions and buttons for answers. 
This quiz is a multiple choice quiz so we have added 4 buttons each with relative id and value attached to it. 
Created containers that store high scores. 
Created containers that when quiz ends gives us the option to replay the quiz or check the high scores. 
Some of the functions created in script.js will be attached at index.html. </p>

#script.js

<p> We start by grabbing all of the elements from the html file and creating variables that can be referenced to in the JavaScript file. 
Created an array of objects that store the actual questions and answers for the quiz. 
Then we create some global variables that will be used later on in the quiz. 
We create a function that generates the quiz and takes into consideration a few factors such as the current question number and whether it is the last question or not. This was achieved by assigning two variables corresponding values. 
We create another function that starts the quiz. In this quiz we set the timer to decrease by 1 second. This was achieved mainly by the built in setInterval and clearInterval function.
We create a basic function that shows the user's high score when the quiz is ended. 
We add an event to the submit button that asks the user to enter their intials to store their scores inside of the local storage. 
We check that the user doesn't leave the space blank or enter numericals. 
If the user enters string we get store their initials inside of a local storage. 
We then create functions that let us replay the quiz or clear the leader board. 
At the end is when we call the function to actually start the quiz


#style.css
In style.css we added necessary style elements that made the quiz more aesthetically appealing! 


