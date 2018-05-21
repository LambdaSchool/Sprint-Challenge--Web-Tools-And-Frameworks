// form validation code
(function() {
  'use strict';
  window.addEventListener(
    'load',
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              $('.badForm').modal('show');
            }
            if (form.checkValidity() === true) {
              event.preventDefault();
              $('.launchModal').modal('show');
              // refresh the page when close the modal
              $('.needs-validation').on('hidden.bs.modal', function() {
                location.reload();
              });
            }
            form.classList.add('was-validated');
          },
          false,
        );
      });
    },
    false,
  );
})();
