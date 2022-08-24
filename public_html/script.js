$(document).ready(function(){
  $('#contact').validate({
    debug: true,
    errorClass: 'alert alert-danger',
    ErrorLabelContainer: '#output-area',
    errorElement: 'div',
    //rules to define good and bad inputs
    // each rule start with the form input element's NAME attribute
    rules: {
      name: {
        required: true
      },
      email: {
        email: true,
        required:true
      },
      message: {
        required: true,
        maxLength: 2000
      }
    },
    messages: {
      name: {
        required: 'Name is required.'
      },
      email: {
        email:'please provide a valid email',
        required: 'Email is required.'
      },
      message: {
        required: 'A message is required.',
        maxLength: 'Message must be 2000 characters or less.'
      }
    },
    submitHandler: (form) => {
      $('#contact').ajaxSubmit({
        type: 'POST',
        url: $('conact').attr('action'),
        success: (ajaxOutput) => {
          $('#output-area').css('display','')
          $('#output-area').html(ajaxOutput)

          if($('.alert-success') >= 1 ){
            $('#contact')[0].reset()
          }
        }
      })
    }
  })
})
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})