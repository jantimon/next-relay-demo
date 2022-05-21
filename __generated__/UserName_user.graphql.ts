/**
 * @generated SignedSource<<48297247e479a509ece4259f2cc56ee5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserName_user$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "UserName_user";
};
export type UserName_user$key = {
  readonly " $data"?: UserName_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserName_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserName_user",
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
  "type": "Users",
  "abstractKey": null
};

(node as any).hash = "d88bc81fb0c928dea7215d53f1e640a9";

export default node;
