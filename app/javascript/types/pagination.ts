export default interface PaginationTypes {
  pagination: {
    prev_url: string;
    next_url: string;
    count: string;
    page: string;
    next?: string;
  };
}
