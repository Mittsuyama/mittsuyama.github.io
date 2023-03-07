import React, { memo, useEffect, useMemo, useState } from 'react';
import { Spin } from 'antd';
import { charts } from '@/utils/reportAnalysis';
import { fetchStocks } from '@/api/report';
import { Report } from '@/types/report';
import { Chart } from '@/components/Chart';

interface StockInfoPanelProps {
  codes: string[];
}

export const StockInfoPanel = memo((props: StockInfoPanelProps) => {
  const [loading, setLoading] = useState(false);
  const [stocks, setStocks] = useState<Report[][]>([]);

  const codes = useMemo(
    () => {
      return props.codes.map((item) => {
        const [code, quan_a] = item.split('.');
        return `${quan_a}${code}`;
      });
    },
    [props.codes]
  );

  useEffect(
    () => {
      if (!codes.length) {
        return;
      }
      setLoading(true);
      let didCancel = false;
      (async () => {
        const res = await fetchStocks(codes);
        if (!didCancel) {
          setStocks(res);
        }
        setLoading(false);
      })();
      return () => {
        didCancel = true;
      };
    },
    [codes],
  );

  if (loading) {
    return (
      <div className="flex items-center h-full w-full justify-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-10">
      {charts.map((chart) => (
        <Chart
          key={chart.title}
          stocks={stocks}
          func={chart.func}
          title={chart.title}
          danger={chart.danger}
        />
      ))}
    </div>
  );
}, (prev, next) => {
  if (prev.codes.length !== next.codes.length) {
    return false;
  }
  for (let i = 0; i < prev.codes.length; i++) {
    if (prev.codes[i] !== next.codes[i]) {
      return false;
    }
  }
  return true;
});
