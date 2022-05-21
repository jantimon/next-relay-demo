/**
 * @generated SignedSource<<b7c56dbc0f19fa2740ebef2f776b95a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductLink_product$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "ProductLink_product";
};
export type ProductLink_product$key = {
  readonly " $data"?: ProductLink_product$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductLink_product">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductLink_product",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Products",
  "abstractKey": null
};

(node as any).hash = "120d34ad05f9afb898d61780e55d295f";

export default node;
