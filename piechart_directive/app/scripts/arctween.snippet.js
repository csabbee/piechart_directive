/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*global d3*/
function arcTween(a) {
  //see: http://bl.ocks.org/mbstock/1346410
  var i = d3.interpolate(this._current, a);
  this._crrent = i(0);
  return function(t) {
    return arc(i(t));
  };
}


