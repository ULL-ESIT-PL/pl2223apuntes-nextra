// See issue https://github.com/shuding/nextra/issues/1120 Possible to use FrontMatter page props in the current mdx page? #1120

import { useConfig } from 'nextra-theme-docs'

export default function FrontMatter({ prop }) {
  const config = useConfig()
  console.log(JSON.stringify(config, null, 2));
  return config.frontMatter[prop]
}