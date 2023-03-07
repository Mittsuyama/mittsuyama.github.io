import React, { useEffect, useMemo, useState } from 'react';
import { Table, Drawer, Button, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { StockInfoPanel } from '@/components/StockInfoPanel';
import { fetchDataWithRoughlyFilter } from '@/api/filter';

export default function Home() {
  const [data, setData] = useState<Array<any>>([]);
  const [open, setOpen] = useState(false);
  const [codes, setCodes] = useState([]);
  const [industry, setIndustry] = useState('');

  const columns: ColumnsType = useMemo(() => [
    {
      title: '代码',
      dataIndex: 'SECUCODE',
      width: 130,
    },
    {
      title: '名称',
      dataIndex: 'SECURITY_NAME_ABBR',
      width: 150,
      render (data, record: any) {
        return (
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => {
              setOpen(true);
              setCodes([record['SECUCODE']]);
            }}
          >
            {data}
          </span>
        );
      },
    },
    {
      title: '行业',
      dataIndex: 'INDUSTRY',
      width: 150,
      render(data) {
        return (
          <Tooltip title="点击筛选">
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => {
                setIndustry(data);
              }}
            >
              {data}
            </span>
          </Tooltip>
        );
      },
      sorter: {
        compare: (a, b) => a['INDUSTRY'] < b['INDUSTRY'] ? -1 : 1,
      },
    },
    {
      title: '价格',
      dataIndex: 'HIGH_PRICE',
      render(data) {
        return <span>{data.toFixed(2)}</span>
      },
      sorter: {
        compare: (a, b) => Number(a['HIGH_PRICE']) - Number(b['HIGH_PRICE']),
        multiple: 2,
      },
      defaultSortOrder: 'ascend',
    },
    {
      title: 'PE',
      dataIndex: 'PE9',
      sorter: {
        compare: (a, b) => Number(a['PE9']) - Number(b['PE9']),
        multiple: 1,
      },
      render(data) {
        return <span>{data.toFixed(2)}</span>
      },
      defaultSortOrder: 'descend',
    },
    {
      title: 'ROE',
      dataIndex: 'ROE_WEIGHT',
      sorter: {
        compare: (a, b) => Number(a['ROE_WEIGHT']) - Number(b['ROE_WEIGHT']),
        multiple: 3,
      },
      defaultSortOrder: 'descend',
    },
  ], []);

  useEffect(
    () => {
      (async () => {
        const res = await fetchDataWithRoughlyFilter();
        setData(res);
      })();
    },
    [],
  );

  return (
    <>
      <div className="h-full p-4">
        <div className="left-5 bottom-8 mb-2">
          <Button
            type="primary"
            onClick={() => setOpen(true)}
            className="mb-4 mr-6"
          >
            对比
          </Button>
          {industry && (
            <>
              <span className="mr-2">
                当前筛选行业: {industry}
              </span>
              <Button
                type="primary"
                onClick={() => setIndustry('')}
                className="mb-4"
              >
                取消筛选
              </Button>
            </>
          )}
        </div>
        <Table
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: codes,
            onChange(keys) {
              setCodes(keys);
            },
          }}
          pagination={{
            pageSize: 15,
          }}
          columns={columns}
          dataSource={data.filter((item) => !industry || item['INDUSTRY'] === industry)}
        />
      </div>
      <Drawer
        title="无值表示被除数为〇"
        width="calc(100% - 250px)"
        open={open}
        onClose={() => setOpen(false)}
        maskClosable
      >
        <StockInfoPanel codes={codes} />
      </Drawer>
    </>
  );
}
