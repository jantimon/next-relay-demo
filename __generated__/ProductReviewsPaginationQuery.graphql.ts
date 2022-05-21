/**
 * @generated SignedSource<<acd314c3790d37662bf2df5f1d3a696d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type order_by = "asc" | "asc_nulls_first" | "asc_nulls_last" | "desc" | "desc_nulls_first" | "desc_nulls_last" | "%future added value";
export type ProductReviewsPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
  sort?: order_by | null;
  id: string;
};
export type ProductReviewsPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"ProductReviews_product">;
  } | null;
};
export type ProductReviewsPaginationQuery = {
  variables: ProductReviewsPaginationQuery$variables;
  response: ProductReviewsPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": 2,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": "asc",
  "kind": "LocalArgument",
  "name": "sort"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v6 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  (v5/*: any*/),
  (v6/*: any*/),
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v11 = [
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Users",
  "kind": "LinkedField",
  "name": "User",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": null
},
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  }
],
v14 = {
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProductReviewsPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "Variable",
                "name": "sort",
                "variableName": "sort"
              }
            ],
            "kind": "FragmentSpread",
            "name": "ProductReviews_product"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "ProductReviewsPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v9/*: any*/),
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
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProductReviews",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v8/*: any*/),
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
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Products",
                            "kind": "LinkedField",
                            "name": "Product",
                            "plural": false,
                            "selections": (v11/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
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
                                  (v10/*: any*/),
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
                                      (v12/*: any*/),
                                      (v8/*: any*/),
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v14/*: any*/)
                            ],
                            "storageKey": "ProductReviewComments_connection(first:2)"
                          },
                          {
                            "alias": null,
                            "args": (v13/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "ProductReviewComments_product_ProductReviewComments_connection",
                            "kind": "LinkedHandle",
                            "name": "ProductReviewComments_connection"
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v14/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
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
    "cacheID": "811267256aa4ebdefc4e68caa7c51587",
    "id": null,
    "metadata": {},
    "name": "ProductReviewsPaginationQuery",
    "operationKind": "query",
    "text": "query ProductReviewsPaginationQuery(\n  $after: String = null\n  $first: Int = 2\n  $sort: order_by = asc\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...ProductReviews_product_dWkdd\n    id\n  }\n}\n\nfragment ProductLink_product on Products {\n  id\n  name\n}\n\nfragment ProductReviewComment_review on ProductReviewComments {\n  comment\n  User {\n    ...UserName_user\n    id\n  }\n}\n\nfragment ProductReviewComments_product on ProductReviews {\n  ProductReviewComments_connection(first: 2) {\n    edges {\n      cursor\n      node {\n        ...ProductReviewComment_review\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ProductReview_review on ProductReviews {\n  id\n  score\n  title\n  text\n  User {\n    ...UserName_user\n    id\n  }\n  Product {\n    ...ProductLink_product\n    id\n  }\n  ...ProductReviewComments_product\n}\n\nfragment ProductReviews_product_dWkdd on Products {\n  ProductReviews_connection(first: $first, after: $after, order_by: {created_at: $sort}) {\n    edges {\n      cursor\n      node {\n        ...ProductReview_review\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment UserName_user on Users {\n  id\n  name\n}\n"
  }
};
})();

(node as any).hash = "5ef5091f5fd0073f41205984e832ef96";

export default node;
