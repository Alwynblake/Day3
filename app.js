"use strict"; 
console.log('checking user userName before prompt', userName);
var userName = prompt('What is your name?');
alert('Thanks for visiting my site ' + userName);
console.log('checking userName after prompt', userName);

alert('Please respond to the following questions with Y/y/yes/YES or no...');

var likeDogs = prompt('Do I like dogs?').toUpperCase();
console.log ('checking userName: ', userName);
if (likeDogs === 'Y' || likeDogs === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
} else {
alert('Sorry, ' + userName + ' you were wrong.')


}
var likeLearning = prompt('Do I like to learn?').toUpperCase();
console.log ('Do I like learning?', likeLearning);
if (likeLearning === 'Y' || likeLearning === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')

}

     var likeMovies = prompt('Do I like movies?').toUpperCase();
     console.log ('Do I like movies?', likeMovies);  
if (likeMovies === 'Y' || likeMovies === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')

}   

    var likeFood = prompt('Do I like to eat good food?').toUpperCase();
    console.log ('Do I like food?', likeFood);  
if (likeFood === 'Y' || likeFood === 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')
}

    var likeIcecream = prompt('Do I like to ice cream?').toUpperCase();
    console.log ('Do I like ice cream?', likeIcecream);  
if (likeIcecream === 'Y' || likeIcecream=== 'YES') {
    alert('Congrats! ' + userName + ', you know me extremely well.')
}else {
    alert('Sorry, ' + userName + ' you were wrong.')
}