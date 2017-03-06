import $ from 'jquery';

//Toggle function
export default function toggleFunction(target) {
  $( target + ' a').click(function() {
   if( $(target).hasClass('notActive') ) {
     $(target).removeClass('notActive').addClass('activeToggle');
   } else {
     $(target).removeClass('activeToggle').addClass('notActive');
   }
  });
}
