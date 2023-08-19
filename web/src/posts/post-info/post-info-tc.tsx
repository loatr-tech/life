import React from 'react';
import { Divider } from 'antd';
import './post-info-tc.scss';
import { displayCurreny } from '../../_utils/number';
import {
  MetadataLabel,
  POST_INFOS,
  POST_METADATA_TC,
} from '../../_utils/post-infos';
import PostInfoLabel from '../../post/post-info-label';

function InfoField({
  metadataLabel,
  value,
}: {
  metadataLabel: MetadataLabel;
  value: any;
}) {
  return (
    <div className="post-info-field">
      <PostInfoLabel metadataLabel={metadataLabel} />
      <div>{value}</div>
    </div>
  );
}

function PostInfoTC({ infos }: any) {
  return (
    <>
      <div className="post-info-tc">
        {/*****************
            Basic info
        *****************
       */}
        <div>
          <h2 className="post-info__title">
            <i className="fa-solid fa-address-card"></i> 基本信息
          </h2>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.COMPANY_NAME}
              value={infos.company_name}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.POSITION}
              value={infos.position}
            />
          </section>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.LEVEL}
              value={infos.title_level}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.DATE}
              value={`${infos.year}-${infos.month}`}
            />
          </section>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.DEGREE}
              value={POST_INFOS.TC.DEGREE[infos.highest_degree]}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.YOE}
              value={`${infos.year_of_experience}年`}
            />
          </section>
        </div>

        {/*****************
          Compensation
        *****************
       */}
        <div>
          <h2 className="post-info__title">
            <i className="fa-solid fa-sack-dollar"></i> 薪资
          </h2>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.BASE}
              value={`$${displayCurreny(infos.base_salary)}`}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.BONUS}
              value={`${infos.annual_bonus}%`}
            />
          </section>

          {/* Sign-on Bonus */}
          <h4 className="post-info__section-title">签字费(Sign-on bonus)</h4>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.SIGNON_1ST}
              value={`$${displayCurreny(infos.signon_first_year)}`}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.SIGNON_2ND}
              value={`$${displayCurreny(infos.signon_second_year)}`}
            />
          </section>

          {/* Equity */}
          <h4 className="post-info__section-title">股票(Equity)</h4>
          <section className="post-info-row">
            <InfoField
              metadataLabel={POST_METADATA_TC.EQUITY_TYPE}
              value={POST_INFOS.TC.EQUITY[infos.equity_type]}
            />
            <InfoField
              metadataLabel={POST_METADATA_TC.GRANT_TYPE}
              value={POST_INFOS.TC.EQUITY[infos.equity_grant_type]}
            />
            {infos.equity_grant_type === 'total_value' && (
              <InfoField
                metadataLabel={POST_METADATA_TC.TOTAL_VALUE}
                value={`$${displayCurreny(infos.total_equity_amount)}`}
              />
            )}
            {infos.equity_grant_type === 'total_units' && (
              <>
                <InfoField
                  metadataLabel={POST_METADATA_TC.TOTAL_UNITS}
                  value={infos.total_equity_units}
                />
                {infos.equity_type === 'option' ? (
                  <InfoField
                    metadataLabel={POST_METADATA_TC.STRIKE_PRICE}
                    value={`$${displayCurreny(infos.equity_strike_price)}`}
                  />
                ) : (
                  <InfoField
                    metadataLabel={POST_METADATA_TC.UNIT_PRICE}
                    value={`$${displayCurreny(infos.equity_unit_price)}`}
                  />
                )}
              </>
            )}
          </section>
        </div>
      </div>

      <Divider />
      {/* Summary */}
      <div className="post-info__summary">
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
      </div>
    </>
  );
}

export default PostInfoTC;
