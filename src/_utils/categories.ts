export const CATEGORIES = [
  {
    id: 'career',
    name: '打工人儿',
    type: 'category',
    subcategories: [
      {
        id: 'career-exp',
        type: 'group',
        subcategories: [
          {
            id: 'experience-sharing',
            name: '上岸指南',
            type: 'category',
          },
          {
            id: 'promotion',
            name: '升职加薪',
            type: 'category',
          },
        ],
      },
      {
        id: 'career-data',
        type: 'group',
        subcategories: [
          {
            id: 'total-package',
            name: '我的包裹',
            type: 'category',
          },
          {
            id: 'interview-questions',
            name: '北美面经',
            type: 'category',
          },
        ],
      },
    ],
  },
  {
    id: 'immigration',
    name: '身份移民',
    type: 'category',
    subcategories: [
      {
        id: 'work-visa',
        name: '工作签证',
        type: 'category',
      },
      {
        id: 'green-card',
        name: '移民绿卡',
        type: 'category',
      },
      {
        id: 'student-visa',
        name: '学生签证',
        type: 'category',
      },
    ],
  },
  {
    id: 'study',
    name: '身份移民',
    type: 'category',
    subcategories: [
      {
        id: 'lets-study',
        name: '自习',
        type: 'category',
      },
      {
        id: 'leet-code',
        name: '组队刷题',
        type: 'category',
      },
    ],
  },
  {
    id: 'neighborhood',
    name: '街坊领居',
    type: 'category',
    subcategories: [
      {
        id: 'used-items',
        name: '二手市场',
        type: 'category',
      },
      {
        id: 'house-rental',
        name: '房屋出租',
        type: 'category',
      },
    ],
  },
];