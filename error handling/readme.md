# Error Handling

## 1. Not Found Response

create an app.all(\*,middleware)

## GLOBAL MIDDLEWARE

a central place to handle all errors

achived by- a middleware which accepts err first in call

Error at someplace will automatically search for this middleware

app.use(err,req,res,next)=>{

}

next(err): - required to skip all stack middlewares and search for global error middleware

create errors and throw them from various places will get caught by global middleware
