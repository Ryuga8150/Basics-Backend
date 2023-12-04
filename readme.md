# Basics of Backend

## PUG

Sample
<Code>
html
head
title Natours
</Code>

### Importing style sheets

<Code></Code>
link(rel='stylesheet' href='css/style.css')
use single quotes, attributes written in brackets

each link each request
express.static makes to look in public folder

### Passing data

<Code>
app.get("/", (req, res) => {
  res.status(200).render("base",{
  tour:"The Forest hiker",
  user:"Ryuga"
});
// will look in folder we specified above
});
</Code>

### Comment in Pug

// in html
//- in pug

### JavaScript in Pug

title Natours #{tour}

h2=user.toUpperCase()

unbuffered code

- const x=64
  h3=x

### Specifying classes

1.In attributes 2. header.header_class 3. For div : .header_class

li
a
to avoid using new line syntax: li: a

### Including files

### Exntending files

only one file can be extended from a file
extends will overwrite the block
these files imagine will contain the whole file with their specifid blocks
thus variables passed to these will be for whole base file

extend blocks by appending

just write block append block_name

### Including files

### Including images

begin with / to start from relative url
relative means from root

### using mixins

mixins are like functions

calling with +prefix in front of function call

### injecting map

by exposing location in html
thus reading location from html in js
