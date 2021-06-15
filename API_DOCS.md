## API Documentation 
## @desc url/api/

# Authentication     /auth
## Student Signup @POST /signup
```
Request {
    fullName: String,
    phone: Number,
    email?: String,
    address?: String,
    password: String
}

Response {
    message: "Signup Success! Please Login.",
}

```
## Student Signin @POST /student/signin
## Admin Signin   @POST /admin/signin
```
Request {
    email: String,
    password: String
}

Response {
    token: JWT,
    user: UserModel
}

```
## Signout @GET /signout
```
Response {
    message: "Signout success",
  }

```
## Signout @GET /signout
```
Response {
    message: "Signout success",
  }

```

# Tests     /test

## Create Test @POST /
```
Request {
    name: String,
    description?: String,
    totalMarks: Number,
    passMarks: Number,
}

Response {
    name: String,
    description?: String,
    totalMarks: Number,
    passMarks: Number,
}
```

## Get Tests @GET /
```
Response {
    [   
        {
            name: String,
            description?: String,
            totalMarks: Number,
            passMarks: Number
        }
    ]
}
```

## Delete Tests @DELETE /:TestId
```
Response OK
```
## Get Test Questions @DELETE /:TestId/questions
```
Response {
    [
        Answers: [
            {
                QuestionId: Number,
                answer: String,
                correct: Boolean,
                createdAt: DATE,
                deletedAt:, DATE | NULL,
                id: Number,
                updatedAt: DATE
            }
        ],
        TestId: Number,
        createdAt: DATE,
        deletedAt: DATE | NULL,
        id: Number,
        marks: Number,
        question: STRING,
        updatedAt: DATE
    ]
}
```

# Question     /question

## Create Question @POST /
```
Request {
    testId: Number,
    questions: [
        {
            question: String,
            marks: Number
            answers: [
                {
                    answer: String,
                    correct: Boolean
                }
            ]
        }
    ]
}

Response OK
```


# Results     /results

## Get Results @GET /
```
Response {
    [
        {
            Test {
                id: Number,
                name: String,
                passMarks: Number,
                totalMarks: Number
            }
            TestId: Number,
            User: {
                id: Number, 
                fullName: String
            }
        id: Number
        UserId: Number
        obtainedMarks: String | Number
        take_count: Number
        }
    ]
}
```

## Get MyResults @GET /
```
Response {
    [
        {
            Test {
                id: Number,
                name: String,
                passMarks: Number,
                totalMarks: Number
            }
            TestId: Number,
            id: Number
            obtainedMarks: String | Number
            take_count: Number
        }
    ]
}
```

## Create Results @POST /
```
Response {
    [
        {
            marks: Number,
            correct: Boolean,
            chosen: Boolean,
            AnswerId: Number,
            QuestionId: Number,
            TestId: Number,
        }
    ]
}



