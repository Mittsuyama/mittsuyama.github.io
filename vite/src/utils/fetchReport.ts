import { DATES } from '@/constants/report';
import { ReportParams } from '@/types/report';
import { get } from './get';

interface FetchRerpotParams {
  code: string;
  cType: number;
  hostname: string;
  path: string;
}

export const fetchReport = async (params: FetchRerpotParams) => {
  const { code, cType, hostname, path } = params;

  const body: Omit<ReportParams, 'dates'> = {
    companyType: cType,
    reportDateType: 0,
    reportType: 1,
    code,
  };

  const [res1, res2] = await Promise.all([
    get({
      url: `${hostname}${path}`,
      body: {
        ...body,
        dates: DATES[0],
      },
    }),
    get({
      url: `${hostname}${path}`,
      body: {
        ...body,
        dates: DATES.slice(1),
      },
    })
  ]);

  if (res1.data && res2.data) {
    return res1.data.concat(res2.data);
  } else {
    return [];
  }
};
