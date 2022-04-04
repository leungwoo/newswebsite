//interface Object used instead of <any> for Observable in services
export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}
//Root is used as Observable type
export interface CryptoNews {
  status: string;
  totalResults: number;
  articles: Article[];
}
