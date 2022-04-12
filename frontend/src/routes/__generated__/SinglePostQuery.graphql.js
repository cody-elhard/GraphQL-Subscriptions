/**
 * @generated SignedSource<<0196a7d38b9f13835be541b0313f39b0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type SinglePostQuery$variables = {|
  id: string,
|};
export type SinglePostQuery$data = {|
  +post: ?{|
    +id: string,
    +title: ?string,
    +body: ?string,
  |},
|};
export type SinglePostQuery = {|
  variables: SinglePostQuery$variables,
  response: SinglePostQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "post",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SinglePostQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SinglePostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f42673b91c406fec35e73253823d63d3",
    "id": null,
    "metadata": {},
    "name": "SinglePostQuery",
    "operationKind": "query",
    "text": "query SinglePostQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "2147c511c8d549a8590d4e78e2925edd";

module.exports = ((node/*: any*/)/*: Query<
  SinglePostQuery$variables,
  SinglePostQuery$data,
>*/);
