const categories = ['推荐', '原创动作', '大神复刻', '新手教学', '魔术流程', '花切展示', '求指导']
const publishCategories = categories.filter((item) => item !== '推荐')
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
  { id: 5, nickname: 'AceLin', level: 'Lv.3', avatar: 'A', bio: '魔术流程和小舞台练习。' }
]

const posts = [
  {
    id: 101,
    title: '双旋切牌展示',
    intro: '双旋切是最燃的基础进阶动作之一，掌握节奏与手腕的配合就能让画面流动起来，希望大家喜欢。',
    category: '花切展示',
    difficulty: '中等',
    author: users[0],
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
    category: '新手教学',
    difficulty: '简单',
    author: users[1],
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
    category: '原创动作',
    difficulty: '困难',
    author: users[2],
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
    category: '魔术流程',
    difficulty: '中等',
    author: users[4],
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
  { id: 3, type: '收藏', title: 'NIKO 收藏了你的教程', content: '单手开扇教学', time: '昨天' }
]

module.exports = {
  categories,
  publishCategories,
  difficulties,
  currentUser,
  users,
  posts,
  comments,
  messages
}
