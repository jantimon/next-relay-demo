/**
 * @generated SignedSource<<3e1962da3ce9a27da30d10b95e05587b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContinentCode_Query$variables = {
  continentCode: string;
};
export type ContinentCode_Query$data = {
  readonly continent: {
    readonly name: string;
    readonly countries: ReadonlyArray<{
      readonly code: string;
      readonly " $fragmentSpreads": FragmentRefs<"Flag_icon">;
    }>;
  };
} | null;
export type ContinentCode_Query = {
  variables: ContinentCode_Query$variables;
  response: ContinentCode_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "continentCode"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "continentCode"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContinentCode_Query",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Continent",
          "kind": "LinkedField",
          "name": "continent",
          "plural": false,
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Country",
              "kind": "LinkedField",
              "name": "countries",
              "plural": true,
              "selections": [
                (v3/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Flag_icon"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        "action": "NONE",
        "path": "continent"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContinentCode_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Continent",
        "kind": "LinkedField",
        "name": "continent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Country",
            "kind": "LinkedField",
            "name": "countries",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d19079438930530866537694d7db47b5",
    "id": null,
    "metadata": {},
    "name": "ContinentCode_Query",
    "operationKind": "query",
    "text": "query ContinentCode_Query(\n  $continentCode: ID!\n) {\n  continent(code: $continentCode) {\n    name\n    countries {\n      code\n      ...Flag_icon\n    }\n  }\n}\n\nfragment Flag_icon on Country {\n  name\n  code\n}\n"
  }
};
})();

(node as any).hash = "70ca24296ff1488162ebd8fd7526fead";

export default node;
