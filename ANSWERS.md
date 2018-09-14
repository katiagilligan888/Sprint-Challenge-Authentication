<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Sessions are used to persist data across requests. When a user is using a website that requires authentication, they prefer to stay logged in when nagivating the different pages of the site. The experiance of the user would be very jarring if they had to re-enter the credentials on every new request that was sent to the server. Sessions use cookies onn every request to persist the data. 

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt is a library takes in a password as a parameter and uses a unique hashing function, implements salting, and adds accumulating hashing rounds. In order for the attacker to access the password, they would need to access the hash, know the hashing function, and know exactly how many rounds it took to generate the hash. 

3. What does bcrypt do to slow down attackers?

Bcrypt allows you to specify how many rounds of hashing should occur. This slows down the attacker because they do not know how many rounds were used. 

4. What are the three parts of the JSON Web Token?

The 3 parts of a JSON Web Token include: the Header, the Payload, and the Signiture. The Header consists of the type of token and the hashing algorithm being used. The Payload contains information about the user. The Header and the Payload are public, and can be easily identified, so no secure information should be used in the header and payload. The Signiture contains a secret, that is used to identify the user. If at any point, the token is tampered with, it will become invalid. 
