interface FetchResponse {
  success: boolean;
  res: any;
};
interface IconProps {
  size: number,
  color: string,
  classname?: string
};
interface SectionAndTitleProps {
  type?: string,
  title: string,
  url?: string,
  children?: React.ReactNode
};
interface GameGenresProps {
  id: number | null,
  name: string | null,
  slug: string | null,
  games_count: number | null,
  image_background: string | null
};
interface GameTagsProps extends GameGenresProps {
  language: string | null,
};
interface PublisherProps extends GameGenresProps {};
interface DeveloperProps extends GameGenresProps {};
interface GamePlatformProps {
  platform: {
    id: number | null,
    name: string | null,
    slug: string | null,
    image: string | null,
    year_end: string | number | null,
    year_start: string | number | null,
    games_count: number | null,
    image_background: string | null
  },
  released_at: string,
  requirements: {} | null
};
interface GameStoresProps {
  id: number | null,
  url: string | null,
  store: {
    id: number | null,
    name: string | null,
    slug: string | null,
    domain: string,
    games_count: number | null,
    image_background: string | null
  }
}
interface GameScreenshotProps {
  id: number,
  image: string,
  width: number,
  height: number,
  is_deleted: boolean
}

type NavLinkProps = {
  id: number,
  label: string,
  link: string
}
type HttpMethod = 'get' | 'post' | 'put' | 'delete';
type FetcherParams = Record<string, any>;
type ChakraResponsive =
  string | number | {
    base?: string | number,
    md?: string | number,
    lg?: string | number,
    xl?: string | number,
    "2xl"?: string | number
  }