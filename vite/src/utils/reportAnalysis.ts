import { LR_ITEM_TO_KEY, ZCFZ_ITEM_TO_KEY, XJLL_ITEM_TO_KEY } from '@/constants/item';
import { Report } from '@/types/report';

type ItemName = keyof typeof LR_ITEM_TO_KEY | keyof typeof ZCFZ_ITEM_TO_KEY | keyof typeof XJLL_ITEM_TO_KEY;

const getReportItem = (report: Report, name: ItemName, isYoy?: boolean): number => {
  // deno-lint-ignore no-explicit-any
  const key = (LR_ITEM_TO_KEY as any)[name] || (XJLL_ITEM_TO_KEY as any)[name] || (ZCFZ_ITEM_TO_KEY as any)[name] || '';
  return Number(report[`${key}${isYoy ? '_YOY' : ''}`]);
}

export type GenFunc = (prev: Report, curr: Report) => number;

export const genChartData = (stocks: Report[][], func: GenFunc) => {
  const values = stocks
    .map((reports) => {
      const res = [];
      for (let i = 1; i < reports.length; i++) {
        res.push({
          type: String(reports[i]['SECURITY_NAME_ABBR']),
          year: String(reports[i]['REPORT_DATE']).split('-')[0],
          value: func(reports[i - 1], reports[i]),
        });
      }
      return res;
    })
    .reduce((prev, curr) => prev.concat(curr), []);

  return values;
}

interface ChartData {
  func: GenFunc;
  title: string;
  danger?: number;
}

export const charts: ChartData[] = [
  {
    title: '利息保障倍数',
    func(_, curr) {
      const interestCost = getReportItem(curr, 'l-lxfy-利息费用');
      if (!interestCost) {
        return 0;
      }
      return (
        getReportItem(curr, 'l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润')
          + getReportItem(curr, 'l-sjjfj-税金及附加')
          + getReportItem(curr, 'l-lxfy-利息费用')
      ) / getReportItem(curr, 'l-lxfy-利息费用')
    },
    danger: 3,
  },
  {
    title: '营业利润率 (%)',
    func(_, curr) {
      const operatingRevenue = getReportItem(curr, 'l-yysr-营业收入');
      const grossProfit = getReportItem(curr, 'l-yysr-营业收入') - getReportItem(curr, 'l-yycb-营业成本');
      return grossProfit / operatingRevenue * 100;
    },
    danger: 50,
  },
  {
    title: '应收帐款占流动资产比率 (%)',
    func(_, curr) {
      const totatAssets = getReportItem(curr, 'z-ldzchj-流动资产合计');
      const acntRec = getReportItem(curr, 'z-yszk-应收账款');
      return acntRec / totatAssets * 100;
    },
    danger: 30,
  },
  {
    title: '变现能力',
    func(_, curr) {
      const profit = getReportItem(curr, 'l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润');
      const netCash = getReportItem(curr, 'x-jyhdcsdxjllje-经营活动产生的现金流量净额 (operate)')
      return netCash / profit;
    },
    danger: 1,
  },
  {
    title: '扣非 ROE (%)',
    func(_, curr) {
      return getReportItem(curr, 'l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润') / (
        getReportItem(curr, 'z-zczj-资产总计') - getReportItem(curr, 'z-fzhj-负债合计')
      ) * 100
    },
    danger: 15,
  },
  {
    title: '费用率 (%)',
    func(_, curr) {
      const saleCost = getReportItem(curr, 'l-xsfy-销售费用');
      const manageCost = getReportItem(curr, 'l-glfy-管理费用');
      const financeCost = Math.max(getReportItem(curr, 'l-cwfy-财务费用'), 0);
      const grossProfit = getReportItem(curr, 'l-yysr-营业收入') - getReportItem(curr, 'l-yycb-营业成本');
      return (saleCost + manageCost + financeCost) / grossProfit * 100;
    },
    danger: 50,
  },
  {
    title: '带息流动负债占比 (%)',
    func(_, curr) {
      const shortTermBorrow = getReportItem(curr, 'z-dqjk-短期借款');
      const notePayable = getReportItem(curr, 'z-yfpj-应付票据');
      if (!getReportItem(curr, 'z-ldfzhj-流动负债合计')) {
        return undefined;
      }
      return (shortTermBorrow + notePayable) / getReportItem(curr, 'z-ldfzhj-流动负债合计') * 100;
    },
    danger: 60,
  },
  {
    title: '应收帐款周转天数',
    func(prev, curr) {
      return (getReportItem(curr, 'z-yszk-应收账款') + getReportItem(prev, 'z-yszk-应收账款')) / 2
        / getReportItem(curr, 'l-yysr-营业收入')
        * 365;
    },
  },
  {
    title: '货币资金占比 (%)',
    func(_, curr) {
      return getReportItem(curr, 'z-hbzj-货币资金') / getReportItem(curr, 'z-ldzchj-流动资产合计') * 100;
    },
    danger: 30,
  },
  {
    title: '存货占比 (%)',
    func(_, curr) {
      return getReportItem(curr, 'z-ch-存货') / getReportItem(curr, 'z-ldzchj-流动资产合计') * 100;
    }
  },
  {
    title: '资产负债率 (%)',
    func(_, curr) {
      return getReportItem(curr, 'z-fzhj-负债合计') / getReportItem(curr, 'z-zczj-资产总计') * 100;
    },
    danger: 50,
  },
  {
    title: '短期带息负债/非流动负债比',
    func(_, curr) {
      if (!getReportItem(curr, 'z-cqjk-长期借款')) {
        return undefined;
      }
      return (
        getReportItem(curr, 'z-dqjk-短期借款')
          + getReportItem(curr, 'z-yfpj-应付票据')
          + getReportItem(curr, 'z-yndqdldfz-一年内到期的非流动负债')
      ) / (
        getReportItem(curr, 'z-fldfzhj-非流动负债合计')
      );
    },
  },
  {
    title: '现金/有息负债比',
    func(_, curr) {
      const interestBearingDebt = getReportItem(curr, 'z-dqjk-短期借款') + getReportItem(curr, 'z-yfpj-应付票据');
      if (!interestBearingDebt) {
        return undefined;
      }
      return (
        getReportItem(curr, 'z-hbzj-货币资金') + getReportItem(curr, 'z-yspj-应收票据')
      ) / interestBearingDebt;
    },
  },
  {
    title: '其他应付款 + 其他流动负债占比 (%)',
    func(_, curr) {
      return (
        getReportItem(curr, 'z-qtyfk-其他应付款') + getReportItem(curr, 'z-qtldfz-其他流动负债')
      ) / getReportItem(curr, 'z-ldfzhj-流动负债合计') * 100;
    },
  },
];
