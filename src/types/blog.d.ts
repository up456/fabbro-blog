declare type BlogMetadata = {
  title: string;
  description: string;
  date: string;
  category: string[];
  featured?: boolean;
};

declare type BlogMetadataWithContent = BlogMetadata & {
  content: string;
};
