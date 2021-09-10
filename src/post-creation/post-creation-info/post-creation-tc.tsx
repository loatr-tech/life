import React, { useState } from 'react';
import { Divider, Input, InputNumber, Select } from 'antd';
import './post-creation-tc.scss';
import { displayCurreny } from '../../_utils/number';

const DEFAULT_TC_DATA = {
  // Position information
  company_name: '',
  title_level: '',
  year: '',
  quarter: '',
  highest_degree: '',
  year_of_experience: '',
  // Salary
  base_salary: 0,
  annual_bonus: 0,
  // Sign-on bonus
  signon_first_year: 0,
  signon_second_year: 0,
  // Equity/Stock
  equity_type: 'rsu',
  equity_grant_type: 'total_value',
  total_equity_amount: 0,
  total_equity_units: 0,
  equity_unit_price: 0,
  equity_strike_price: 0,
};

function PostCreationTC({ setInfos }: any) {
  const [tcData, setTcData] = useState(DEFAULT_TC_DATA);

  const onUpdateData = (value: any, property: string) => {
    const newTcData: any = { ...tcData };
    newTcData[property] = value;
    setTcData(newTcData);
    setInfos(newTcData);
  };

  return (
    <div className="post-creation-tc">
      <h2 className="post-creation-tc__section-title">基本信息</h2>
      {/* Position Information */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_company">公司名称</label>
          <Input
            id="tc_company"
            placeholder="e.g Google"
            value={tcData.company_name}
            onChange={(e) => onUpdateData(e.target.value, 'company_name')}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_title">头衔(Title/Level)</label>
          <Input
            id="tc_title"
            value={tcData.title_level}
            onChange={(e) => onUpdateData(e.target.value, 'title_level')}
          />
        </div>
      </section>

      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_year">找工年份</label>
          <Select
            id="tc_year"
            style={{ width: '100%' }}
            value={tcData.year}
            onChange={(value) => onUpdateData(value, 'year')}
          >
            <Select.Option value="2018">2018</Select.Option>
            <Select.Option value="2019">2019</Select.Option>
            <Select.Option value="2020">2020</Select.Option>
            <Select.Option value="2021">2021</Select.Option>
            <Select.Option value="2022">2022</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_month">找工季度</label>
          <Select
            id="tc_month"
            style={{ width: '100%' }}
            value={tcData.quarter}
            onChange={(value) => onUpdateData(value, 'quarter')}
          >
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
          <Select
            id="tc_degree"
            style={{ width: '100%' }}
            value={tcData.highest_degree}
            onChange={(value) => onUpdateData(value, 'highest_degree')}
          >
            <Select.Option value="undergrad">本科</Select.Option>
            <Select.Option value="master">硕士</Select.Option>
            <Select.Option value="phd">博士</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_yoe">工作经验</label>
          <Input
            id="tc_yoe"
            type="number"
            suffix="年"
            value={tcData.year_of_experience}
            onChange={(e) => onUpdateData(e.target.value, 'year_of_experience')}
          />
        </div>
      </section>

      <Divider />

      <h2 className="post-creation-tc__section-title">薪资</h2>
      {/* Basic */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_base">基本工资(Base)</label>
          <InputNumber
            id="tc_base"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.base_salary}
            onChange={(value) => onUpdateData(value, 'base_salary')}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_bonus">奖金(Bonus)</label>
          <Input
            id="tc_bonus"
            type="number"
            suffix="%"
            value={tcData.annual_bonus}
            onChange={(e) => onUpdateData(e.target.value, 'annual_bonus')}
          />
        </div>
      </section>

      {/* Sign-on Bonus */}
      <h4 className="post-creation-tc__section-title">签字费(Sign-on bonus)</h4>
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon1">第一年</label>
          <InputNumber
            id="tc_signon1"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.signon_first_year}
            onChange={(value) => onUpdateData(value, 'signon_first_year')}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon2">第二年</label>
          <InputNumber
            id="tc_signon2"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.signon_second_year}
            onChange={(value) => onUpdateData(value, 'signon_second_year')}
          />
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
            value={tcData.equity_type}
            onChange={(value) => onUpdateData(value, 'equity_type')}
          >
            <Select.Option value="rsu">RSUs</Select.Option>
            <Select.Option value="option">Options</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_type">授予方式</label>
          <Select
            id="tc_equity_grant_type"
            style={{ width: '100%' }}
            value={tcData.equity_grant_type}
            onChange={(value) => onUpdateData(value, 'equity_grant_type')}
          >
            <Select.Option value="total_value">总价值</Select.Option>
            <Select.Option value="total_units">股数(Units)</Select.Option>
          </Select>
        </div>
        {tcData.equity_grant_type === 'total_value' && (
          <div className="post-creation-tc__field">
            <label htmlFor="tc_equity_amount">四年股票总值</label>
            <InputNumber
              id="tc_equity_amount"
              formatter={(value) => `$ ${displayCurreny(value)}`}
              style={{ width: '100%' }}
              value={tcData.total_equity_amount}
              onChange={(value) => onUpdateData(value, 'total_equity_amount')}
            />
          </div>
        )}
        {tcData.equity_grant_type === 'total_units' && (
          <>
            <div className="post-creation-tc__field">
              <label htmlFor="tc_equity_units">四年总股数</label>
              <InputNumber
                id="tc_equity_units"
                formatter={(value) => displayCurreny(`${value}`)}
                style={{ width: '100%' }}
                value={tcData.total_equity_units}
                onChange={(value) => onUpdateData(value, 'total_equity_units')}
              />
            </div>
            <div className="post-creation-tc__field">
              <label htmlFor="tc_equity_market_price">授予每股价格</label>
              <InputNumber
                id="tc_equity_market_price"
                formatter={(value) => `$ ${displayCurreny(value)}`}
                style={{ width: '100%' }}
                value={tcData.equity_unit_price}
                onChange={(value) => onUpdateData(value, 'equity_unit_price')}
              />
            </div>
            {tcData.equity_type === 'option' && (
              <div className="post-creation-tc__field">
                <label htmlFor="tc_equity_strike_price">行权价</label>
                <InputNumber
                  id="tc_equity_strike_price"
                  formatter={(value) => `$ ${displayCurreny(value)}`}
                  style={{ width: '100%' }}
                  value={tcData.equity_strike_price}
                  onChange={(value) =>
                    onUpdateData(value, 'equity_strike_price')
                  }
                />
              </div>
            )}
          </>
        )}
      </section>

      {/* Summary */}
      <section className="post-creation-tc__summary">
        <h3>总包裹(TC)每年</h3>
        <div></div>
        <p>基本工资 &times; (1 + 奖金%) + 股票/4</p>
        <p>
          ${displayCurreny(tcData.base_salary || 0)} &times; (1+
          {tcData.annual_bonus || 0}%) + $
          {displayCurreny(tcData.total_equity_amount || 0)}/4
        </p>
        <p>
          = $
          {displayCurreny(
            tcData.base_salary * (1 + tcData.annual_bonus / 100) +
              tcData.total_equity_amount / 4
          )}{' '}
          / year
        </p>
      </section>
    </div>
  );
}

export default PostCreationTC;
