interface BundleRequestParams {
  fetch: (code: string, cType: number) => Promise<any[]>;
  codes: string[];
}

export const bundleRequest = async (params: BundleRequestParams) => {
  const { fetch, codes } = params;

  const reports = await Promise.all(codes.map(async (code) => {
    // 开始获取
    for (let j = 4; j > 0; j--) {
      const data = await fetch(code, j);
      if (!data.length) {
        continue;
      }
      return data;
    }
  }));

  return reports;
};
