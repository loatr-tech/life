import React, { useState } from 'react';
import { Divider, Input, Select } from 'antd';
import './post-creation-tc.scss';

function PostCreationTC() {
  const [base, setBase] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [equityType, setEquityType] = useState('rsu');
  const [equity, setEquity] = useState(0);
  const onBaseChange = (value: any) => {
    setBase(value);
  };
  const onBonusChange = (value: any) => {
    setBonus(value);
  };
  const onEquityChange = (value: any) => {
    setEquity(value);
  };
  return (
    <div className="post-creation-tc">
      <h2 className="post-creation-tc__section-title">基本信息</h2>
      {/* Position Information */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_company">公司名称</label>
          <Input id="tc_company" />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_title">头衔(Title/Level)</label>
          <Input id="tc_title" />
        </div>
      </section>

      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_year">找工年份</label>
          <Select id="tc_year" style={{ width: '100%' }}>
            <Select.Option value="2018">2018</Select.Option>
            <Select.Option value="2019">2019</Select.Option>
            <Select.Option value="2020">2020</Select.Option>
            <Select.Option value="2021">2021</Select.Option>
            <Select.Option value="2022">2022</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_month">找工季度</label>
          <Select id="tc_month" style={{ width: '100%' }}>
            <Select.Option value="q1">1月-3月</Select.Option>
            <Select.Option value="q2">4月-6月</Select.Option>
            <Select.Option value="q3">7月-9月</Select.Option>
            <Select.Option value="q4">10月-12月</Select.Option>
          </Select>
        </div>
      </section>

      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_degree">最高学历</label>
          <Select id="tc_degree" style={{ width: '100%' }}>
            <Select.Option value="undergrad">本科</Select.Option>
            <Select.Option value="master">硕士</Select.Option>
            <Select.Option value="phd">博士</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_yoe">工作经验</label>
          <Input id="tc_yoe" type="number" suffix="年" />
        </div>
      </section>

      <Divider />

      <h2 className="post-creation-tc__section-title">薪资</h2>
      {/* Basic */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_base">基本工资(Base)</label>
          <Input
            id="tc_base"
            type="number"
            prefix="$"
            value={base}
            onChange={(e) => onBaseChange(e.target.value)}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_bonus">奖金(Bonus)</label>
          <Input
            id="tc_bonus"
            type="number"
            suffix="%"
            value={bonus}
            onChange={(e) => onBonusChange(e.target.value)}
          />
        </div>
      </section>

      {/* Sign-on Bonus */}
      <h4 className="post-creation-tc__section-title">签字费(Sign-on bonus)</h4>
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon1">第一年</label>
          <Input id="tc_signon1" type="number" prefix="$" />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon2">第二年</label>
          <Input id="tc_signon2" type="number" prefix="$" />
        </div>
      </section>

      {/* Equity */}
      <h4 className="post-creation-tc__section-title">股票(Equity)</h4>
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_type">股票类型</label>
          <Select
            id="tc_equity_type"
            style={{ width: '100%' }}
            value={equityType}
            onChange={setEquityType}
          >
            <Select.Option value="rsu">RSUs</Select.Option>
            <Select.Option value="option">Options</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_amount">四年股票总值</label>
          <Input
            id="tc_equity_amount"
            type="number"
            prefix="$"
            value={equity}
            onChange={(e) => onEquityChange(e.target.value)}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_units">四年总股数</label>
          <Input id="tc_equity_units" type="number" suffix="units" />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_market_price">授予每股价格</label>
          <Input id="tc_equity_market_price" type="number" prefix="$" />
        </div>
        {equityType === 'option' && (
          <div className="post-creation-tc__field">
            <label htmlFor="tc_equity_strike_price">行权价</label>
            <Input id="tc_equity_strike_price" type="number" prefix="$" />
          </div>
        )}
      </section>

      {/* Summary */}
      <section className="post-creation-tc__summary">
        <h3>总包裹(TC)每年</h3>
        <div></div>
        <p>基本工资 &times; (1 + 奖金%) + 股票/4</p>
        <p>
          ${base || 0} &times; (1+{bonus || 0}%) + ${equity || 0}/4
        </p>
        <p>= ${base * (1 + bonus / 100) + equity / 4} / year</p>
      </section>
    </div>
  );
}

export default PostCreationTC;
