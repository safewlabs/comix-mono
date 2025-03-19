export interface GenreType {
  name: string;
  slug: string;
  cover?: string;
}

export interface PaginationType {
  count: number;
  next?: number;
  next_url: string;
  page: number;
  prev_url: string;
}

export interface PostType {
  title: string;
  body: string;
  summary: string;
  article_type: string;
}

export interface ProductType {
  name: string;
  store_name: string;
  price: string;
  slug: string;
  store_slug?: string;
  created_at: string;
  issue_cover?: string;
}

export interface ProfileType {
  name: string;
  skills: string;
  slug: string;
  avatar?: string;
}

export interface StoreType {
  name: string;
  slug: string;
  display_image?: string;
}
