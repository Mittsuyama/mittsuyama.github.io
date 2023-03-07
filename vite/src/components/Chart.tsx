import React from 'react';
import { Report } from '@/types/report';
import { Line, LineConfig } from '@ant-design/charts';
import { ReportsMemo } from '@/components/ReportsMemo';
import { genChartData, GenFunc } from '@/utils/reportAnalysis';
import { randomColors } from '@/constants/randomColors';

interface ChartProps {
  stocks: Report[][];
  title: string;
  func: GenFunc;
  danger?: number;
}

export const Chart = ReportsMemo((props: ChartProps) => {
  const { stocks, title, func, danger } = props;

  const data = genChartData(stocks, func);

  const configs: LineConfig = {
    data,
    xField: 'year',
    yField: 'value',
    annotations: danger ? [{
      type: 'line',
      id: 'line',
      start: ['min', danger],
      end: ['max', danger],
      style: {
        stroke: '#ff0000',
        lineWidth: 1.5,
        lineDash: [8, 8],
      },
    }] : undefined,
    tooltip: {
      formatter(data) {
        return {
          name: data.type,
          value: data.value.toFixed(2),
        };
      },
    },
    seriesField: 'type',
    color: randomColors,
    height: 260,
  };

  return (
    <div>
      <div className="text-lg mb-3">{title}</div>
      <Line {...configs} />
    </div>
  )
});
