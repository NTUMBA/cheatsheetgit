$(document).ready(main);

function main() {
  $('.logo').hide();
  $('.logo').fadeIn(3000);
  $('.cognito').hide();
  $('.cognito').fadeIn(15000);
  $('.detail').hide();
$('.definition').on('click', function() {
$('.detail').toggle();
});
  $('.memento').hide();
$('.conseil').on('click', function() {
$('.memento').toggle();
});
}
