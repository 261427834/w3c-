var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];//将数组中的每个值都放入input变量
  // write your code just below here
 var lower= input.toLowerCase();//将数组里的数值都转为小写
 var firstLetter=lower.slice('0','1');//词组的首字母提取
 var capitalized=lower.replace(firstLetter,firstLetter.toUpperCase());//将首字母大写替换
 var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
