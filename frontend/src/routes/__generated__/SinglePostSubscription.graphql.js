/**
 * @generated SignedSource<<d2d1a575a33b51c444b177844ea40a49>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type SinglePostSubscription$variables = {|
  id: string,
|};
export type SinglePostSubscription$data = {|
  +post: {|
    +id: string,
    +title: ?string,
    +body: ?string,
  |},
|};
export type SinglePostSubscription = {|
  variables: SinglePostSubscription$variables,
  response: SinglePostSubscription$data,
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
    "name": "SinglePostSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SinglePostSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "69d0e9cd8c99c5d7b2ce72d6e725be20",
    "id": null,
    "metadata": {},
    "name": "SinglePostSubscription",
    "operationKind": "subscription",
    "text": "subscription SinglePostSubscription(\n  $id: ID!\n) {\n  post(id: $id) {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "03a79f6ad88459dd55ec8b6e3c3fdf54";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  SinglePostSubscription$variables,
  SinglePostSubscription$data,
>*/);
