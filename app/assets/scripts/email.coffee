window.sendOrder = ->
  $.post 'orders',
    name:   do($ '#name').val
    phone: do($ '#phone').val
    email: do($ '#email').val
    message: do($ '#message').val
    ()->
      alert "Order has been sent!"
      return
  .fail ->
    alert "Error!"
    return
  return

