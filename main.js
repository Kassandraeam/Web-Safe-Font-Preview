$(document).ready(() => {
  
  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val())
  });

  $('#font').on('change', (event) => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val() //remember that css takes an Object and takes in camelBack fonts. Not .preview or whatevaa. And don't end val() with a semicolon it'll break it.
    })
  });

  $('#weight').on('change', (event) => {
    $('.preview').css({
      fontWeight: $(event.currentTarget).val()
    })
  });

  $('#size').on('keyup', (event) => {
      let fontSize = $(event.currentTarget).val() + 'px';
      $('.preview').css({
        fontSize: fontSize
      })
  })

});
