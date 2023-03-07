import { memo, FunctionComponent } from 'react';
import { Report } from '@/types/report';

interface FCProps {
  stocks: Report[][];
}

export function ReportsMemo<P extends FCProps>(Component: FunctionComponent<P>) {
  return memo(Component, (prev, next) => {
    if (prev.stocks.length !== next.stocks.length) {
      return false;
    }
    for (let i = 0; i < prev.stocks.length; i++) {
      if (prev.stocks[i][0]['SECUCODE'] !== next.stocks[i][0]['SECUCODE']) {
        return false;
      }
    }
    return true;
  });
}
