export interface Description {
  id: number;
  name: string;
  body: string;
  record_type: string;
  record_id: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  name: string;
  slug: string;
  price: string;
  store_name: string;
  store_slug: string;
  avatar: string;
}

export interface StorePageData {
  name: string;
  description: Description;
  cover_image: string;
  display_image: string;
  products: Product[];
}

export interface StorePageResponse {
  data: StorePageData;
}

export const storePageData: StorePageResponse = {
  data: {
    name: 'Markosia Enterprises',
    description: {
      id: 65,
      name: 'description',
      body: '<div>Markosia was established in 2005 and has become one of the UK’s leading Independent publishers, particularly in the graphic novel field. The publisher has gained a reputation for producing a diverse range of comic books, graphic novels, children’s picture books and prose novels that cover all genres, with the highest possible production values.</div>',
      record_type: 'Store',
      record_id: 64,
      created_at: '2024-10-21T10:44:23.754Z',
      updated_at: '2024-10-21T10:44:23.754Z',
    },
    cover_image:
      '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8cdcebdf6667bee1d214651e635dda514d62ceb3/1500x500-2.jpeg',
    display_image:
      '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcndGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e21f3339e0e760e8474898a0f31675478222b1bf/h75yLzI2_400x400.png',
    products: [
      {
        name: 'Gods Among Men #1',
        slug: 'gods-among-men-1-b99f79af9f55',
        price: '$4.99',
        store_name: 'Cynation Comics',
        store_slug: 'Cynation Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbGdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c963c5ebd5e68a6366d000011fc63e87f4b6f8ad/GAM%20_1%20Cover_DIGITAL.png',
      },
      {
        name: 'Lizards ( trade )',
        slug: 'lizards-trade-ae87fe6552e4',
        price: '$10.00',
        store_name: 'Die Bold Comics',
        store_slug: 'Die Bold Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--58306a03ef53b56b6f177620276667d9f2f502b2/Lizards%20trade.jpg',
      },
      {
        name: 'SuccuBUSTED! #1 Jackson Devils',
        slug: 'succubusted-1-jackson-devils-92ec80c61465',
        price: '$5.00',
        store_name: 'Astral Ticket Comics ',
        store_slug: 'Astral Ticket Comics ',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUFGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4766a07e021ff01ce52a8e397163018664511e26/CVR%20A%20TD%20JPG.jpg',
      },
      {
        name: 'Mr. Disaster #2',
        slug: 'mr-disaster-2-febe741b82d5',
        price: '$2.99',
        store_name: 'Junction City Comics',
        store_slug: 'Junction City Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcnNFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a72632e25946e561382f4b2f1fbca068e6820b6/0A_frontcover_disaster_issue_2.jpg',
      },
      {
        name: 'Stay Cool',
        slug: 'stay-cool-a32bd3ab5f3e',
        price: '$4.99',
        store_name: 'Pesto Comics',
        store_slug: 'Pesto Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjhDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3de9d8247eb5a110c0db5f3c2d2b70c15ea1f0f8/coverA_lowRes_v1.png',
      },
      {
        name: 'Detective Honeybear',
        slug: 'detective-honeybear-928b0eb641d9',
        price: '$4.99',
        store_name: 'Detective Honeybear Press',
        store_slug: 'Detective Honeybear Press',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5abd79467f15441533dbbcacbf24da44858434e4/Detective-Honeybear.jpg',
      },
      {
        name: 'Stagnant Waters - Issue One: A Matter of Fate',
        slug: 'stagnant-waters-issue-one-a-matter-of-fate-162452ec7a74',
        price: '$5.99',
        store_name: 'A Gift Tomorrow Publishing',
        store_slug: 'A Gift Tomorrow Publishing',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYjg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--749af2dab701b838285be7de53d85b89eee21831/Stagnant-waters.jpeg',
      },
      {
        name: 'TIGHTS Issue #1',
        slug: 'tights-issue-1-9ce16d058c0c',
        price: '$4.00',
        store_name: 'TIGHTS Comics',
        store_slug: 'TIGHTS Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdVVDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4493d5494e8b6406631bb9b6b23d4e5571e5197f/Screenshot%202024-01-19%20at%208.54.35%E2%80%AFAM.png',
      },
      {
        name: 'Home Free #1: Out of the Fog',
        slug: 'home-free-out-of-the-fog-ce15f1f73e5a',
        price: '$4.00',
        store_name: 'Coffee Time Comix',
        store_slug: 'Coffee Time Comix',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcllCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e816d787d1336ab059bd5ff1f3bb94c56ab4c71d/image7.jpg',
      },
      {
        name: 'McBlack One Shot',
        slug: 'mcblack-one-shot-f9468cfc6860',
        price: '$5.00',
        store_name: 'Blackglass Press',
        store_slug: 'Blackglass Press',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDBHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d74121ff5de7e2553c5a9a31e87624ec6adb5b4b/McB_OS_Cover.jpg',
      },
      {
        name: 'SuccuBUSTED! #3 Full Frontal Fetish Assault',
        slug: 'succubusted-3-full-frontal-fetish-assault-fc9a878b1d4f',
        price: '$5.00',
        store_name: 'Astral Ticket Comics ',
        store_slug: 'Astral Ticket Comics ',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdE1GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--869bc5a97cdbddaf18e247b212c58d6ed6840599/Cover%20A.jpg',
      },
      {
        name: 'SuccuBUSTED! #2 Lusty Guardian Rita ',
        slug: 'succubusted-2-lusty-guardian-rita-a0a2717b6e10',
        price: '$5.00',
        store_name: 'Astral Ticket Comics ',
        store_slug: 'Astral Ticket Comics ',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--37ce3af3c10dc47b167858016ee5c06ee0df6286/Cover%20A%20SB2%20final%20TD%20NICE.jpg',
      },
      {
        name: 'McBlack Two Shot',
        slug: 'mcblack-two-shot-5dec99cc2e05',
        price: '$5.00',
        store_name: 'Blackglass Press',
        store_slug: 'Blackglass Press',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDRHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d43901c4ec938e596a1b0c5585795315a074bcb/Cover_dressed.jpg',
      },
      {
        name: 'Pistol Shrimp #2',
        slug: 'pistol-shrimp-2-7aeae756317a',
        price: '$2.99',
        store_name: 'King Brillip Comics',
        store_slug: 'King Brillip Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c726a6ce402a3d36ddb40ef354a54e60789dbe3e/Pistol%20Shrimp%202%20cover%20CMYK%20(Final).jpg',
      },
      {
        name: 'Home Free #2: Into the Woods',
        slug: 'home-free-into-the-woods-7187aca6ad3a',
        price: '$4.00',
        store_name: 'Coffee Time Comix',
        store_slug: 'Coffee Time Comix',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmNCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a6f9841e6e5a1916d826856d0a66cc780970f8d0/image1.jpg',
      },
      {
        name: 'Devil Tree #2',
        slug: 'devil-tree-2-db1bbf910122',
        price: '$0.99',
        store_name: 'Blood Moon Comics',
        store_slug: 'Blood Moon Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamtDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e97a9bf0a3da8f4fe992102ded6dae0db23d53d7/dt-2.png',
      },
      {
        name: 'Devil Tree #4',
        slug: 'devil-tree-4-3ad376d027c2',
        price: '$1.99',
        store_name: 'Blood Moon Comics',
        store_slug: 'Blood Moon Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBanNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fcac2fbbe03d08c0db32bd6c62a2d6d9489fa205/d-4.jpeg',
      },
      {
        name: 'Home Free #3: Desert Green',
        slug: 'home-free-desert-green-b98ccc5bd8a8',
        price: '$4.00',
        store_name: 'Coffee Time Comix',
        store_slug: 'Coffee Time Comix',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcmdCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--51f55eb5ab8ee19c3d000e7054693042d2d2b3a0/image5.jpg',
      },
      {
        name: 'Devil Tree #3',
        slug: 'devil-tree-3-d4070e104a6a',
        price: '$1.99',
        store_name: 'Blood Moon Comics',
        store_slug: 'Blood Moon Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBam9DIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--862dbcb5eeada2f98763f4882736d5abcec92a19/dt-3.jpeg',
      },
      {
        name: 'Devil Tree #5',
        slug: 'devil-tree-5-a674486fb49f',
        price: '$1.99',
        store_name: 'Blood Moon Comics',
        store_slug: 'Blood Moon Comics',
        avatar:
          '/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBandDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d43a68c41a658d1f0b4622565ce71f5d93f6ddc5/dt-5.jpeg',
      },
    ],
  },
};

type CarouselCard = {
  picture: string;
  handle: string;
  timeStamp: string;
  socialIcon: string;
  postTextContent: string;
  postPicture: string;
  numberOfLikes: string;
  numberOfComments: string;
};

type CarouselCardList = CarouselCard[];

export const CarouselCard: CarouselCardList = [
  {
    picture: '',
    handle: '',
    timeStamp: '',
    socialIcon: '',
    postTextContent: '',
    postPicture: '',
    numberOfLikes: '',
    numberOfComments: '',
  },
  {
    picture: '',
    handle: '',
    timeStamp: '',
    socialIcon: '',
    postTextContent: '',
    postPicture: '',
    numberOfLikes: '',
    numberOfComments: '',
  },
  {
    picture: '',
    handle: '',
    timeStamp: '',
    socialIcon: '',
    postTextContent: '',
    postPicture: '',
    numberOfLikes: '',
    numberOfComments: '',
  },
  {
    picture: '',
    handle: '',
    timeStamp: '',
    socialIcon: '',
    postTextContent: '',
    postPicture: '',
    numberOfLikes: '',
    numberOfComments: '',
  },
  {
    picture: '',
    handle: '',
    timeStamp: '',
    socialIcon: '',
    postTextContent: '',
    postPicture: '',
    numberOfLikes: '',
    numberOfComments: '',
  },
];
