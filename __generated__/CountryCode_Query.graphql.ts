/**
 * @generated SignedSource<<db6c5421bd32a1bc16d1f6de27e5a21a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CountryCode_Query$variables = {
  countryCode: string;
};
export type CountryCode_Query$data = {
  readonly country: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"Flag_icon">;
  };
} | null;
export type CountryCode_Query = {
  variables: CountryCode_Query$variables;
  response: CountryCode_Query$data;
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
    "name": "CountryCode_Query",
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
        "action": "NONE",
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
    "name": "CountryCode_Query",
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
    "cacheID": "2a55ebe9a93a506268a247d3d75b00b6",
    "id": null,
    "metadata": {},
    "name": "CountryCode_Query",
    "operationKind": "query",
    "text": "query CountryCode_Query(\n  $countryCode: ID!\n) {\n  country(code: $countryCode) {\n    name\n    ...Flag_icon\n  }\n}\n\nfragment Flag_icon on Country {\n  name\n  code\n}\n"
  }
};
})();

(node as any).hash = "b2a6ce0bc70c56897aa4f4bd997895cb";

export default node;
