import React from 'react';
import { Divider } from 'antd';
import './post-info-tc.scss';
import { displayCurreny } from '../../_utils/number';
import { POST_INFOS } from '../../_utils/post-infos';

function InfoField({ name, value }: any) {
  return (
    <div className="post-info-field">
      <h4>{name}</h4>
      <div>{value}</div>
    </div>
  );
}

function PostInfoTC({ infos }: any) {
  return (
    <div className="post-info-tc">
      <h2 className="post-info__title">基本信息</h2>
      <section className="post-info-row">
        <InfoField name="公司名称" value={infos.company_name} />
        <InfoField name="工种(Position)" value={infos.position} />
      </section>
      <section className="post-info-row">
        <InfoField name="级别(Title/Level)" value={infos.title_level} />
        <InfoField name="定薪月份" value={`${infos.year}-${infos.month}`} />
      </section>
      <section className="post-info-row">
        <InfoField
          name="最高学历"
          value={POST_INFOS.TC.DEGREE[infos.highest_degree]}
        />
        <InfoField name="工作经验" value={`${infos.year_of_experience}年`} />
      </section>
      <Divider />

      <h2 className="post-info__title">薪资</h2>
      <section className="post-info-row">
        <InfoField
          name="基本工资(Base)"
          value={`$${displayCurreny(infos.base_salary)}`}
        />
        <InfoField name="奖金(Bonus)" value={`${infos.annual_bonus}%`} />
      </section>

      {/* Sign-on Bonus */}
      <h4 className="post-info__section-title">签字费(Sign-on bonus)</h4>
      <section className="post-info-row">
        <InfoField
          name="第一年"
          value={`$${displayCurreny(infos.signon_first_year)}`}
        />
        <InfoField
          name="第二年"
          value={`$${displayCurreny(infos.signon_second_year)}`}
        />
      </section>

      {/* Equity */}
      <h4 className="post-info__section-title">股票(Equity)</h4>
      <section className="post-info-row">
        <InfoField
          name="股票类型"
          value={POST_INFOS.TC.EQUITY[infos.equity_type]}
        />
        <InfoField
          name="授予方式"
          value={POST_INFOS.TC.EQUITY[infos.equity_grant_type]}
        />
        {infos.equity_grant_type === 'total_value' && (
          <InfoField
            name="4年总值"
            value={`$${displayCurreny(infos.total_equity_amount)}`}
          />
        )}
        {infos.equity_grant_type === 'total_units' && (
          <>
            <InfoField name="4年总股数" value={infos.total_equity_units} />
            <InfoField
              name="授予每股价格"
              value={`$${displayCurreny(infos.equity_unit_price)}`}
            />
            {infos.equity_type === 'option' && (
              <InfoField
                name="授予每股价格"
                value={`$${displayCurreny(infos.equity_strike_price)}`}
              />
            )}
          </>
        )}
      </section>

      {/* Summary */}
      <section className="post-info__summary">
        <h3>总包裹(TC)每年</h3>
        <div></div>
        <p>基本工资 &times; (1 + 奖金%) + 股票/4</p>
        <p>
          ${displayCurreny(infos.base_salary || 0)} &times; (1+
          {infos.annual_bonus || 0}%) + $
          {displayCurreny(infos.total_equity_amount || 0)}/4
        </p>
        <p>
          = $
          {displayCurreny(
            infos.base_salary * (1 + infos.annual_bonus / 100) +
              infos.total_equity_amount / 4
          )}{' '}
          / year
        </p>
      </section>
    </div>
  );
}

export default PostInfoTC;
