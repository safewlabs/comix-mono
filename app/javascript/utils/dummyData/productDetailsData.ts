interface Product {
  product_name: string;
  product_slug: string;
  product_store_name: string;
  issue_cover: string;
}

interface ProductDetails {
  name: string;
  description: string | null;
  page_count: number;
  price: string;
  release_date: string;
  slug: string;
  issue_cover: string;
  collaborations: any[];
  other_products: Product[];
}

interface ProductDetailsResponse {
  data: ProductDetails;
}

export const productDetailsData: ProductDetailsResponse = {
  data: {
    name: 'Endless Night',
    description: null,
    page_count: 30,
    price: '5.0',
    release_date: '2023-08-25T04:08:58.395Z',
    slug: 'endless-night-654c71281041',
    issue_cover:
      '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c963c5ebd5e68a6366d000011fc63e87f4b6f8ad/GAM%20_1%20Cover_DIGITAL.png',
    collaborations: [],
    other_products: [
      {
        product_name: 'In Death Ground',
        product_slug: 'in-death-ground-60ff84b1e758',
        product_store_name: 'Faber and Faber',
        issue_cover:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9cb608f05faacd223aca76520c9b1017a1a402d5/issue-cover.jpg',
      },
      {
        product_name: 'The Golden Bowl',
        product_slug: 'the-golden-bowl-bf796729d68e',
        product_store_name: 'Faber and Faber',
        issue_cover:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--537f5d558623e4f1d271a437b381bb93067202d5/issue-cover.jpg',
      },
      {
        product_name: 'Waiting for the Barbarians',
        product_slug: 'waiting-for-the-barbarians-6c48653095c6',
        product_store_name: 'Faber and Faber',
        issue_cover:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--88b2bbd724d96689698f1e02c2e20fc139ee33e3/issue-cover.jpg',
      },
      {
        product_name: 'A Time to Kill',
        product_slug: 'a-time-to-kill-3b02bfb19566',
        product_store_name: 'Faber and Faber',
        issue_cover:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8db4ebaa7a5730567031ad1cee0c68e15e31c253/issue-cover.jpg',
      },
    ],
  },
};
