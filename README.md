![Limio Original Gradient](https://user-images.githubusercontent.com/11695131/215449845-28b24f48-f2d9-4bfd-8b40-08e5617336cc.png)

## Limio Code Test

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React, React Hooks with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * React Testing Library for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * Expanding our SDK to allow more flexibility for our customers
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The repository contains some simplified examples of Limio Subscription Commerce components. To run the application run:

`yarn install`
`yarn start:dev`

Some details of the implementation:

`@limio/sdk`: This is a simplified version of the Limio SDK, to find details of what functions are available and what they return please read our external documentation: https://developers.limio.com/limio-sdk/getting-started

`@limio/design-system`: This is using Reactstrap - a React implementation of Bootstrap. For all available components and how to use them please read the documentation here: https://reactstrap.github.io/?path=/story/home-installation--page

### Questions

Please answer the following questions:
    
1. The code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

2. Thinking about a production ready app, what do you think is missing from all the examples?

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

4. Are you familiar with useEffect React Hook? When would you use it? What are some disadvantages of its overuse? 

### Coding Challenges

To run the app simply, 

1. Update the page to add a subscription to a Basket:
  * Adding a subscription should also calculate the current total of the cart
  * If you are familiar with Redux, you can use that to control the state
2. Update the page so that the Basket button opens up a Basket and displays some details of the current Order:
  * Price
  * Description
  * Basket Total
  * Ability to remove that item from Basket
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





