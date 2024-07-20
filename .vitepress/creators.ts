export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'XYX',
    avatar: '',
    username: 'XYXMichael',
    title: '博客贡献者',
    desc: '一个热衷前端开发的程序员，热爱开源，热爱分享，同时暂时也是个苦命的考研人。',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/XYXMichael' },
    ],
    nameAliases: ['XYXMichael', 'XYX', 'XYX', 'Michael XYX', 'Michael XYX'],
    emailAliases: ['1907214633@qq.com'],
  },
  {
    name: 'BSY',
    avatar: '',
    username: 'Leon-Bin',
    title: 'Nólëbase 原始创作者',
    desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Leon-Bin' },
    ],
    nameAliases: ['Leon-Bin', 'BSY', 'BSY', 'Bin Leon', 'Bin Leon'],
    emailAliases: ['bin2946919972@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
