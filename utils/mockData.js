const categories = ['推荐', '原创', '大神复刻', '牌展', '求指导', '入门XCM']
const introCategories = ['入门花切', '入门魔术流程']
const publishCategories = ['原创', '大神复刻', '入门花切', '牌展', '求指导']
const difficulties = ['简单', '中等', '困难']

const currentUser = {
  id: 1,
  nickname: 'CardShawn',
  level: 'Lv.5',
  avatar: '♠',
  bio: '花切爱好者，魔术让生活更有趣。专注花切与魔术动作创作与分享。',
  location: '广东',
  stats: {
    posts: 28,
    favorites: 128,
    likes: '1.2k'
  }
}

const users = [
  currentUser,
  { id: 2, nickname: '魔术师阿凯', level: 'Lv.4', avatar: 'A', bio: '新手友好教程创作者。' },
  { id: 3, nickname: 'Kylin', level: 'Lv.6', avatar: 'K', bio: '原创花切动作研究中。' },
  { id: 4, nickname: 'NIKO', level: 'Lv.5', avatar: 'N', bio: '喜欢复刻经典大神动作。' },
  { id: 5, nickname: 'AceLin', level: 'Lv.3', avatar: 'A', bio: '入门魔术流程和小舞台练习。' }
]

const posts = [
  {
    id: 101,
    title: '双旋切牌展示',
    intro: '双旋切是最燃的基础进阶动作之一，掌握节奏与手腕的配合就能让画面流动起来，希望大家喜欢。',
    category: '牌展',
    difficulty: '中等',
    author: users[0],
    location: '广州',
    status: '在线',
    mediaCount: 4,
    mediaExtra: '+2',
    duration: '00:36',
    likes: 386,
    comments: 42,
    favorites: 128,
    coverTone: 'violet',
    createdAt: '2024-05-18',
    liked: false,
    collected: false
  },
  {
    id: 102,
    title: '单手开扇教学',
    intro: '适合刚开始练花切的朋友，重点是拇指发力、牌面压力和收尾角度。',
    category: '入门花切',
    difficulty: '简单',
    author: users[1],
    location: '深圳',
    status: '刚刚在线',
    mediaCount: 3,
    mediaExtra: '+1',
    duration: '00:28',
    likes: 256,
    comments: 31,
    favorites: 72,
    coverTone: 'blue',
    createdAt: '2024-05-17',
    liked: false,
    collected: false
  },
  {
    id: 103,
    title: '飞退切牌教学',
    intro: '一个节奏很快的原创动作，建议先练好基础切牌和双手交接。',
    category: '原创',
    difficulty: '困难',
    author: users[2],
    location: '上海',
    status: '在线',
    mediaCount: 5,
    mediaExtra: '+3',
    duration: '00:45',
    likes: 512,
    comments: 68,
    favorites: 210,
    coverTone: 'fan',
    createdAt: '2024-05-16',
    liked: false,
    collected: true
  },
  {
    id: 104,
    title: '进阶旋风切牌',
    intro: '复刻经典旋风切牌，拆成三个段落练习，慢速更容易找到稳定轨迹。',
    category: '大神复刻',
    difficulty: '困难',
    author: users[3],
    location: '杭州',
    status: '1小时前在线',
    mediaCount: 3,
    mediaExtra: '+1',
    duration: '00:31',
    likes: 298,
    comments: 27,
    favorites: 96,
    coverTone: 'dark',
    createdAt: '2024-05-15',
    liked: false,
    collected: false
  },
  {
    id: 105,
    title: '三段式切牌组合',
    intro: '适合接在小流程里的三段组合，镜头前很干净，适合短视频展示。',
    category: '入门魔术流程',
    difficulty: '中等',
    author: users[4],
    location: '北京',
    status: '在线',
    mediaCount: 4,
    mediaExtra: '+2',
    duration: '00:52',
    likes: 341,
    comments: 36,
    favorites: 117,
    coverTone: 'silver',
    createdAt: '2024-05-14',
    liked: false,
    collected: true
  },
  {
    id: 106,
    title: '基础抓牌求指导',
    intro: '练到这里总感觉右手不够稳，欢迎各位前辈帮忙看看发力和角度。',
    category: '求指导',
    difficulty: '简单',
    author: users[1],
    location: '深圳',
    status: '刚刚在线',
    mediaCount: 2,
    mediaExtra: '',
    duration: '00:24',
    likes: 89,
    comments: 19,
    favorites: 20,
    coverTone: 'blue',
    createdAt: '2024-05-13',
    liked: false,
    collected: false
  }
]

const comments = [
  { id: 1, postId: 101, author: users[1], content: '节奏太丝滑了，细节处理太稳。', likes: 22, createdAt: '05-18 15:21' },
  { id: 2, postId: 101, author: users[2], content: '第二个旋转的衔接绝了，想慢放学习。', likes: 15, createdAt: '05-18 15:35' },
  { id: 3, postId: 101, author: users[4], content: '手势干净，眼睛舒服，求分解视频。', likes: 8, createdAt: '05-18 16:02' },
  { id: 4, postId: 102, author: users[0], content: '这个教程很适合新手，讲得清楚。', likes: 12, createdAt: '05-17 19:20' }
]

const messages = [
  { id: 1, type: '评论', title: '魔术师阿凯评论了你的作品', content: '双旋切牌展示真的很稳。', time: '10分钟前' },
  { id: 2, type: '点赞', title: 'Kylin 点赞了你的作品', content: '双旋切牌展示', time: '28分钟前' },
  { id: 3, type: '收藏', title: 'NIKO 收藏了你的教程', content: '单手开扇教学', time: '昨天' },
  { id: 4, type: '发布', title: 'AceLin 发布了新流程', content: '三段式切牌组合', time: '2天前' },
  { id: 5, type: '获赞', title: '你的牌展获得 32 个赞', content: '双旋切牌展示', time: '3天前' },
  { id: 6, type: '私信', title: 'Kylin 发来私信', content: '飞退切牌的慢动作可以交流一下吗？', time: '刚刚' },
  { id: 7, type: '私信', title: 'NIKO 发来私信', content: '你这个双旋切牌接得很顺，想约一场复刻练习。', time: '1小时前' }
]

const profileFeeds = {
  published: posts.filter((item) => item.author.id === currentUser.id),
  collected: posts.filter((item) => item.collected),
  liked: posts.filter((item) => item.likes >= 298)
}

const messageGroups = [
  { key: '发布', name: '发布', icon: '＋', count: 6 },
  { key: '收藏', name: '收藏', icon: '☆', count: 9 },
  { key: '获赞', name: '获赞', icon: '♡', count: 28 },
  { key: '私信', name: '私信', icon: '✉', count: 2 }
]

const introVideoLevels = ['初级', '中级', '高级']

const introVideoGroups = {
  入门花切: [
    { id: 'beginner-1', level: '初级', title: '单手开扇基础练习', source: '免费教学精选', duration: '08:12', summary: '适合第一次练开扇的用户，先掌握拇指压力和牌面角度。', coverTone: 'blue' },
    { id: 'beginner-2', level: '初级', title: '基础切牌手位讲解', source: '公开教学整理', duration: '06:35', summary: '拆解切牌前的握牌、分牌和收牌动作。', coverTone: 'violet' },
    { id: 'beginner-3', level: '中级', title: '新手控牌稳定训练', source: '免费教学精选', duration: '09:20', summary: '用慢速练习建立手指稳定度，减少掉牌。', coverTone: 'silver' },
    { id: 'beginner-4', level: '高级', title: '连续花切衔接示范', source: '公开教学整理', duration: '12:18', summary: '把基础开扇、切牌和翻转动作组合成连续展示。', coverTone: 'fan' }
  ],
  入门魔术流程: [
    { id: 'magic-1', level: '初级', title: '三段式入门魔术流程', source: '公开教学整理', duration: '10:05', summary: '从展示、控牌到结尾效果，适合小流程入门。', coverTone: 'dark' },
    { id: 'magic-2', level: '中级', title: '观众互动基础流程', source: '免费教学精选', duration: '07:48', summary: '学习如何把简单花切接入互动魔术表演。', coverTone: 'fan' },
    { id: 'magic-3', level: '高级', title: '入门流程节奏安排', source: '公开教学整理', duration: '05:56', summary: '讲解开场、中段铺垫和结尾亮点的节奏。', coverTone: 'blue' },
    { id: 'magic-4', level: '高级', title: '流程结尾效果设计', source: '免费教学精选', duration: '11:22', summary: '学习如何安排最后的亮点动作，让流程更完整。', coverTone: 'silver' }
  ]
}

const userActivities = users.map((user) => {
  const ownPosts = posts.filter((item) => item.author.id === user.id)
  const fallbackPosts = posts.filter((item) => item.author.id !== user.id).slice(0, 2)
  const seed = user.id * 37
  return {
    user,
    posts: ownPosts.length ? ownPosts : fallbackPosts,
    stats: {
      following: seed + 18,
      followers: user.id === 1 ? '1.2k' : `${seed + 86}`,
      works: ownPosts.length || fallbackPosts.length
    }
  }
})

function getUserById(id) {
  return users.find((item) => item.id === Number(id)) || currentUser
}

function getUserActivityById(id) {
  const user = getUserById(id)
  return userActivities.find((item) => item.user.id === user.id) || userActivities[0]
}

module.exports = {
  categories,
  introCategories,
  publishCategories,
  difficulties,
  currentUser,
  users,
  posts,
  comments,
  messages,
  profileFeeds,
  messageGroups,
  introVideoLevels,
  introVideoGroups,
  userActivities,
  getUserById,
  getUserActivityById
}
