# This is a small project for npm publishment practice

## Purpose of module:
Used to create a dropdown menu, image slider, and many more later

## Usage

### Install
```
npm install quickitrx
```
### Usage
```
import interactiveModule from 'quickitrx/src/interactiveModule';

```

```
__dropdownMenu
let dropdown = interactiveModule.dropdownMenu(headerObj, itemObjArray);

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
```
__imgSlider
let imgSlider = imgSlider(imageUrlArray, widthPx = 300, timeoutMs = 1000);

let imgSlider = imgSlider([
  url1, url2, url3, ...
], 300, 1000);
let imgSlider = imgSlider(imageUrlArray, width = 300, timeoutMs = 1000);
navbarNode.appenchild(imgSlider);

```
### Note that: if you dont spicify headerOb or/and itemObjArray, default values will be used.