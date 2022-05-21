/**
 * @generated SignedSource<<33fc55e1fd270dbc388e0b13965c7d24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductReviewComment_review$data = {
  readonly comment: string;
  readonly User: {
    readonly " $fragmentSpreads": FragmentRefs<"UserName_user">;
  };
  readonly " $fragmentType": "ProductReviewComment_review";
};
export type ProductReviewComment_review$key = {
  readonly " $data"?: ProductReviewComment_review$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductReviewComment_review">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductReviewComment_review",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "comment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Users",
      "kind": "LinkedField",
      "name": "User",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserName_user"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ProductReviewComments",
  "abstractKey": null
};

(node as any).hash = "2a88a6ec6ebda1e01e71e539c5195e28";

export default node;
