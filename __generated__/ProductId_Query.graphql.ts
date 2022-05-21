/**
 * @generated SignedSource<<843af08dbd6446d5b73811c6c0c8c243>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProductId_Query$variables = {
  id: string;
};
export type ProductId_Query$data = {
  readonly node: {
    readonly id: string;
    readonly name?: string;
    readonly " $fragmentSpreads": FragmentRefs<"ProductReviews_product">;
  } | null;
};
export type ProductId_Query = {
  variables: ProductId_Query$variables;
  response: ProductId_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v6 = [
  (v5/*: any*/),
  {
    "fields": [
      {
        "kind": "Literal",
        "name": "created_at",
        "value": "asc"
      }
    ],
    "kind": "ObjectValue",
    "name": "order_by"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Users",
  "kind": "LinkedField",
  "name": "User",
  "plural": false,
  "selections": (v8/*: any*/),
  "storageKey": null
},
v10 = [
  (v5/*: any*/)
],
v11 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductId_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ProductReviews_product"
              }
            ],
            "type": "Products",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProductId_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v6/*: any*/),
                "concreteType": "ProductReviewsConnection",
                "kind": "LinkedField",
                "name": "ProductReviews_connection",
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
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductReviews",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Products",
                            "kind": "LinkedField",
                            "name": "Product",
                            "plural": false,
                            "selections": (v8/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v10/*: any*/),
                            "concreteType": "ProductReviewCommentsConnection",
                            "kind": "LinkedField",
                            "name": "ProductReviewComments_connection",
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
                                  (v7/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "ProductReviewComments",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "comment",
                                        "storageKey": null
                                      },
                                      (v9/*: any*/),
                                      (v2/*: any*/),
                                      (v4/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/)
                            ],
                            "storageKey": "ProductReviewComments_connection(first:2)"
                          },
                          {
                            "alias": null,
                            "args": (v10/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "ProductReviewComments_product_ProductReviewComments_connection",
                            "kind": "LinkedHandle",
                            "name": "ProductReviewComments_connection"
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": "ProductReviews_connection(first:2,order_by:{\"created_at\":\"asc\"})"
              },
              {
                "alias": null,
                "args": (v6/*: any*/),
                "filters": [
                  "order_by"
                ],
                "handle": "connection",
                "key": "ProductReviews_product_ProductReviews_connection",
                "kind": "LinkedHandle",
                "name": "ProductReviews_connection"
              }
            ],
            "type": "Products",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c7308e9b427c56351d6e176d1e395720",
    "id": null,
    "metadata": {},
    "name": "ProductId_Query",
    "operationKind": "query",
    "text": "query ProductId_Query(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    id\n    ... on Products {\n      id\n      name\n      ...ProductReviews_product\n    }\n  }\n}\n\nfragment ProductLink_product on Products {\n  id\n  name\n}\n\nfragment ProductReviewComment_review on ProductReviewComments {\n  comment\n  User {\n    ...UserName_user\n    id\n  }\n}\n\nfragment ProductReviewComments_product on ProductReviews {\n  ProductReviewComments_connection(first: 2) {\n    edges {\n      cursor\n      node {\n        ...ProductReviewComment_review\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ProductReview_review on ProductReviews {\n  id\n  score\n  title\n  text\n  User {\n    ...UserName_user\n    id\n  }\n  Product {\n    ...ProductLink_product\n    id\n  }\n  ...ProductReviewComments_product\n}\n\nfragment ProductReviews_product on Products {\n  ProductReviews_connection(first: 2, order_by: {created_at: asc}) {\n    edges {\n      cursor\n      node {\n        ...ProductReview_review\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserName_user on Users {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "e9136e32eb67e523ee8d0ec1f88db2ce";

export default node;
