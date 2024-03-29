import React, { useState } from 'react';
import { DatePicker, Divider, Input, InputNumber, Select } from 'antd';
import './post-creation-tc.scss';
import { displayCurreny } from '../../_utils/number';
import PostInfoLabel from '../../post/post-info-label';
import { POST_METADATA_TC } from '../../_utils/post-infos';

const DEFAULT_TC_DATA = {
  // Position information
  company_name: '',
  position: '',
  title_level: '',
  year: '',
  month: '',
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

  const onUpdateData = (keyValue: Record<string, any>) => {
    const newTcData: any = { ...tcData, ...keyValue };
    setTcData(newTcData);
    setInfos(newTcData);
  };

  return (
    <div className="post-creation-tc">
      <h2 className="post-creation-tc__section-title">
        <i className="fa-solid fa-address-card"></i> 基本信息
      </h2>
      {/* Position Information */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_company">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.COMPANY_NAME} />
          </label>
          <Input
            id="tc_company"
            placeholder="e.g Google"
            value={tcData.company_name}
            onChange={(e) => onUpdateData({ company_name: e.target.value })}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_title">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.POSITION} />
          </label>
          <Input
            id="tc_title"
            placeholder="e.g Software Engineer"
            value={tcData.position}
            onChange={(e) => onUpdateData({ position: e.target.value })}
          />
        </div>
      </section>

      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_title">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.LEVEL} />
          </label>
          <Input
            id="tc_title"
            value={tcData.title_level}
            onChange={(e) => onUpdateData({ title_level: e.target.value })}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_year">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.DATE} />
          </label>
          <DatePicker
            style={{ width: '100%' }}
            picker="month"
            placeholder="选择月份"
            onChange={(e) => {
              onUpdateData({
                year: e?.get('year')!,
                month: e?.get('month')! + 1,
              });
            }}
          />
        </div>
      </section>

      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_degree">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.DEGREE} />
          </label>
          <Select
            id="tc_degree"
            style={{ width: '100%' }}
            value={tcData.highest_degree}
            onChange={(value) => onUpdateData({ highest_degree: value })}
          >
            <Select.Option value="undergrad">本科</Select.Option>
            <Select.Option value="master">硕士</Select.Option>
            <Select.Option value="phd">博士</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_yoe">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.YOE} />
          </label>
          <Input
            id="tc_yoe"
            type="number"
            suffix="年"
            value={tcData.year_of_experience}
            onChange={(e) =>
              onUpdateData({ year_of_experience: e.target.value })
            }
          />
        </div>
      </section>

      <Divider />

      <h2 className="post-creation-tc__section-title">
        <i className="fa-solid fa-sack-dollar"></i> 薪资
      </h2>
      {/* Basic */}
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_base">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.BASE} />
          </label>
          <InputNumber
            id="tc_base"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.base_salary}
            onChange={(value) => onUpdateData({ base_salary: value })}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_bonus">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.BONUS} />
          </label>
          <Input
            id="tc_bonus"
            type="number"
            suffix="%"
            value={tcData.annual_bonus}
            onChange={(e) => onUpdateData({ annual_bonus: e.target.value })}
          />
        </div>
      </section>

      {/* Sign-on Bonus */}
      <h4 className="post-creation-tc__section-title">签字费(Sign-on bonus)</h4>
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon1">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.SIGNON_1ST} />
          </label>
          <InputNumber
            id="tc_signon1"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.signon_first_year}
            onChange={(value) => onUpdateData({ signon_first_year: value })}
          />
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_signon2">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.SIGNON_2ND} />
          </label>
          <InputNumber
            id="tc_signon2"
            formatter={(value) => `$ ${displayCurreny(value)}`}
            style={{ width: '100%' }}
            value={tcData.signon_second_year}
            onChange={(value) => onUpdateData({ signon_second_year: value })}
          />
        </div>
      </section>

      {/* Equity */}
      <h4 className="post-creation-tc__section-title">股票(Equity)</h4>
      <section className="post-creation-tc__row">
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_type">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.EQUITY_TYPE} />
          </label>
          <Select
            id="tc_equity_type"
            style={{ width: '100%' }}
            value={tcData.equity_type}
            onChange={(value) => onUpdateData({ equity_type: value })}
          >
            <Select.Option value="rsu">RSUs</Select.Option>
            <Select.Option value="option">Options</Select.Option>
          </Select>
        </div>
        <div className="post-creation-tc__field">
          <label htmlFor="tc_equity_type">
            <PostInfoLabel metadataLabel={POST_METADATA_TC.GRANT_TYPE} />
          </label>
          <Select
            id="tc_equity_grant_type"
            style={{ width: '100%' }}
            value={tcData.equity_grant_type}
            onChange={(value) => onUpdateData({ equity_grant_type: value })}
          >
            <Select.Option value="total_value">总价值</Select.Option>
            <Select.Option value="total_units">股数(Units)</Select.Option>
          </Select>
        </div>
        {tcData.equity_grant_type === 'total_value' && (
          <div className="post-creation-tc__field">
            <label htmlFor="tc_equity_amount">
              <PostInfoLabel metadataLabel={POST_METADATA_TC.TOTAL_VALUE} />
            </label>
            <InputNumber
              id="tc_equity_amount"
              formatter={(value) => `$ ${displayCurreny(value)}`}
              style={{ width: '100%' }}
              value={tcData.total_equity_amount}
              onChange={(value) => onUpdateData({ total_equity_amount: value })}
            />
          </div>
        )}
        {tcData.equity_grant_type === 'total_units' && (
          <>
            <div className="post-creation-tc__field">
              <label htmlFor="tc_equity_units">
                <PostInfoLabel metadataLabel={POST_METADATA_TC.TOTAL_UNITS} />
              </label>
              <InputNumber
                id="tc_equity_units"
                formatter={(value) => displayCurreny(`${value}`)}
                style={{ width: '100%' }}
                value={tcData.total_equity_units}
                onChange={(value) =>
                  onUpdateData({ total_equity_units: value })
                }
              />
            </div>
            {tcData.equity_type === 'option' ? (
              <div className="post-creation-tc__field">
                <label htmlFor="tc_equity_strike_price">
                  <PostInfoLabel
                    metadataLabel={POST_METADATA_TC.STRIKE_PRICE}
                  />
                </label>
                <InputNumber
                  id="tc_equity_strike_price"
                  formatter={(value) => `$ ${displayCurreny(value)}`}
                  style={{ width: '100%' }}
                  value={tcData.equity_strike_price}
                  onChange={(value) =>
                    onUpdateData({ equity_strike_price: value })
                  }
                />
              </div>
            ) : (
              <div className="post-creation-tc__field">
                <label htmlFor="tc_equity_market_price">
                  <PostInfoLabel metadataLabel={POST_METADATA_TC.UNIT_PRICE} />
                </label>
                <InputNumber
                  id="tc_equity_market_price"
                  formatter={(value) => `$ ${displayCurreny(value)}`}
                  style={{ width: '100%' }}
                  value={tcData.equity_unit_price}
                  onChange={(value) =>
                    onUpdateData({ equity_unit_price: value })
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
