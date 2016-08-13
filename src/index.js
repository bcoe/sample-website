var $ = require('jquery')
var uuid = require('uuid')

$(document).ready(function () {
  $('#message').text(uuid.v4())
})
