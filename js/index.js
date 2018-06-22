const offset = 130;
$(".navbar li a").click(function(event) {
      event.preventDefault();
      $($(this).attr("href"))[0].scrollIntoView();
      scrollBy(0, -offset);
    });

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
            $('#myModal').modal('hide');
          }, false);
        });
      }, false);
    })();