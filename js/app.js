$(function(){
    const items = $('.nav-item') ;
      items.on('click', function(){
          items.removeClass('active') ;
          $(this).addClass('active') ;
    });
    
    $('[data-nav-link]').on('click', function(){
        items.removeClass('active') ;
        items.first().addClass('active') ;
      })
    });