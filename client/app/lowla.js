angular
  .module('isa')
  .config(configLowla);

configLowla.$inject = ['$lowlaProvider'];
function configLowla($lowlaProvider) {
  $lowlaProvider.setLowlaUrl('http://localhost:3000');
}
