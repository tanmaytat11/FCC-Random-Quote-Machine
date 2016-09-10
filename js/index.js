function rqm() {
  $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
      headers: {
        "X-Mashape-Key": "YS0uJEOTfemshTUB0oMnPHIRhGSpp16hroZjsn2979AAdcnFnR",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      },
      method: 'POST',
      dataType: 'json',
      success: function(data){
        // console.log(data.quote + " - " + data.author);
        ht = '<blockquote><p class = "text-center"><i class="fa fa-quote-left"></i> ' + data.quote + '</p><footer class="text-right">' + data.author + '</footer></blockquote>';
  // $("#quote").html(ht);
  $("#quote").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#quote').html(ht);
        });
        $('#btn-tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + data.quote + '" ' + data.author));
      }
    });
}

$(document).ready(function() {
  rqm();
  $("#btn_rqm").on("click", function() {
    rqm();
  });
});