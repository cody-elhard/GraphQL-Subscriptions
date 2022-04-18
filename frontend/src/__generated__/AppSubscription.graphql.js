/**
 * @generated SignedSource<<2003afc6864e2994f327936ade169097>>
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostWasAddedPayload",
        "kind": "LinkedField",
        "name": "postWasAdded",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PostWasAddedPayload",
        "kind": "LinkedField",
        "name": "postWasAdded",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "604f590c8491724fc8f81d50fd21bff0",
    "id": null,
    "metadata": {},
    "name": "AppSubscription",
    "operationKind": "subscription",
    "text": "subscription AppSubscription {\n  postWasAdded {\n    title\n    body\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "4325fed713f69034f6ec26612d0c641e";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  AppSubscription$variables,
  AppSubscription$data,
>*/);
