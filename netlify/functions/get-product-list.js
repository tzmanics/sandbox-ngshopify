const { postToShopify } = require("./utils/postToShopify");

exports.handler = async () => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList {
          products(sortKey: TITLE, first: 100) {
            edges {
              node {
                id
                handle
                description
                title
                totalInventory
                variants(first: 5) {
                  edges {
                    node {
                      id
                      title
                      quantityAvailable
                      priceV2 {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }).then((response) => {
      return response.products.edges.map((edge) => {
        const product = edge.node;
        const image = product.images.edges[0].node;
        product.image = image.src;
        return product;
      });
    });

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    };
  } catch (error) {
    console.log(error);
  }
};
