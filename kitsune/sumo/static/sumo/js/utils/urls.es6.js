/* Re-export utils from the old-style global `k` library related to urls.
 * Includes sanity checks to make sure the right files were included.
 */

import '../main.js';

const names = [
  'getQueryParamsAsDict',
  'queryParamStringFromDict',
];

for (let name of names) {
  if (window.k[name] === undefined) {
    throw new Error(`Shim validation error: Could not find ``k.${name}`` in global scope.`);
  }
}

export const getQueryParamsAsDict = window.k.getQueryParamsAsDict;
export const queryParamStringFromDict = window.k.queryParamStringFromDict;

export function getPathAsDict(propertyNames) {
  var pathDict = {},
    pathArray = window.location.pathname.split('/').filter(Boolean);

  _.forEach(propertyNames, function(value, index) {
    pathDict[value] = pathArray[index];
  });

  return pathDict;
};

export function pathStringFromDict(pathDict) {
  var pathString = '';

  _.forEach(pathDict, function(value, key) {
    if (value) {
      pathString += '/' + value;
    }
  });

  return pathString;
};
