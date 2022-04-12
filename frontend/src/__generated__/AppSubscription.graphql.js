/**
 * @generated SignedSource<<2321aa195e9ec7e58ff0c1b2d33ad22e>>
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
  +posts: {|
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
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
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
    "cacheID": "807a78fc93dd61729715a9851814d063",
    "id": null,
    "metadata": {},
    "name": "AppSubscription",
    "operationKind": "subscription",
    "text": "subscription AppSubscription {\n  posts {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3dae742c4afb692963e691f1565e64e2";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  AppSubscription$variables,
  AppSubscription$data,
>*/);
