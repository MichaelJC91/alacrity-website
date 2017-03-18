import $ from 'jquery';

export default () => {
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
  });
}
