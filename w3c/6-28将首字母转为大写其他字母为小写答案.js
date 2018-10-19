var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  var lower = input.toLowerCase();
  var firstLetter = lower.slice(0,1);
  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  var result = capitalized;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);

}
var a,b;

a=parseFloat("4444444");
console.log(a);
