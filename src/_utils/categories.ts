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
            id: 'experience_sharing',
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
            id: 'total_package',
            name: '我的包裹',
            type: 'category',
          },
          {
            id: 'interview_questions',
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
        id: 'work_visa',
        name: '工作签证',
        type: 'category',
      },
      {
        id: 'green_card',
        name: '移民绿卡',
        type: 'category',
      },
      {
        id: 'student_visa',
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
        id: 'lets_study',
        name: '自习',
        type: 'category',
      },
      {
        id: 'leet_code',
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
        id: 'used_items',
        name: '二手市场',
        type: 'category',
      },
      {
        id: 'house_rental',
        name: '房屋出租',
        type: 'category',
      },
    ],
  },
];

export const CATEGORIES_MAP: any = {
  experience_sharing: '经验分享',
  promotion: '升职加薪',
  total_package: '我的包裹',
  interview_questions: '北美面经',
  work_visa: '工作签证',
  green_card: '移民绿卡',
  student_visa: '学生签证',
  lets_study: '自习',
  leet_code: '组队刷题',
  used_items: '二手市场',
  house_rental: '房屋出租',
};

export const CATEGORIES_PARENT: any = {
  experience_sharing: '打工人',
  promotion: '打工人',
  total_package: '打工人',
  interview_questions: '打工人',
  work_visa: '身份移民',
  green_card: '身份移民',
  student_visa: '身份移民',
  lets_study: '天天向上',
  leet_code: '天天向上',
  used_items: '街坊领居',
  house_rental: '街坊领居',
};