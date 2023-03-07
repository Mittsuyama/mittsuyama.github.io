import { Report } from '@/types/report';
import { fetchZCFZ } from './zcfz';
import { fetchLR } from './lr';
import { fetchXJLL } from './xjll';

export const fetchStocks = async (codes: string[]) => {
  const zcfz = await fetchZCFZ(codes);
  const lr = await fetchLR(codes);
  const xjll = await fetchXJLL(codes);

  const res = [];
  zcfz.forEach((reports, i) => {
    const totalReport = [];
    reports.forEach((report, j) => {
      totalReport.push({
        ...report,
        ...lr[i][j],
        ...xjll[i][j],
      });
    });
    res.push(totalReport);
  });

  return res as Report[][];
};
