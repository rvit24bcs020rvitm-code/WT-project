$(function(){
  // Theme toggle (remembered in browser)
  try{var t=localStorage.getItem('theme');if(t)$('html').attr('data-theme',t);}catch(e){}
  $('#theme').on('click',function(){
    var next=$('html').attr('data-theme')==='dark'?'light':'dark';
    $('html').attr('data-theme',next);
    try{localStorage.setItem('theme',next);}catch(e){}
  });

  // Mobile menu
  $('#menu').on('click',function(){
    var open=$('nav ul').toggleClass('open').hasClass('open');
    $(this).attr('aria-expanded',open);
  });

  // Skill bars animate once when scrolled into view
  var done=false;
  function bars(){
    if(done||!$('.fill').length)return;
    if($(window).scrollTop()+$(window).height()>$('.fill').first().offset().top){
      $('.fill').each(function(){$(this).css('width',$(this).data('level')+'%');});
      done=true;
    }
  }
  $(window).on('scroll resize',bars);bars();

  // Contact form validation
  $('#contact').on('submit',function(e){
    e.preventDefault();
    var ok=true;$('.err').text('');
    var n=$.trim($('#name').val()),m=$.trim($('#email').val()),g=$.trim($('#msg').val());
    if(n.length<2){$('#e-name').text('Enter your name.');ok=false;}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)){$('#e-email').text('Enter a valid email address.');ok=false;}
    if(g.length<10){$('#e-msg').text('Write at least 10 characters.');ok=false;}
    if(ok){$(this).slideUp();$('#ok').fadeIn();}
  });
});