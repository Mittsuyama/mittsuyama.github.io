export type ReportParams = {
  /** 4 */
  companyType: number;
  /** 0 */
  reportDateType: number;
  /** 2 */
  reportType: number;
  dates: string[];
  code: string;
};

export type Report = Record<string, string | null | undefined | number>;
