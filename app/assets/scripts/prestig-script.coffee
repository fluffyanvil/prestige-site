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

window.loadCarousel = ->
  $("#carousel").owlCarousel
    singleItem: true
    autoPlay: true
    navigation: false
    pagination: true
  return

window.loadBrandInfo = (brandName) ->
  $.get 'brands/' + brandName, (json) ->
    $('#brandInfo').owlCarousel
      jsonPath: json
      pagination: false
      items: 3
    $('#brandModal').modal 'show',
      backdrop: 'static'
    return
  return
