 // A $( document ).ready() block.
$( document ).ready(function() {

    $('.parallax').parallax();
    $('.slider').slider({
        height: 320,
        transition: 500,
        interval: 6000,
    });
    $('.scrollspy').scrollSpy();

 // Configuration Options
  $('#textareaContact').val('');
  $('#textarea1Contact').trigger('autoresize');
  
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { }, // A function to be called when sideNav is opened
        onClose: function(el) {  }, // A function to be called when sideNav is closed
    });
    
    $('.collapsible').collapsible();
    

$('.type-it').typeIt({
     speed: 70,
     lifeLike: true,
     autoStart: true,
     loop: true
})
.tiSettings({speed: 150})
.tiType(' <span class="blue-text darken-1">Powershell</span>.')
.tiPause(500)
.tiDelete(11)
.tiType(' <span class="red-text darken-1">Javascript</span>.')
.tiPause(500)
.tiDelete(0)
.tiType(' <span class="blue-text lighten-1">Py</span><span class="amber-text lighten-1">thon</span>.')
.tiPause(500)
.tiDelete(7)
.tiType(' <span class="white-text">#</span><span class="light-green-text accent-4">Bash</span>.')
.tiPause(700)
.tiDelete(3)
.tiType(' <span class="blue-text lighten-1">VbScript</span>.')
.tiPause(500)
.tiDelete(9)
.tiType(' <span class="grey-text lighten-1">>Batch</span>.')
.tiPause(600)
.tiDelete(0)
.tiType(' <span class="light-blue-text lighten-2">CSS</span>.')
.tiPause(600)
.tiDelete(4)
.tiSettings({speed: 70})
});

