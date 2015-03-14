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

window.sendComment = ->
  $.post 'comments',
    name:   do($ '#nameCom').val
    phone: do($ '#phoneCom').val
    email: do($ '#emailCom').val
    message: do($ '#messageCom').val
    ()->
      alert "Comment has been sent!"
      return
  .fail ->
    alert "Error!"
    return
  return
