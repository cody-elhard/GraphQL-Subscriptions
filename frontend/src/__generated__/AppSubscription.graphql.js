/**
 * @generated SignedSource<<e2b5d206f785ec91a63a822546e70818>>
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
  +postWasAddedOrUpdated: {|
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
    "name": "postWasAddedOrUpdated",
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
    "cacheID": "21b55a2cfee6d9e38b0f81993923e653",
    "id": null,
    "metadata": {},
    "name": "AppSubscription",
    "operationKind": "subscription",
    "text": "subscription AppSubscription {\n  postWasAddedOrUpdated {\n    id\n    title\n    body\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "9348ead2d21991fceae6f8f537e9f54b";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  AppSubscription$variables,
  AppSubscription$data,
>*/);
