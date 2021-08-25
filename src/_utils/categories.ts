export const CATEGORIES = [
  {
    id: 'career',
    name: '打工人儿',
    icon: 'fas fa-suitcase',
    subcategories: [
      {
        id: 'career_exp',
        type: 'group',
        name: '经验分享',
        subcategories: [
          {
            id: 'experience_sharing',
          },
          {
            id: 'promotion',
          },
        ],
      },
      {
        id: 'career_data',
        type: 'group',
        name: '数据分享',
        subcategories: [
          {
            id: 'total_package',
          },
          {
            id: 'interview_questions',
          },
        ],
      },
      {
        id: 'career_opportunities',
        type: 'group',
        name: '职位分享',
        subcategories: [
          {
            id: 'need_referral',
          },
          {
            id: 'we_re_hiring',
          },
        ],
      },
    ],
  },
  {
    id: 'immigration',
    name: '留学移民',
    icon: 'far fa-id-card',
    subcategories: [
      {
        id: 'international_student',
        type: 'group',
        name: '留学申请',
        subcategories: [
          {
            id: 'apply_school',
          },
          {
            id: 'application_results',
          },
        ],
      },
      {
        id: 'immigration',
        type: 'group',
        name: '移民签证',
        subcategories: [
          {
            id: 'work_visa',
          },
          {
            id: 'green_card',
          },
          {
            id: 'student_visa',
          },
        ],
      },
    ],
  },
  {
    id: 'study',
    name: '天天向上',
    icon: 'fas fa-book-reader',
    subcategories: [
      {
        id: 'lets_study',
      },
      {
        id: 'leet_code',
      },
    ],
  },
  {
    id: 'neighborhood',
    name: '街坊邻居',
    icon: 'fas fa-people-arrows',
    subcategories: [
      {
        id: 'used_items',
      },
      {
        id: 'house_rental',
      },
    ],
  },
];

export const CATEGORIES_MAP: any = {
  // 打工人儿
  experience_sharing: '经验分享',
  promotion: '升职加薪',
  total_package: '我的包裹',
  interview_questions: '北美面经',
  need_referral: '跪求内推',
  we_re_hiring: '我要招人',
  // 留学签证
  apply_school: '申请学校',
  application_results: '申校结果',
  work_visa: '工作签证',
  green_card: '移民绿卡',
  student_visa: '学生签证',
  // 好好学习
  lets_study: '我要自习',
  leet_code: '组队刷题',
  // 街坊邻居
  used_items: '二手市场',
  house_rental: '房屋出租',
};

export const CATEGORIES_PARENT: any = {
  // 打工人儿
  experience_sharing: '打工人儿',
  promotion: '打工人儿',
  total_package: '打工人儿',
  interview_questions: '打工人儿',
  need_referral: '打工人儿',
  we_re_hiring: '打工人儿',
  // 留学签证
  work_visa: '留学移民',
  green_card: '留学移民',
  student_visa: '留学移民',
  // 好好学习
  lets_study: '天天向上',
  leet_code: '天天向上',
  // 街坊邻居
  used_items: '街坊领居',
  house_rental: '街坊领居',
};