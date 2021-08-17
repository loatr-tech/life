import React, { useEffect, useState } from 'react';
import './calculator-offer.scss';

const OFFERS = [
  {
    company: 'Apple',
    base: 200000,
    rsu: 600000,
    annual_bonus: 0.1,
    signon: [75000, 25000],
    yoy_sotck_appreciation: 1.25,
    yoy_base_appreciation: 1.035,
    rsu_refresher: 100000,
  },
];

function CalculatorOffer() {
  const [offers, setOffers] = useState<any[]>(OFFERS);
  useEffect(() => {
    const editedOffers = [...OFFERS].map(offer => {
      const total_comps = [];
      for (let i = 0; i < 4; i++) {
        let tc: any = {};
        if (i > 0) {
          tc.base = Math.round(
            total_comps[i - 1].base * offer.yoy_base_appreciation
          );
          tc.rsu = Math.round(
            // RSU with initial grant after stock appreciation
            (offer.rsu / 4) * Math.pow(offer.yoy_sotck_appreciation, i) +
            // Refresher
            (offer.rsu_refresher / 4) * (i - 1)
          );
        } else {
          tc.base = offer.base;
          tc.rsu = offer.rsu/4;
        }
        tc.total_comp = Math.round(
          tc.base * (1 + offer.annual_bonus) + tc.rsu + (offer.signon[i] || 0)
        );
        total_comps.push(tc);
      }
      const accumulated = [];
      for (let i = 0; i < total_comps.length; i++) {
        let acc: any = {}
        if (i > 0) {
          acc = {
            cash: accumulated[i-1].cash + total_comps[i].total_comp - total_comps[i].rsu,
            rsu: Math.round(accumulated[i-1].rsu * offer.yoy_sotck_appreciation + total_comps[i].rsu),
          };
        } else {
          acc = {
            cash: total_comps[i].total_comp - total_comps[i].rsu,
            rsu: total_comps[i].rsu,
          };
        }
        acc.accumulated = acc.cash + acc.rsu;
        accumulated.push(acc);
      }
      return {
        ...offer,
        total_comps,
        accumulated,
      };
    })
    setOffers(editedOffers);
  }, []);

  return (
    <table className="calculator-offer">
      <thead>
        <tr>
          <th rowSpan={2}>Company</th>
          <th colSpan={3}>Basic</th>
          <th colSpan={2}>Sign-on</th>
          <th colSpan={3}>Raises</th>
          <th colSpan={4}>TC each year</th>
          <th rowSpan={2}>Total income</th>
        </tr>
        <tr>
          <th>Base</th>
          <th>RSU</th>
          <th>Bonus</th>
          <th>(1st yr)</th>
          <th>(2nd yr)</th>
          <th>RSU Refresher</th>
          <th>Base up%</th>
          <th>Stock up%</th>
          <th>Year 1</th>
          <th>Year 2</th>
          <th>Year 3</th>
          <th>Year 4</th>
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => {
          return [
            <tr key={offer.company}>
              <td rowSpan={2}>{offer.company}</td>
              <td>{`${Math.round(offer.base / 1000)}k`}</td>
              <td>{`${Math.round(offer.rsu / 1000)}k`}</td>
              <td>{`${offer.annual_bonus * 100}%`}</td>
              <td>{`${Math.round((offer.signon[0] || 0) / 1000)}k`}</td>
              <td>{`${Math.round((offer.signon[1] || 0) / 1000)}k`}</td>
              <td>{`${Math.round(offer.rsu_refresher / 1000)}k`}</td>
              <td>{offer.yoy_base_appreciation}</td>
              <td>{offer.yoy_sotck_appreciation}</td>
              {offer.total_comps?.map((tc: any, index: number) => {
                return (
                  <td key={index}>{`${Math.round(tc.total_comp / 1000)}k`}</td>
                );
              })}
              <td>
                {offer.total_comps?.reduce(
                  (total: number, tc: any) => total + tc.total_comp,
                  0
                )}
              </td>
            </tr>,
            <tr key={`${offer.company}_acc`}>
              <td colSpan={8}>Accumulated</td>
              {offer.accumulated?.map((acc: any, index: number) => {
                return (
                  <td key={index}>{`${(acc.accumulated / 1000000).toFixed(
                    2
                  )}m`}</td>
                );
              })}
            </tr>,
          ];
        })}
      </tbody>
    </table>
  );
}

export default CalculatorOffer;
