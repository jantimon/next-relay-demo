/**
 * @generated SignedSource<<66c62ea4b12543e0230320fa34b7ae7c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Flag_icon$data = {
  readonly name: string;
  readonly code: string;
  readonly " $fragmentType": "Flag_icon";
};
export type Flag_icon$key = {
  readonly " $data"?: Flag_icon$data;
  readonly " $fragmentSpreads": FragmentRefs<"Flag_icon">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Flag_icon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "code",
      "storageKey": null
    }
  ],
  "type": "Country",
  "abstractKey": null
};

(node as any).hash = "4d46dff1d972bae7db8195ef9b88426e";

export default node;
