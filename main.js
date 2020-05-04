let myImage = document.querySelector('img')

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/firefox-icon.png.png') {
    myImage.setAttribute('src', 'images/firefox-icon2.png')
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png.png')
  }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

/*function setUserName() {
  let myName = prompt('Please enter your name')

  localStorage.setItem('name', myName)
  myHeading.textContent = 'Mozilla is Cool ' + myName
}
*/
function setUserName() {
  let myName = prompt('Please enter your name')
  if (!myName || myName === null) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Mozilla is Cool, ' + myName
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let StoredName = localStorage.getItem('name')
  myHeading.textContent = 'Mozilla is Cool, ' + StoredName
}

myButton.onclick = function () {
  setUserName()
}
