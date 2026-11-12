function init(){
//add your javascrip between these two lines of code

  var input = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var output = document.getElementById('textoutput');
  var myName = 'Mustafa Aziz';

  button.addEventListener('click', function(){
    var message = input.value;

    // 1. Alert with "name: message"
    alert(myName + ': ' + message);

    // 2. h2 shows exactly the text box contents (no name)
    output.textContent = message;
  });

}
window.addEventListener('load', init);
