export default interface PaginationType {
  pagination: {
    prev_url: string;
    next_url: string;
    count: string;
    page: string;
    next?: string;
  };
}
