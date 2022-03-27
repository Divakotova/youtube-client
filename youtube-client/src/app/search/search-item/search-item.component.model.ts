export interface SearchItem {
  id?: string,
  snippet: {
    publishedAt: string,
    title: string,
    description?: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number
      },
    },
    channelTitle: string,
  },
  statistics: {
    [key: string]: string,
  }
}
