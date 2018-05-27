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
  $('.pic').hide();
  $('.schema').on('click', function() {
  $('.pic').toggle();
  });
  $('.memento').hide();
  $('.conseil').on('click', function() {
  $('.memento').toggle();
  });
  $('.sourceListe').hide();
  $('.sources').on('click', function() {
  $('.sourceListe').toggle();
  });
  $('.ordre_listeUpdate').hide();
  $('.enTeteUpdate').on('click', function() {
  $('.ordre_listeUpdate').toggle();
  });
  $('.ordre_listeFusion').hide();
  $('.enTeteFusion').on('click', function() {
  $('.ordre_listeFusion').toggle();
  });
  $('.ordre_listeCreate').hide();
  $('.enTetecreate').on('click', function() {
  $('.ordre_listeCreate').toggle();
  });
  $('.ordre_listeCheck').hide();
  $('.enTeteCheck').on('click', function() {
  $('.ordre_listeCheck').toggle();
  });
  $('.ordre_listeAnnulation').hide();
  $('.enTeteAnnulation').on('click', function() {
  $('.ordre_listeAnnulation').toggle();
  });
  $('.ordre_listeLog').hide();
  $('.enTeteLog').on('click', function() {
  $('.ordre_listeLog').toggle();
  });
  $('.ordre_listeBranche').hide();
  $('.enTeteBranche').on('click', function() {
  $('.ordre_listeBranche').toggle();
  });
  $('.ordre_listeBase').hide();
  $('.enTeteBase').on('click', function() {
  $('.ordre_listeBase').toggle();
  });

}
