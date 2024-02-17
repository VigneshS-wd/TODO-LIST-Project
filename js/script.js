$('ul').on('click','li', function() {
  $(this).toggleClass('gray')
})

$('ul').on('click','span',function(event) {
    $(this).parent().fadeOut(1000,function() {
        $(this).remove()
    })
    event.stopPropagation()
})

$('input').on('keypress',function(event) {
    if (event.which === 13) {
        let newTodo = $(this).val()
        $(this).val('')

        $('ul').append(`<li><span><i class="fa-regular fa-circle-xmark"></i></span> ${newTodo}</li>`)
    }
})
