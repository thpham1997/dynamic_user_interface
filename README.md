# This is a small project for npm publishment practice

## Purpose of module:
Used to create a dropdown menu

## Usage

Install
```
npm install dropdownMenu --save
```
Usage
```
let dropdown = dropdownMenu(headerObj, itemObjArray);
```

```
let dropdown = dropdownMenu({
  {header: 'This is your dropdown header'},
  [{
    link: 'http://www.google.com',
    text: 'Google Link'
  },
  {
    link: 'http://www.github.com',
    text: 'GitHub Link'
  },...]
})

navbarNode.appenchild(dropdown);
```

### Note that: if you dont spicify headerOb or/and itemObjArray, default values will be used.