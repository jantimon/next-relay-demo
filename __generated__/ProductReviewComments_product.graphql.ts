/**
 * @generated SignedSource<<2218e1a7235a013fc3a4292490055cdf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductReviewComments_product$data = {
  readonly ProductReviewComments_connection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"ProductReviewComment_review">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "ProductReviewComments_product";
};
export type ProductReviewComments_product$key = {
  readonly " $data"?: ProductReviewComments_product$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductReviewComments_product">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "ProductReviewComments_connection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 2,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ProductReviewCommentsPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ProductReviewComments_product",
  "selections": [
    {
      "alias": "ProductReviewComments_connection",
      "args": null,
      "concreteType": "ProductReviewCommentsConnection",
      "kind": "LinkedField",
      "name": "__ProductReviewComments_product_ProductReviewComments_connection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ProductReviewCommentsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ProductReviewComments",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ProductReviewComment_review"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "ProductReviews",
  "abstractKey": null
};
})();

(node as any).hash = "b64bfd3b8c2a33d52ea3a3922fee4e5d";

export default node;
