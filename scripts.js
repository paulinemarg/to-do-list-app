$(document).ready(function () {
  // Add task 
  $('input').change(function () {
    var input = $(this).val();
    $('ul').append('<li>' + input + ' <i class="fa fa-check"></i> <i class="fa fa-trash"></i> </li>');
    $(this).val('');
  });

  // delete task
  $('ul').on('click', '.fa-trash', function () {
    $(this).parent('li').fadeOut(200);
  })

  // Mark as done with line through
  $('ul').on('click', '.fa-check', function () {
    $(this).parent('li').toggleClass('checked');
  })
});
