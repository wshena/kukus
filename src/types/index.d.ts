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