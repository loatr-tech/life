export const POST_INFOS: any = {
  TC: {
    QUARTER: {
      q1: '1月-3月',
      q2: '4月-6月',
      q3: '7月-9月',
      q4: '10月-12月',
    },
    DEGREE: {
      undergrad: '本科',
      master: '硕士',
      phd: '博士',
    },
    EQUITY: {
      rsu: 'RSUs',
      option: 'Options',
      total_value: '总价值',
      total_units: '股数(Units)',
    },
  },
};

export type MetadataLabel = {
  name: string;
  engName: string;
};

export const POST_METADATA_TC: Record<string, MetadataLabel> = {
  // Basic info
  COMPANY_NAME: { name: '公司名称', engName: 'Company' },
  POSITION: { name: '工种', engName: 'Position' },
  LEVEL: { name: '级别', engName: 'Title/Level' },
  DATE: { name: '定薪月份', engName: 'Date' },
  DEGREE: { name: '最高学历', engName: 'Degree' },
  YOE: { name: '工作经验', engName: 'YOE' },
  // Salary
  BASE: { name: '基本工资', engName: 'Base' },
  BONUS: { name: '奖金', engName: 'Bonus' },
  SIGNON_1ST: { name: '第一年', engName: '1st year' },
  SIGNON_2ND: { name: '第二年', engName: '2nd year' },
  // Equity
  EQUITY_TYPE: { name: '股票类型', engName: 'Equity type' },
  GRANT_TYPE: { name: '授予方式', engName: 'Grant type' },
  TOTAL_VALUE: { name: '4年总值', engName: 'Total value' },
  TOTAL_UNITS: { name: '4年总股数', engName: 'Total units' },
  UNIT_PRICE: { name: '每股价格', engName: 'Unit price' },
  STRIKE_PRICE: { name: '每股行权价', engName: 'Strike price' },
};
