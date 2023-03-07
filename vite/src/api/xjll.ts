import { bundleRequest } from '@/utils/bundleRequest';
import { fetchReport } from '@/utils/fetchReport';

const hostname = '//emweb.securities.eastmoney.com'
const path = '/PC_HSF10/NewFinanceAnalysis/xjllbAjaxNew'

/** 获取近六年资产负债表 */
const fetchLastSixYearsXJLLReport = async (code: string, cType: number): Promise<any[]> => {
  return await fetchReport({
    hostname,
    path,
    code,
    cType,
  });
};

export const fetchXJLL = async (codes: string[]) => {
  const bundles = await bundleRequest({
    fetch: fetchLastSixYearsXJLLReport,
    codes,
  });
  bundles.forEach((bundle) => {
    // 根据时间排序
    bundle.sort((a, b) => {
      const a_year = Number(a['REPORT_DATE'].split('-')[0]);
      const b_year = Number(b['REPORT_DATE'].split('-')[0]);
      return a_year - b_year;
    });
  });
  return bundles;
};
