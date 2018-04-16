var recipes={};
function updateObjectWithKeyAndValue (object,value, key) {
  return Object.assign ({}, object, {[key]:value})
}
function deleteFromObjectByKey (object,key) {
  delete recipes[2]
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}