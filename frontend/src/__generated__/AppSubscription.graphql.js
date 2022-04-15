/**
 * @generated SignedSource<<06e2452799d4df0b46e9deb045245aca>>
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
    +title: string,
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
        "name": "title",
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
    "cacheID": "bb962c779d8a2731ea3c1a05e610d169",
    "id": null,
    "metadata": {},
    "name": "AppSubscription",
    "operationKind": "subscription",
    "text": "subscription AppSubscription {\n  postWasAdded {\n    title\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3235d605c4668ce83851200ddc4914ae";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  AppSubscription$variables,
  AppSubscription$data,
>*/);
