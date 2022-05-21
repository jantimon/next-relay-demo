/**
 * @generated SignedSource<<4ead5edb9f58969a9a4e2e8c328a0345>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductReview_review$data = {
  readonly id: string;
  readonly score: number;
  readonly title: string;
  readonly text: string | null;
  readonly User: {
    readonly " $fragmentSpreads": FragmentRefs<"UserName_user">;
  };
  readonly Product: {
    readonly " $fragmentSpreads": FragmentRefs<"ProductLink_product">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ProductReviewComments_product">;
  readonly " $fragmentType": "ProductReview_review";
};
export type ProductReview_review$key = {
  readonly " $data"?: ProductReview_review$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductReview_review">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductReview_review",
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
      "name": "score",
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
      "name": "text",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Products",
      "kind": "LinkedField",
      "name": "Product",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ProductLink_product"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProductReviewComments_product"
    }
  ],
  "type": "ProductReviews",
  "abstractKey": null
};

(node as any).hash = "098e73f7789bbdfb248ed3aa1ec3f6f4";

export default node;
