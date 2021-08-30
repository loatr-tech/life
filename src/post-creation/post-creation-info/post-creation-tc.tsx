import React, { useState } from 'react';
import { Divider, Input, Select } from 'antd';
import './post-creation-tc.scss';

function PostCreationTC() {
  const [base, setBase] = useState(0);
  const [bonus, setBonus] = useState(0);
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
      {/* Basic */}
      <section className="post-creation-tc__basic">
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
          <label htmlFor="base_salary">奖金(Bonus)</label>
          <Input
            id="tc_bonus"
            type="number"
            suffix="%"
            value={bonus}
            onChange={(e) => onBonusChange(e.target.value)}
          />
        </div>
      </section>
      {/* Equity */}
      <section className="post-creation-tc__equity">
        <div className="post-creation-tc__field">
          <label htmlFor="base_salary">股票类型</label>
          <Select style={{ width: '100%' }}>
            <Select.Option value="rsu">RSUs</Select.Option>
            <Select.Option value="option">Options</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="base_salary">股票总值(四年)</label>
          <Input
            id="tc_equitty"
            type="number"
            prefix="$"
            value={equity}
            onChange={(e) => onEquityChange(e.target.value)}
          />
        </div>
      </section>

      <Divider />

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
