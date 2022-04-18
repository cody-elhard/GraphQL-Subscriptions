/**
 * @generated SignedSource<<89f86b13c7b8424affcb24d029c4a686>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type AppSubscription$variables = {||};
export type AppSubscription$data = {|
  +postWasAdded: {|
    +id: string,
    +title: ?string,
    +body: ?string,
  |},
|};
export type AppSubscription = {|
  variables: AppSubscription$variables,
  response: AppSubscription$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PostWasAddedPayload",
    "kind": "LinkedField",
    "name": "postWasAdded",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e569a0b06b90b0c0e28cb00b3bf34f23",
    "id": null,
    "metadata": {},
    "name": "AppSubscription",
    "operationKind": "subscription",
    "text": "subscription AppSubscription {\n  postWasAdded {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "df1a4c60dcb5239493ed4b37bd8daf68";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  AppSubscription$variables,
  AppSubscription$data,
>*/);
