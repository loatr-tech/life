const TOP_CATEGORY_TEXT = {
  CAREER: '打工人儿',
  GO_ABROAD: '留学移民',
  STUDY: '天天向上',
  NEIGHBORHOOD: '街坊领居',
};

export const CATEGORY = {
  // 打工人儿
  CAREER: {
    EXP_SHARING: 'career_exp_sharing',
    PROMO: 'career_promo',
    TC: 'total_package',
    INTERVIEW_QUESTIONS: 'interview_questions',
    NEED_REFERRAL: 'need_referral',
    WE_RE_HIRING: 'we_re_hiring',
  },
  // 留学签证
  APPLY_SCHOOL: 'apply_school',
  APPLY_SCHOOL_RESULTS: 'apply_school_results',
  WORK_VISA: 'work_visa',
  GREEN_CARD: 'green_card',
  STUDENT_VISA: 'student_visa',
  // 好好学习
  LETS_STUDY: 'lets_study',
  LEET_CODE: 'leet_code',
  // 街坊邻居
  USED_ITEMS: 'used_items',
  HOUSE_RENTAL: 'house_rental',
};

export const CATEGORIES_MAP: Record<string, string> = {
  // 打工人儿
  [CATEGORY.CAREER.EXP_SHARING]: '职场经验',
  [CATEGORY.CAREER.PROMO]: '升职加薪',
  [CATEGORY.CAREER.TC]: '工资包裹',
  [CATEGORY.CAREER.INTERVIEW_QUESTIONS]: '面试经验',
  [CATEGORY.CAREER.NEED_REFERRAL]: '跪求内推',
  [CATEGORY.CAREER.WE_RE_HIRING]: '我要招人',
  // 留学签证
  [CATEGORY.APPLY_SCHOOL]: '申请学校',
  [CATEGORY.APPLY_SCHOOL_RESULTS]: '申校结果',
  [CATEGORY.WORK_VISA]: '工作签证',
  [CATEGORY.GREEN_CARD]: '移民绿卡',
  [CATEGORY.STUDENT_VISA]: '学生签证',
  // 好好学习
  [CATEGORY.LETS_STUDY]: '我要自习',
  [CATEGORY.LEET_CODE]: '组队刷题',
  // 街坊邻居
  [CATEGORY.USED_ITEMS]: '二手市场',
  [CATEGORY.HOUSE_RENTAL]: '房屋出租',
};

export const CATEGORIES_PARENT: Record<string, string> = {
  // 打工人儿
  [CATEGORY.CAREER.EXP_SHARING]: TOP_CATEGORY_TEXT.CAREER,
  [CATEGORY.CAREER.PROMO]: TOP_CATEGORY_TEXT.CAREER,
  [CATEGORY.CAREER.TC]: TOP_CATEGORY_TEXT.CAREER,
  [CATEGORY.CAREER.INTERVIEW_QUESTIONS]: TOP_CATEGORY_TEXT.CAREER,
  [CATEGORY.CAREER.NEED_REFERRAL]: TOP_CATEGORY_TEXT.CAREER,
  [CATEGORY.CAREER.WE_RE_HIRING]: TOP_CATEGORY_TEXT.CAREER,
  // 留学移民
  [CATEGORY.APPLY_SCHOOL]: TOP_CATEGORY_TEXT.GO_ABROAD,
  [CATEGORY.APPLY_SCHOOL_RESULTS]: TOP_CATEGORY_TEXT.GO_ABROAD,
  [CATEGORY.WORK_VISA]: TOP_CATEGORY_TEXT.GO_ABROAD,
  [CATEGORY.GREEN_CARD]: TOP_CATEGORY_TEXT.GO_ABROAD,
  [CATEGORY.STUDENT_VISA]: TOP_CATEGORY_TEXT.GO_ABROAD,
  // 天天向上
  [CATEGORY.LETS_STUDY]: TOP_CATEGORY_TEXT.STUDY,
  [CATEGORY.LEET_CODE]: TOP_CATEGORY_TEXT.STUDY,
  // 街坊邻居
  [CATEGORY.USED_ITEMS]: TOP_CATEGORY_TEXT.NEIGHBORHOOD,
  [CATEGORY.HOUSE_RENTAL]: TOP_CATEGORY_TEXT.NEIGHBORHOOD,
};

export const CATEGORIES = [
  {
    id: 'career',
    name: '打工人儿',
    icon: 'fa-solid fa-suitcase',
    subcategories: [
      {
        id: 'career_exp',
        type: 'group',
        name: '经验分享',
        subcategories: [
          {
            id: CATEGORY.CAREER.EXP_SHARING,
          },
          {
            id: CATEGORY.CAREER.PROMO,
          },
        ],
      },
      {
        id: 'career_data',
        type: 'group',
        name: '数据分享',
        subcategories: [
          {
            id: CATEGORY.CAREER.TC,
          },
          {
            id: CATEGORY.CAREER.INTERVIEW_QUESTIONS,
          },
        ],
      },
      {
        id: 'career_opportunities',
        type: 'group',
        name: '职位分享',
        subcategories: [
          {
            id: CATEGORY.CAREER.NEED_REFERRAL,
          },
          {
            id: CATEGORY.CAREER.WE_RE_HIRING,
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
            id: CATEGORY.APPLY_SCHOOL,
          },
          {
            id: CATEGORY.APPLY_SCHOOL_RESULTS,
          },
        ],
      },
      {
        id: 'immigration',
        type: 'group',
        name: '移民签证',
        subcategories: [
          {
            id: CATEGORY.WORK_VISA,
          },
          {
            id: CATEGORY.GREEN_CARD,
          },
          {
            id: CATEGORY.STUDENT_VISA,
          },
        ],
      },
    ],
  },
  {
    id: 'study',
    name: '天天向上',
    icon: 'fa-solid fa-book-reader',
    subcategories: [
      {
        id: CATEGORY.LETS_STUDY,
      },
      {
        id: CATEGORY.LEET_CODE,
      },
    ],
  },
  {
    id: 'neighborhood',
    name: '街坊邻居',
    icon: 'fa-solid fa-people-arrows',
    subcategories: [
      {
        id: CATEGORY.USED_ITEMS,
      },
      {
        id: CATEGORY.HOUSE_RENTAL,
      },
    ],
  },
];
