// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

//= require semantic-ui
//= require rails-ujs
//= require turbolinks
//= require_tree.
import "@hotwired/turbo-rails"
import "controllers"
import '@doabit/semantic-ui-sass'
import $ from 'jquery'
window.$ = $

Rails.start()
Turbolinks.start()
ActiveStorage.start()

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown')
  .dropdown();
})
