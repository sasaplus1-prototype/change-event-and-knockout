(function(){

  'use strict';

  var aCheckBoxes = document.querySelectorAll('input[name="a"]'),
      bCheckBoxes = document.querySelectorAll('input[name="b"]'),
      i, len;

  for (i = 0, len = aCheckBoxes.length; i < len; ++i) {
    aCheckBoxes[i].setAttribute('data-bind', [
      'checked: aCheckBoxes',
      'event: { click: onClick, change: onChange }'
    ].join(','));
  }
  for (i = 0, len = bCheckBoxes.length; i < len; ++i) {
    bCheckBoxes[i].setAttribute('data-bind', [
      'checked: bCheckBoxes',
      'event: { click: onClickLazy, change: onChangeLazy }'
    ].join(','));
  }

  ko.applyBindings({
    aCheckBoxes: ko.observableArray([]),
    bCheckBoxes: ko.observableArray([]),
    onClick: function(vm, event) {
      console.log('click', vm.aCheckBoxes());
      console.log('checked', event.target.checked);

      return true;
    },
    onChange: function(vm, event) {
      console.log('change', vm.aCheckBoxes());
      console.log('checked', event.target.checked);

      return true;
    },
    onClickLazy: function(vm, event) {
      setTimeout(function() {
        console.log('click', vm.bCheckBoxes());
        console.log('checked', event.target.checked);
      }, 0);

      return true;
    },
    onChangeLazy: function(vm, event) {
      setTimeout(function() {
        console.log('change', vm.bCheckBoxes());
        console.log('checked', event.target.checked);
      }, 0);

      return true;
    }
  });

}());
