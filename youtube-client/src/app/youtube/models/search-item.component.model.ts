export interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

export interface Snippet {
  publishedAt: string;
  title: string;
  description?: string;
  thumbnails: {
    default: Thumbnails;
    medium: Thumbnails;
    high: Thumbnails;
    maxres: Thumbnails;
  };
  channelTitle?: string;
}

export interface SearchItem {
  id?: string;
  snippet: Snippet;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export type UnderliningColor = {
  blue: string;
  red: string;
  green: string;
  yellow: string;
};
