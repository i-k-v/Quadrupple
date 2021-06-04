# Quadrupple
Just learning how to use Docker + Git + Jenkins + Postman

Plan:
  1. Do a simple HTML page with some JS scripts, input and output fields.
  2. Move this page to Docker. (well that was a fail step, I`ve just passed the site to nginx directly :) )
  3. Make a server in the Docker container.
  4. Make a database in the Docker container.
  5. Now we have 3 containers. One with the page the second with the server and the third one with DB. Those containers are connected by Docker Compose.
  6. Test that whole trio is working (data can be inputed, saved and shown).
  7. Do some Jenkins magic. Integrate Docker into Jenkins. The builds must be automatically build for example, every 10 minutes.
  8. Make some "good" tests in Postman in order to pass them.
  9. Integrate Postman tests into Jenkins with the help of Newman. Tests must be done for example, every 5 minutes.
  11. Make some "bad" tests in order to fail them. For each 3 "good" tests there must be 1 "bad".
  10. Now make the Jenkins to do builds only in case the tests are succesfully passed, and warn you in case of a failed one.
  
  
  
  I`ll try to not to forget to do some notes right here about each step.
  
NOTES:
STEP 1.
  In order to make the learning process to be more interesting and fun I`ve made simple page with 3 input fields: 
                - name;
                - alignment;
                - reason.
  The output field shows a pregenerated "introduction story". For example if you entered "John" + "Good" + "Cookies" the output will show: 
									"The Good John who fight for cookies!"
