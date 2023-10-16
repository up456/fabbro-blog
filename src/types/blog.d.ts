declare type BlogMetadata = {
  title: string;
  description: string;
  date: string;
  category: string[];
};

declare type BlogMetadataWithContent = BlogMetadata & {
  content: string;
};
