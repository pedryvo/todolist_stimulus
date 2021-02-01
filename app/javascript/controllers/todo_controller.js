// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ 'toggle', 'submitForm' ]

  toggle() {
    Rails.ajax({
      type: "put",
      url: `/todos/${this.toggleTarget.id}/toggle`,
      success: function(res){
        
      }
    })
  }

  submitForm() {
    Rails.fire(this.element, 'submit');
    /* Rails.ajax({
      type: "POST", 
      url: "/things",
      data: mydata,
      success: function(repsonse){...},
      error: function(repsonse){...}
    }) */
  }
}
