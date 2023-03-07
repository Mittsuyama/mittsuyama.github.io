const url = `//data.eastmoney.com/dataapi/xuangu/list\
?st=CHANGE_RATE\
&sr=-1\
&ps=50\
&p=1\
&sty=SECUCODE%2CSECURITY_CODE%2CSECURITY_NAME_ABBR%2CNEW_PRICE%2CCHANGE_RATE%2CVOLUME_RATIO%2CHIGH_PRICE%2CLOW_PRICE%2CPRE_CLOSE_PRICE%2CVOLUME%2CDEAL_AMOUNT%2CTURNOVERRATE%2CPE9%2CTOTAL_MARKET_CAP%2CROE_WEIGHT%2CLISTING_DATE%2CINDUSTRY\
&filter=\
(${encodeURIComponent('PE9>=0.00')})\
(${encodeURIComponent('PE9<=30.00')})\
(${encodeURIComponent('TOTAL_MARKET_CAP>=30000000000')})\
(${encodeURIComponent('ROE_WEIGHT>=10.00')})\
(${encodeURIComponent('@LISTING_DATE="OVER5Y"')})\
&source=SELECT_SECURITIES\
&client=WEB`;

export async function fetchDataWithRoughlyFilter() {
  const res = await fetch(url);
  return (await res.json()).result.data.map((item: any) => ({ ...item, key: item.SECUCODE }));
}
