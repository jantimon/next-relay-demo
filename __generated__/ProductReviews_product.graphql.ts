/**
 * @generated SignedSource<<4f4046625317a70e160fe9ba53e1e790>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductReviews_product$data = {
  readonly ProductReviews_connection: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"ProductReview_review">;
      };
    }>;
  };
  readonly id: string;
  readonly " $fragmentType": "ProductReviews_product";
};
export type ProductReviews_product$key = {
  readonly " $data"?: ProductReviews_product$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProductReviews_product">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "ProductReviews_connection"
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
    },
    {
      "defaultValue": "asc",
      "kind": "LocalArgument",
      "name": "sort"
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
      "operation": require('./ProductReviewsPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ProductReviews_product",
  "selections": [
    {
      "alias": "ProductReviews_connection",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "created_at",
              "variableName": "sort"
            }
          ],
          "kind": "ObjectValue",
          "name": "order_by"
        }
      ],
      "concreteType": "ProductReviewsConnection",
      "kind": "LinkedField",
      "name": "__ProductReviews_product_ProductReviews_connection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ProductReviewsEdge",
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
              "concreteType": "ProductReviews",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ProductReview_review"
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
  "type": "Products",
  "abstractKey": null
};
})();

(node as any).hash = "5ef5091f5fd0073f41205984e832ef96";

export default node;
