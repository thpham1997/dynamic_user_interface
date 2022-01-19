# This is a small project for npm publishment practice

## Purpose of module:
Used to create a dropdown menu, and many more later

## Usage

Install
```
npm install quickitrx
```
Usage
```
import interactiveModule from 'quickitrx/src/interactiveModule';

let dropdown = interactiveModule.dropdownMenu(headerObj, itemObjArray);
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