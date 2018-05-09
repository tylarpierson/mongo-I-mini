## Back End Journey
* Build a RESTful API using Express and Node.js.
* Persist API Data to a Database. (this week)
* Secure an API.
* Unit Testing.
* Backend Project Week.
## Day 1
* verify mongo installation.
* verify mongo is running (don't stop it until you're done working with it).
* quick intro to databases.
* what is NoSQL and what are document databases.
* why MongoDB.
* working with local instance of MongoDB. DBAAS options.
* a BRIEF look at the mongo shell.
* connecting to MongoDB from our API.
* why mongoose? 
    * what is it? 
    * benefits and drawbacks.
* introduce mongoose Schemas ad Models.
* define a basic document Schema.
* creating documents using mongoose.
* querying all documents using mongoose.
* querying one document by id using mongoose.
* creating new documents.

## Database

Collection of data, organized, easy to get information out of it.

## Query 

Asking questions about our data or executing commands to operate on the stored data.

## DBMS (DB Management System)

Software that provides a way to store/retrieve data.

Client <-> [ API <-> DB Server ]

## NoSQL (Not Only SQL) 
* A type of database 
* key-value pair
* graph
* document <- MongoDB

```js
const user = {
    username: 'admin',
    password: 'secret'
}
```

## MongoDB Server 
* databases (lambda)
    * collections (users, roles, products)
        * documents ({_id: 'qeworkoasjf;lkjerorir0', username: 'admin' })
            * fields: _id, username

Why MongoDB
* popular
* mature
* JS end to end 
* dynamic schemas ( shape of the data [ properties and data types] )

Cons 
* dynamic schemas
* no joins

DBAAS (database as a service)
* offer free 500mb tiers
* MongoDB Atlas
* mlab

Client < JSON > [ API (driver) ] < BSON > [ DB Server ]

## Mongoose 
* wraps the native mongodb driver 
* schemas and models 
* middleware 
* validation

## Workflow

* connect your API to mongo
* define a schema 
* compile the schema into a model 
* create a mongoose document by instatiating (calling new) on a model 
* use the mongoose document to interact with the db document 

## Day 2 
* quick tour of MongoDB Compass
* finish CRUD endpoints
* a look at supported data types
* embedded documents/schemas, AKA sub-documents

## Day 3
* importing data
* modeling relations
    * one to one
    * one to many
    * many to many
* embedded documents/schemas, AKA sub-documents
* data population
* querying data
    * sorting
    * filtering
    * projection

One to One
    * One user has one profile
    * One patient has one medical file
    * One person has one Spouse

One to Many
    * most common type of relation
    * one order has many order lines (items)
    * one city has many citizens

One to Few
    * a book can have more than one author
    * an author can have many books
    * a blog post have a few comments 

Many to Many(few)
    * books and authors
    * users and roles 
    * departments and employees: one to many 

