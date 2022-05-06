/**
 * @generated SignedSource<<a40bcae5ee78645de400007764071f11>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Pasta_Query$variables = {
  countryCode: string;
};
export type Pasta_Query$data = {
  readonly country: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"Flag_icon">;
  };
};
export type Pasta_Query = {
  variables: Pasta_Query$variables;
  response: Pasta_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "countryCode"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "countryCode"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Pasta_Query",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Country",
          "kind": "LinkedField",
          "name": "country",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Flag_icon"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "country"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Pasta_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "beb33c1b9151933897b5650e2355b6f8",
    "id": null,
    "metadata": {},
    "name": "Pasta_Query",
    "operationKind": "query",
    "text": "query Pasta_Query(\n  $countryCode: ID!\n) {\n  country(code: $countryCode) {\n    name\n    ...Flag_icon\n  }\n}\n\nfragment Flag_icon on Country {\n  name\n  code\n}\n"
  }
};
})();

(node as any).hash = "6c1870f079d056adc6042e34163181d5";

export default node;
