export interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

export interface SearchItem {
  id?: string;
  snippet: {
    publishedAt: string;
    title: string;
    description?: string;
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}
