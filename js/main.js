$(document).ready(main);

function main() {
  $('.logo').hide();
  $('.logo').fadeIn(2000);
  $('.cognito').hide();
  $('.cognito').fadeIn(10000);
  $('.detail').hide();
$('.definition').on('click', function() {
$('.detail').toggle();
});
  $('.memento').hide();
$('.conseil').on('click', function() {
$('.memento').toggle();
});
}
