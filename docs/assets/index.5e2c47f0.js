var E=Object.defineProperty,e=Object.prototype.hasOwnProperty,_=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,T=(e,_,t)=>_ in e?E(e,_,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[_]=t,z=(E,z)=>{for(var A in z||(z={}))e.call(z,A)&&T(E,A,z[A]);if(_)for(var A of _(z))t.call(z,A)&&T(E,A,z[A]);return E};import{C as A,L as N,S as s,T as l,B as d,F as R,D as c,a as I,b as j,R as O,c as S}from"./vendor.09d0183e.js";!function(E=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(_){const t=new URL(E,location),T=E=>{URL.revokeObjectURL(E.src),E.remove()};self[e]=E=>new Promise(((_,z)=>{const A=new URL(E,t);if(self[e].moduleMap[A])return _(self[e].moduleMap[A]);const N=new Blob([`import * as m from '${A}';`,`${e}.moduleMap['${A}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(N),onerror(){z(new Error(`Failed to import: ${E}`)),T(s)},onload(){_(self[e].moduleMap[A]),T(s)}});document.head.appendChild(s)})),self[e].moduleMap={}}}("/assets/");const x={"z-bxhtzbj-保险合同准备金":"INSURANCE_CONTRACT_RESERVE","z-cczj-拆出资金":"LEND_FUND","z-ch-存货":"INVENTORY","z-cqdtfy-长期待摊费用":"LONG_PREPAID_EXPENSE","z-cqgqtz-长期股权投资":"LONG_EQUITY_INVEST","z-cqjk-长期借款":"LONG_LOAN","z-cqyfk-长期应付款":"LONG_PAYABLE","z-cqyfzgxc-长期应付职工薪酬":"LONG_STAFFSALARY_PAYABLE","z-cqysk-长期应收款":"LONG_RECE","z-crzj-拆入资金":"BORROW_FUND","z-cydsfz-持有待售负债":"HOLDSALE_LIAB","z-cydszc-持有待售资产":"HOLDSALE_ASSET","z-cyzdqtz-持有至到期投资":"HOLD_MATURITY_INVEST","z-dlcxzqk-代理承销证券款":"AGENT_UNDERWRITE_SECURITY","z-dlmmzqk-代理买卖证券款":"AGENT_TRADE_SECURITY","z-dqjk-短期借款":"SHORT_LOAN","z-dysdsfz-递延所得税负债":"DEFER_TAX_LIAB","z-dysdszc-递延所得税资产":"DEFER_TAX_ASSET","z-dysy-递延收益":"DEFER_INCOME","z-ffdkjdk-发放贷款及垫款":"LOAN_ADVANCE","z-fldfzhj-非流动负债合计":"TOTAL_NONCURRENT_LIAB","z-fldfzphxm-非流动负债平衡项目":"NONCURRENT_LIAB_BALANCE","z-fldfzqtxm-非流动负债其他项目":"NONCURRENT_LIAB_OTHER","z-fldzchj-非流动资产合计":"TOTAL_NONCURRENT_ASSETS","z-fldzcphxm-非流动资产平衡项目":"NONCURRENT_ASSET_BALANCE","z-fldzcqtxm-非流动资产其他项目":"NONCURRENT_ASSET_OTHER","z-fzhgdqyqtxm-负债和股东权益其他项目":"LIAB_EQUITY_OTHER","z-fzhgdqyzj-负债和股东权益总计":"TOTAL_LIAB_EQUITY","z-fzhj-负债合计":"TOTAL_LIABILITIES","z-fzjgdqyphxm-负债及股东权益平衡项目":"LIAB_EQUITY_BALANCE","z-fzphxm-负债平衡项目":"LIAB_BALANCE","z-fzqtxm-负债其他项目":"LIAB_OTHER","z-gcwz-工程物资":"PROJECT_MATERIAL","z-gdqyhj-股东权益合计":"TOTAL_EQUITY","z-gdqyqtxm-股东权益其他项目":"EQUITY_OTHER","z-gdzc-固定资产":"FIXED_ASSET","z-gdzcql-固定资产清理":"FIXED_ASSET_DISPOSAL","z-gjqyphxm-股东权益平衡项目":"EQUITY_BALANCE","z-gsymgsgdqyphxm-归属于母公司股东权益平衡项目":"PARENT_EQUITY_BALANCE","z-gsymgsgdqyqtsxm-归属于母公司股东权益其他项目":"PARENT_EQUITY_OTHER","z-gsymgsgdqyzj-归属于母公司股东权益总计":"TOTAL_PARENT_EQUITY","z-hbzj-货币资金":"MONETARYFUNDS","z-htfz-合同负债":"CONTRACT_LIAB","z-htzc-合同资产":"CONTRACT_ASSET","z-jsbfj-结算备付金":"SETTLE_EXCESS_RESERVE","z-jyxjrfz-交易性金融负债 1":"TRADE_FINLIAB_NOTFVTPL","z-jyxjrfz-交易性金融负债 2":"TRADE_FINLIAB","z-jyxjrzc-交易性金融资产 1":"TRADE_FINASSET_NOTFVTPL","z-jyxjrzc-交易性金融资产 2":"TRADE_FINASSET","z-kcg-库存股":"TREASURY_SHARES","z-kfzc-开发支出":"DEVELOP_EXPENSE","z-kgcsjrzc-可供出售金融资产":"AVAILABLE_SALE_FINASSET","z-ldfzhj-流动负债合计":"TOTAL_CURRENT_LIAB","z-ldfzphxm-流动负债平衡项目":"CURRENT_LIAB_BALANCE","z-ldfzqtxm-流动负债其他项目":"CURRENT_LIAB_OTHER","z-ldzchj-流动资产合计":"TOTAL_CURRENT_ASSETS","z-ldzcphxm-流动资产平衡项目":"CURRENT_ASSET_BALANCE","z-ldzcqtxm-流动资产其他项目":"CURRENT_ASSET_OTHER","z-mchgjrzck-卖出回购金融资产款":"SELL_REPO_FINASSET","z-mrfsjrzc-买入返售金融资产":"BUY_RESALE_FINASSET","z-nbyfk-内部应付款":"INTERNAL_PAYABLE","z-nbysk-内部应收款":"INTERNAL_RECE","z-nfpxjgl-拟分配现金股利":"ASSIGN_CASH_DIVIDEND","z-qtfldjrzc-其他非流动金融资产":"OTHER_NONCURRENT_FINASSET","z-qtfldzc-其他非流动资产":"OTHER_NONCURRENT_ASSET","z-qtldfz-其他非流动负债":"OTHER_NONCURRENT_LIAB","z-qtldfz-其他流动负债":"OTHER_CURRENT_LIAB","z-qtldzc-其他流动资产":"OTHER_CURRENT_ASSET","z-qtqygj-其他权益工具 1":"OTHER_EQUITY_TOOL","z-qtqygj-其他权益工具 2":"OTHER_EQUITY_OTHER","z-qtqygjtz-其他权益工具投资":"OTHER_EQUITY_INVEST","z-qtyfk-其他应付款":"OTHER_PAYABLE","z-qtyfkhj-其他应付款合计":"TOTAL_OTHER_PAYABLE","z-qtysk-其他应收款":"OTHER_RECE","z-qtyskhj-其他应收款合计":"TOTAL_OTHER_RECE","z-qtzhsy-其他综合收益":"OTHER_COMPRE_INCOME","z-qtzqtz-其他债权投资":"OTHER_CREDITOR_INVEST","z-rczj-融出资金":"FIN_FUND","z-scxswzc-生产性生物资产":"PRODUCTIVE_BIOLOGY_ASSET","z-sjyj-审计意见(境内)":"OPINION_TYPE","z-sjyj-审计意见(境外)":"OSOPINION_TYPE","z-ssgdqy-少数股东权益":"MINORITY_EQUITY","z-sszb-实收资本（或股本）":"SHARE_CAPITAL","z-sy-商誉":"GOODWILL","z-syqzc-使用权资产":"USERIGHT_ASSET","z-tzxfdc-投资性房地产":"INVEST_REALESTATE","z-wbbbzsce-外币报表折算差额":"CONVERT_DIFF","z-wfplr-未分配利润":"UNASSIGN_RPOFIT","z-wqddtzss-未确定的投资损失":"UNCONFIRM_INVEST_LOSS","z-wxzc-无形资产":"INTANGIBLE_ASSET","z-xsckjtycf-吸收存款及同业存放":"ACCEPT_DEPOSIT_INTERBA","z-xzyynjk-向中央银行借款":"LOAN_PBC","z-ybfxzb-一般风险准备":"GENERAL_RISK_RESERVE","z-yfdqzq-应付短期债券":"SHORT_BOND_PAYABLE","z-yffbzk-应付分保账款":"REINSURE_PAYABLE","z-yfgl-应付股利":"DIVIDEND_PAYABLE","z-yfkx-预付款项":"PREPAYMENT","z-yflx-应付利息":"INTEREST_PAYABLE","z-yfpj-应付票据":"NOTE_PAYABLE","z-yfpjjyszk-应付票据及应付账款":"NOTE_ACCOUNTS_PAYABLE","z-yfsxfjyj-应付手续费及佣金":"FEE_COMMISSION_PAYABLE","z-yfyxz-应付永续债":"PERPETUAL_BOND_PAYBALE","z-yfzgxc-应付职工薪酬":"STAFF_SALARY_PAYABLE","z-yfzk-应付账款":"ACCOUNTS_PAYABLE","z-yfzq-应付债券":"BOND_PAYABLE","z-ygyjzjlqbdjrdqsydjrzc-以公允价值计量且其变动计入当期损益的金融资产":"FVTPL_FINASSET","z-ygyjzjlqqbdjrdqsydjrfz-以公允价值计量且其变动计入当期损益的金融负债":"FVTPL_FINLIAB","z-ygyjzjlqqbdjrqtzhsydjrzc-以公允价值计量且其变动计入其他综合收益的金融资产":"FVTOCI_FINASSET","z-ygyjzjqqqbdjrqtzhsydjrzcfld-以公允价值计量且其变动计入其他综合收益的金融资产（非流动）":"FVTOCI_NCFINASSET","z-yjfz-预计负债":"PREDICT_LIAB","z-yjldfz-预计流动负债":"PREDICT_CURRENT_LIAB","z-yjsf-应交税费":"TAX_PAYABLE","z-yndqdfldzc一年内到期的非流动资产":"NONCURRENT_ASSET_1YEAR","z-yndqdldfz-一年内到期的非流动负债":"NONCURRENT_LIAB_1YEAR","z-yqzc-油气资产":"OIL_GAS_ASSET","z-ysbf-应收保费":"PREMIUM_RECE","z-ysbfhtzbj-应收分保合同准备金":"RC_RESERVE_RECE","z-ysbtk-应收补贴款":"SUBSIDY_RECE","z-ysckts-应收出口退税":"EXPORT_REFUND_RECE","z-ysfbzk-应收分保账款":"REINSURE_RECE","z-ysgl-应收股利":"DIVIDEND_RECE","z-ysjrfz-衍生金融负债":"DERIVE_FINLIAB","z-ysjrzc-衍生金融资产":"DERIVE_FINASSET","z-yskx-预收款项":"ADVANCE_RECEIVABLES","z-yskxrz-应收款项融资":"FINANCE_RECE","z-yslx-应收利息":"INTEREST_RECE","z-yspj-应收票据":"NOTE_RECE","z-yspjjyszk-应收票据及应收账款":"NOTE_ACCOUNTS_RECE","z-yszk-应收账款":"ACCOUNTS_RECE","z-ytycbjldjrfz-以摊余成本计量的金融负债":"AMORTIZE_COST_FINLIAB","z-ytycbjldjrfzfld-以摊余成本计量的金融负债（非流动）":"AMORTIZE_COST_NCFINLIAB","z-ytycbjldjrzc-以摊余成本计量的金融资产":"AMORTIZE_COST_FINASSET","z-ytycbjldjrzcfld-以摊余成本计量的金融资产（非流动）":"AMORTIZE_COST_NCFINASSET","z-yxg-优先股":"PREFERRED_SHARES","z-yxgyfzq-优先股(应付债券)":"PREFERRED_SHARES_PAYBALE","z-yxz-永续债":"PERPETUAL_BOND","z-yygj-盈余公积":"SURPLUS_RESERVE","z-zbgj-资本公积":"CAPITAL_RESERVE","z-zcfzb-资产负债表":"REPORT_DATE","z-zcphxm-资产平衡项目":"ASSET_BALANCE","z-zcqtxm-资产其他项目":"ASSET_OTHER","z-zczj-资产总计":"TOTAL_ASSETS","z-zdyggjzjlqbdjrdqsydjrfz-指定以公允价值计量且其变动计入当期损益的金融负债":"APPOINT_FVTPL_FINLIAB","z-zdygyjzjlqqbdjrdqsydjrzc-指定以公允价值计量且其变动计入当期损益的金融资产":"APPOINT_FVTPL_FINASSET","z-zjgc-在建工程":"CIP","z-zlfz-租赁负债":"LEASE_LIAB","z-zqtz-债权投资":"CREDITOR_INVEST","z-zxcb-专项储备":"SPECIAL_RESERVE","z-zxyfk-专项应付款":"SPECIAL_PAYABLE"},r={"x-bhcjjtzkjzje-保户储金及投资款净增加额":"INSURED_INVEST_ADD","x-bsjxjszdtzhczhdjeqtxm-不涉及现金收支的投资和筹资活动金额其他项目":"UNINVOLVE_INVESTFIN_OTHER","x-cfzyyhhtykxjzje-存放中央银行和同业款项净增加额":"PBC_INTERBANK_ADD","x-chdjs-存货的减少":"INVENTORY_REDUCE","x-chzwszfdxj-偿还债务所支付的现金":"PAY_DEBT_CASH","x-cqdtfytx-长期待摊费用摊销":"LPE_AMORTIZE","x-crzjjzje-拆入资金净增加额":"BORROW_FUND_ADD","x-cwfy-财务费用":"FINANCE_EXPENSE","x-czgdzcwxzchqtcqzcdss-处置固定资产、无形资产和其他长期资产的损失":"DISPOSAL_LONGASSET_LOSS","x-czgdzcwxzchqtcqzcshdxjje-处置固定资产、无形资产和其他长期资产收回的现金净额":"DISPOSAL_LONG_ASSET","x-czhdcsdxjllje-筹资活动产生的现金流量净额":"NETCASH_FINANCE","x-czhdcsdxjlljephxm-筹资活动产生的现金流量净额平衡项目":"FINANCE_NETCASH_BALANCE","x-czhdcsdxjlljeqtxm-筹资活动产生的现金流量净额其他项目":"FINANCE_NETCASH_OTHER","x-czhdxjlcdphxm-筹资活动现金流出的平衡项目":"FINANCE_OUTFLOW_BALANCE","x-czhdxjlcdqtxm-筹资活动现金流出的其他项目":"FINANCE_OUTFLOW_OTHER","x-czhdxjlcxj-筹资活动现金流出小计":"TOTAL_FINANCE_OUTFLOW","x-czhdxjlrdphxm-筹资活动现金流入的平衡项目":"FINANCE_INFLOW_BALANCE","x-czhdxjlrdqtxm-筹资活动现金流入的其他项目":"FINANCE_INFLOW_OTHER","x-czhdxjlrxj-筹资活动现金流入小计":"TOTAL_FINANCE_INFLOW","x-czjyxjrzcjzje-处置交易性金融资产净增加额":"DISPOSAL_TFA_ADD","x-czzgsjqtyydwsddxj-处置子公司及其他营业单位收到的现金":"DISPOSAL_SUBSIDIARY_OTHER","x-dtfydjs-待摊费用的减少":"PREPAID_EXPENSE_REDUCE","x-dysds-递延所得税":"DEFER_TAX","x-dysdsfzzj-递延所得税负债增加":"DT_LIAB_ADD","x-dysdszcjs-递延所得税资产减少":"DT_ASSET_REDUCE","x-dysytx-递延收益摊销":"DEFER_INCOME_AMORTIZE","x-ffdkjdkdjjsej-发放贷款及垫款的净减少额":"LOAN_ADVANCE_REDUCE","x-fpgllrhcflxzfdxj-分配股利、利润或偿付利息支付的现金":"ASSIGN_DIVIDEND_PORFIT","x-fxzqsddxj-发行债券收到的现金":"ISSUE_BOND","x-gdzcbfss-固定资产报废损失":"FA_SCRAP_LOSS","x-gdzchtzxfdczj-固定资产和投资性房地产折旧":"FA_IR_DEPR","x-gdzczjyqzczhscxswzczj-固定资产折旧、油气资产折耗、生产性生物资产折旧":"OILGAS_BIOLOGY_DEPR","x-gjgdzcwxzchqtcqzczfdxj-购建固定资产、无形资产和其他长期资产支付的现金":"CONSTRUCT_LONG_ASSET","x-gmspjslwzfdxj-购买商品、接受劳务支付的现金":"BUY_SERVICES","x-gmzgsssgqezfdxj-购买子公司少数股权而支付的现金":"BUY_SUBSIDIARY_EQUITY","x-gyjzbdss-公允价值变动损失":"FAIRVALUE_CHANGE_LOSS","x-hgywzjjzje-回购业务资金净增加额":"REPO_BUSINESS_ADD","x-hlbddxjjxjdjwdyx-汇率变动对现金及现金等价物的影响":"RATE_CHANGE_EFFECT","x-jlr-净利润":"NETPROFIT","x-jszyhdqckssddxj-减少质押和定期存款所收到的现金":"REDUCE_PLEDGE_TIMEDEPOSITS","x-jyhdcsdxjllje-经营活动产生的现金流量净额 (operate)":"NETCASH_OPERATE","x-jyhdcsdxjllje-经营活动产生的现金流量净额 (operatenote)":"NETCASH_OPERATENOTE","x-jyhdcsdxjlljephxm-经营活动产生的现金流量净额平衡项目":"OPERATE_NETCASH_BALANCE","x-jyhdcsdxjlljeqtxm-经营活动产生的现金流量净额其他项目 (balancenote)":"OPERATE_NETCASH_BALANCENOTE","x-jyhdcsdxjlljeqtxm-经营活动产生的现金流量净额其他项目 (other)":"OPERATE_NETCASH_OTHER","x-jyhdcsdxjlljeqtxm-经营活动产生的现金流量净额其他项目 (othernote)":"OPERATE_NETCASH_OTHERNOTE","x-jyhdxjlcdphxm-经营活动现金流出的平衡项目":"OPERATE_OUTFLOW_BALANCE","x-jyhdxjlcdqtxm-经营活动现金流出的其他项目":"OPERATE_OUTFLOW_OTHER","x-jyhdxjlcxj-经营活动现金流出小计":"TOTAL_OPERATE_OUTFLOW","x-jyhdxjlrdphxm-经营活动现金流入的平衡项目":"OPERATE_INFLOW_BALANCGE","x-jyhdxjlrdqtxm-经营活动现金流入的其他项目":"OPERATE_INFLOW_OTHER","x-jyhdxjlrxj-经营活动现金流入小计":"TOTAL_OPERATE_INFLOW","x-jyxyfxmdzj-经营性应付项目的增加":"OPERATE_PAYABLE_ADD","x-jyxysxmdjs-经营性应收项目的减少":"OPERATE_RECE_REDUCE","x-khckhtycfkxjzje-客户存款和同业存放款项净增加额":"DEPOSIT_INTERBANK_ADD","x-khdkjdkjzje-客户贷款及垫款净增加额":"LOAN_ADVANCE_ADD","x-qcxjjxjdjwye-期初现金及现金等价物余额":"BEGIN_CCE","x-qdjksddxj-取得借款收到的现金":"RECEIVE_LOAN_CASH","x-qdtzsysddxj-取得投资收益收到的现金":"RECEIVE_INVEST_INCOME","x-qdzgsjqtyydwzfdxjje-取得子公司及其他营业单位支付的现金净额":"OBTAIN_SUBSIDIARY_OTHER","x-qmxjjxjdjwye-期末现金及现金等价物余额":"END_CCE","x-qmxjjxjdjwyephxm-期末现金及现金等价物余额平衡项目":"END_CCE_BALANCE","x-qmxjjxjdjwyeqtxm-期末现金及现金等价物余额其他项目":"END_CCE_OTHER","x-qt-其他":"OTHER","x-rzzrgdzc-融资租入固定资产":"FINLEASE_OBTAIN_FA","x-sddqtyczhdygdxj-收到的其他与筹资活动有关的现金":"RECEIVE_OTHER_FINANCE","x-sddqtytzhdygdxj-收到的其他与投资活动有关的现金":"RECEIVE_OTHER_INVEST","x-sddssfh-收到的税收返还":"RECEIVE_TAX_REFUND","x-sdqtyjyhdygdxj-收到其他与经营活动有关的现金":"RECEIVE_OTHER_OPERATE","x-sdybxhtbfqddxj-收到原保险合同保费取得的现金":"RECEIVE_ORIGIC_PREMIUM","x-sdzbxywxjje-收到再保险业务现金净额":"RECEIVE_REINSURE_NET","x-shtzsddxj-收回投资收到的现金":"WITHDRAW_INVEST","x-sjyj-审计意见(境内)":"OPINION_TYPE","x-sqlxsxfjyjdxj-收取利息、手续费及佣金的现金":"RECEIVE_INTEREST_COMMISSION","x-ssgdsy-少数股东损益":"MINORITY_INTEREST","x-tzhdcsdxjllje-投资活动产生的现金流量净额":"NETCASH_INVEST","x-tzhdcsdxjlljephxm-投资活动产生的现金流量净额平衡项目":"INVEST_NETCASH_BALANCE","x-tzhdcsdxjlljeqtxm-投资活动产生的现金流量净额其他项目":"INVEST_NETCASH_OTHER","x-tzhdxjlcdphxm-投资活动现金流出的平衡项目":"INVEST_OUTFLOW_BALANCE","x-tzhdxjlcdqtxm-投资活动现金流出的其他项目":"INVEST_OUTFLOW_OTHER","x-tzhdxjlcxj-投资活动现金流出小计":"TOTAL_INVEST_OUTFLOW","x-tzhdxjlrdphxm-投资活动现金流入的平衡项目":"INVEST_INFLOW_BALANCE","x-tzhdxjlrdqtxm-投资活动现金流入的其他项目":"INVEST_INFLOW_OTHER","x-tzhdxjlrxj-投资活动现金流入小计":"TOTAL_INVEST_INFLOW","x-tzss-投资损失":"INVEST_LOSS","x-tzxfdczj-投资性房地产折旧":"IR_DEPR","x-tzzfdxj-投资支付的现金":"INVEST_PAY_CASH","x-wxzctx-无形资产摊销":"IA_AMORTIZE","x-xjdjwdqcye-现金等价物的期初余额":"BEGIN_CASH_EQUIVALENTS","x-xjdjwdqmye-现金等价物的期末余额":"END_CASH_EQUIVALENTS","x-xjdqcye-现金的期初余额":"BEGIN_CASH","x-xjdqmye-现金的期末余额":"END_CASH","x-xjjxjdjwdjzje-现金及现金等价物的净增加额":"CCE_ADDNOTE","x-xjjxjdjwjzje-现金及现金等价物净增加额":"CCE_ADD","x-xjjxjdjwjzjephxm-现金及现金等价物净增加额平衡项目 (balance)":"CCE_ADD_BALANCE","x-xjjxjdjwjzjephxm-现金及现金等价物净增加额平衡项目 (balancenote)":"CCE_ADD_BALANCENOTE","x-xjjxjdjwjzjeqtxm-现金及现金等价物净增加额其他项目 (other)":"CCE_ADD_OTHER","x-xjjxjdjwjzjeqtxm-现金及现金等价物净增加额其他项目 (othernote)":"CCE_ADD_OTHERNOTE","x-xqtjrjgcrzjjzje-向其他金融机构拆入资金净增加额":"OFI_BF_ADD","x-xssptgldsddxj-销售商品、提供劳务收到的现金":"SALES_SERVICES","x-xstzsddxj-吸收投资收到的现金":"ACCEPT_INVEST_CASH","x-xzyyhjkjzje-向中央银行借款净增加额":"LOAN_PBC_ADD","x-yjfzdzj-预计负债的增加":"PREDICT_LIAB_ADD","x-ynndqdkzhgszq-一年内到期的可转换公司债券":"CONVERT_BOND_1YEAR","x-ytfydzj-预提费用的增加":"ACCRUED_EXPENSE_ADD","x-zcjzzb-资产减值准备":"ASSET_IMPAIRMENT","x-zfbdhldxj-支付保单红利的现金":"PAY_POLICY_BONUS","x-zfdgzsf-支付的各项税费":"PAY_ALL_TAX","x-zfdqtyczhdygdxj-支付的其他与筹资活动有关的现金":"PAY_OTHER_FINANCE","x-zfgzgjwzgzfdxj-支付给职工以及为职工支付的现金":"PAY_STAFF_CASH","x-zflxsxfjyjdxj-支付利息、手续费及佣金的现金":"PAY_INTEREST_COMMISSION","x-zfqtyjyhdygdxj-支付其他与经营活动有关的现金":"PAY_OTHER_OPERATE","x-zfqtytzhdygdxj-支付其他与投资活动有关的现金":"PAY_OTHER_INVEST","x-zfybxhtpfdkxdxj-支付原保险合同赔付等款项的现金":"PAY_ORIGIC_COMPENSATE","x-zgsjzzfgssgddxj-子公司减资支付给少数股东的现金":"SUBSIDIARY_REDUCE_CASH","x-zgsxsssgdtzsddxj-子公司吸收少数股东投资收到的现金":"SUBSIDIARY_ACCEPT_INVEST","x-zgszfgssgddgllr-子公司支付给少数股东的股利、利润":"SUBSIDIARY_PAY_DIVIDEND","x-zjzyhdqckszfdxj-增加质押和定期存款所支付的现金":"ADD_PLEDGE_TIMEDEPOSITS","x-zwzwzb-债务转为资本":"DEBT_TRANSFER_CAPITAL","x-zydkjzje-质押贷款净增加额":"PLEDGE_LOAN_ADD"},y={"l-bdhlzc-保单红利支出":"POLICY_BONUS_EXPENSE","l-bhbfzhbqsxlr-被合并方在合并前实现利润":"PRECOMBINE_PROFIT","l-cwfy-财务费用":"FINANCE_EXPENSE","l-cxjyjlr-持续经营净利润":"CONTINUED_NETPROFIT","l-fbfy-分保费用":"REINSURE_EXPENSE","l-ggjzbdsy-公允价值变动收益":"FAIRVALUE_CHANGE_INCOME","l-glfy-管理费用":"MANAGE_EXPENSE","l-gsymgsgddjlr-归属于母公司股东的净利润":"PARENT_NETPROFIT","l-gsymgsgddqtzhsy-归属于母公司股东的其他综合收益":"PARENT_OCI","l-gsymgsgddzhsyze-归属于母公司股东的综合收益总额":"PARENT_TCI","l-gsyssgddqtzhsy-归属于少数股东的其他综合收益":"MINORITY_OCI","l-gsyssgddzhsyze-归属于少数股东的综合收益总额":"MINORITY_TCI","l-hdsy-汇兑收益":"EXCHANGE_INCOME","l-jbmgsy-基本每股收益":"BASIC_EPS","l-jcktqsy-净敞口套期收益":"NET_EXPOSURE_INCOME","l-jlr-净利润":"NETPROFIT","l-jlrce-净利润差额 (合计平衡项目)":"NETPROFIT_BALANCE","l-jlrqtxm-净利润其他项目":"NETPROFIT_OTHER","l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润":"DEDUCT_PARENT_NETPROFIT","l-lrze-利润总额":"TOTAL_PROFIT","l-lrzephxm-利润总额平衡项目":"TOTAL_PROFIT_BALANCE","l-lxzc-利息支出":"INTEREST_EXPENSE","l-pfzcje-赔付支出净额":"NET_COMPENSATE_EXPENSE","l-qtsy-其他收益":"OTHER_INCOME","l-qtywcb-其他业务成本":"OTHER_BUSINESS_COST","l-qtywsr-其他业务收入":"OTHER_BUSINESS_INCOME","l-qtzhsy-其他综合收益":"OTHER_COMPRE_INCOME","l-dlyqyhhyqydtzsy-对联营企业和合营企业的投资收益":"INVEST_JOINT_INCOME","l-fldzcczjss-非流动资产处置净损失":"NONCURRENT_DISPOSAL_LOSS","l-fldzcczld-非流动资产处置利得":"NONCURRENT_DISPOSAL_INCOME","l-lxfy-利息费用":"FE_INTEREST_EXPENSE","l-lxsr-利息收入 (FE)":"FE_INTEREST_INCOME","l-lxsr-利息收入":"INTEREST_INCOME","l-ssgdsy-少数股东损益":"MINORITY_INTEREST","l-sjyj-审计意见(境内)":"OPINION_TYPE","l-sxfjyjsr-手续费及佣金收入":"FEE_COMMISSION_INCOME","l-sxfjyjzc-手续费及佣金支出":"FEE_COMMISSION_EXPENSE","l-sjjfj-税金及附加":"OPERATE_TAX_ADD","l-sds-所得税":"INCOME_TAX","l-tqbxhtzbjje-提取保险合同准备金净额":"NET_CONTRACT_RESERVE","l-tzsy-投资收益":"INVEST_INCOME","l-tbj-退保金":"SURRENDER_VALUE","l-wqrtzsy-未确认投资损失":"UNCONFIRM_INVEST_LOSS","l-xsmgsy-稀释每股收益":"DILUTED_EPS","l-xsfy-销售费用":"SALE_EXPENSE","l-syjzss-信用减值损失":"CREDIT_IMPAIRMENT_LOSS","l-xyjzss-信用减值损失(新)":"CREDIT_IMPAIRMENT_INCOME","l-yffy-研发费用":"RESEARCH_EXPENSE","l-yzbf-已赚保费":"EARNED_PREMIUM","l-yycb-营业成本":"OPERATE_COST","l-yylr-营业利润":"OPERATE_PROFIT","l-yylrphxm-营业利润平衡项目":"OPERATE_PROFIT_BALANCE","l-yylrqtxm-营业利润其他项目":"OPERATE_PROFIT_OTHER","l-yysr-营业收入":"OPERATE_INCOME","l-yywsr-营业外收入":"NONBUSINESS_INCOME","l-yywzc-营业外支出":"NONBUSINESS_EXPENSE","l-yyzcb-营业总成本":"TOTAL_OPERATE_COST","l-yyzcbqtxm-营业总成本其他项目":"TOC_OTHER","l-yyzsr-营业总收入":"TOTAL_OPERATE_INCOME","l-yyzsrqtxm-营业总收入其他项目":"TOI_OTHER","l-yxjlrdqtxm-影响净利润的其他项目":"EFFECT_NETPROFIT_OTHER","l-yxlrzedqtxm-影响利润总额的其他项目":"EFFECT_TP_OTHER","l-zzjyjlr-终止经营净利润":"DISCONTINUED_NETPROFIT","l-zcczsy-资产处置收益":"ASSET_DISPOSAL_INCOME","l-zcjzss-资产减值损失":"ASSET_IMPAIRMENT_LOSS","l-zcjzss-资产减值损失(新)":"ASSET_IMPAIRMENT_INCOME","l-zhsyze-综合收益总额":"TOTAL_COMPRE_INCOME"},C=(E,e,_)=>Number(E[`${y[e]||r[e]||x[e]||""}${_?"_YOY":""}`]),n=[{title:"利息保障倍数",func:(E,e)=>C(e,"l-lxfy-利息费用")?(C(e,"l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润")+C(e,"l-sjjfj-税金及附加")+C(e,"l-lxfy-利息费用"))/C(e,"l-lxfy-利息费用"):0,danger:3},{title:"营业利润率 (%)",func(E,e){const _=C(e,"l-yysr-营业收入");return(C(e,"l-yysr-营业收入")-C(e,"l-yycb-营业成本"))/_*100},danger:50},{title:"应收帐款占流动资产比率 (%)",func(E,e){const _=C(e,"z-ldzchj-流动资产合计");return C(e,"z-yszk-应收账款")/_*100},danger:30},{title:"变现能力",func(E,e){const _=C(e,"l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润");return C(e,"x-jyhdcsdxjllje-经营活动产生的现金流量净额 (operate)")/_},danger:1},{title:"扣非 ROE (%)",func:(E,e)=>C(e,"l-kcfjcxsyhdjlr-扣除非经常性损益后的净利润")/(C(e,"z-zczj-资产总计")-C(e,"z-fzhj-负债合计"))*100,danger:15},{title:"费用率 (%)",func:(E,e)=>(C(e,"l-xsfy-销售费用")+C(e,"l-glfy-管理费用")+Math.max(C(e,"l-cwfy-财务费用"),0))/(C(e,"l-yysr-营业收入")-C(e,"l-yycb-营业成本"))*100,danger:50},{title:"带息流动负债占比 (%)",func(E,e){const _=C(e,"z-dqjk-短期借款"),t=C(e,"z-yfpj-应付票据");if(C(e,"z-ldfzhj-流动负债合计"))return(_+t)/C(e,"z-ldfzhj-流动负债合计")*100},danger:60},{title:"应收帐款周转天数",func:(E,e)=>(C(e,"z-yszk-应收账款")+C(E,"z-yszk-应收账款"))/2/C(e,"l-yysr-营业收入")*365},{title:"货币资金占比 (%)",func:(E,e)=>C(e,"z-hbzj-货币资金")/C(e,"z-ldzchj-流动资产合计")*100,danger:30},{title:"存货占比 (%)",func:(E,e)=>C(e,"z-ch-存货")/C(e,"z-ldzchj-流动资产合计")*100},{title:"资产负债率 (%)",func:(E,e)=>C(e,"z-fzhj-负债合计")/C(e,"z-zczj-资产总计")*100,danger:50},{title:"短期带息负债/非流动负债比",func(E,e){if(C(e,"z-cqjk-长期借款"))return(C(e,"z-dqjk-短期借款")+C(e,"z-yfpj-应付票据")+C(e,"z-yndqdldfz-一年内到期的非流动负债"))/C(e,"z-fldfzhj-非流动负债合计")}},{title:"现金/有息负债比",func(E,e){const _=C(e,"z-dqjk-短期借款")+C(e,"z-yfpj-应付票据");if(_)return(C(e,"z-hbzj-货币资金")+C(e,"z-yspj-应收票据"))/_}},{title:"其他应付款 + 其他流动负债占比 (%)",func:(E,e)=>(C(e,"z-qtyfk-其他应付款")+C(e,"z-qtldfz-其他流动负债"))/C(e,"z-ldfzhj-流动负债合计")*100}],a=async E=>{const{fetch:e,codes:_}=E;return await Promise.all(_.map((async E=>{for(let _=4;_>0;_--){const t=await e(E,_);if(t.length)return t}})))},f=Array.from({length:6},((E,e)=>2021-e)).sort().map((E=>`${E}-12-31`)),o=async E=>{const e=await fetch((E=>{const{url:e,body:_}=E;return`${e}?${_?Object.entries(_).map((([E,e])=>Array.isArray(e)?`${E}=${window.encodeURIComponent(e.join(","))}`:`${E}=${encodeURIComponent(e)}`)).join("&"):""}`})(E));return await e.json()},L=async E=>{const{code:e,cType:_,hostname:t,path:T}=E,A={companyType:_,reportDateType:0,reportType:1,code:e},[N,s]=await Promise.all([o({url:`${t}${T}`,body:z(z({},A),{dates:f[0]})}),o({url:`${t}${T}`,body:z(z({},A),{dates:f.slice(1)})})]);return N.data&&s.data?N.data.concat(s.data):[]},P=async(E,e)=>await L({hostname:"//emweb.securities.eastmoney.com",path:"/PC_HSF10/NewFinanceAnalysis/zcfzbAjaxNew",code:E,cType:e}),m=async(E,e)=>await L({hostname:"//emweb.securities.eastmoney.com",path:"/PC_HSF10/NewFinanceAnalysis/lrbAjaxNew",code:E,cType:e}),h=async(E,e)=>await L({hostname:"//emweb.securities.eastmoney.com",path:"/PC_HSF10/NewFinanceAnalysis/xjllbAjaxNew",code:E,cType:e}),D=async E=>{const e=await(async E=>{const e=await a({fetch:P,codes:E});return e.forEach((E=>{E.sort(((E,e)=>Number(E.REPORT_DATE.split("-")[0])-Number(e.REPORT_DATE.split("-")[0])))})),e})(E),_=await(async E=>{const e=await a({fetch:m,codes:E});return e.forEach((E=>{E.sort(((E,e)=>Number(E.REPORT_DATE.split("-")[0])-Number(e.REPORT_DATE.split("-")[0])))})),e})(E),t=await(async E=>{const e=await a({fetch:h,codes:E});return e.forEach((E=>{E.sort(((E,e)=>Number(E.REPORT_DATE.split("-")[0])-Number(e.REPORT_DATE.split("-")[0])))})),e})(E),T=[];return e.forEach(((E,e)=>{const A=[];E.forEach(((E,T)=>{A.push(z(z(z({},E),_[e][T]),t[e][T]))})),T.push(A)})),T};const i=()=>Math.floor(255*Math.random()),q=["#44617b","#f8c972","#8e9975","#f98087","#a9e3ff","#a97baa","#83a7ab","#b3ada0","#2792c3","#8f2e14","#634950"].concat(Array.from({length:100},(()=>`rgb(${i()}, ${i()}, ${i()})`))),U=(g=E=>{const{stocks:e,title:_,func:t,danger:T}=E,s={data:((E,e)=>E.map((E=>{const _=[];for(let t=1;t<E.length;t++)_.push({type:String(E[t].SECURITY_NAME_ABBR),year:String(E[t].REPORT_DATE).split("-")[0],value:e(E[t-1],E[t])});return _})).reduce(((E,e)=>E.concat(e)),[]))(e,t),xField:"year",yField:"value",annotations:T?[{type:"line",id:"line",start:["min",T],end:["max",T],style:{stroke:"#ff0000",lineWidth:1.5,lineDash:[8,8]}}]:void 0,tooltip:{formatter:E=>({name:E.type,value:E.value.toFixed(2)})},seriesField:"type",color:q,height:260};return A.createElement("div",null,A.createElement("div",{className:"text-lg mb-3"},_),A.createElement(N,z({},s)))},A.memo(g,((E,e)=>{if(E.stocks.length!==e.stocks.length)return!1;for(let _=0;_<E.stocks.length;_++)if(E.stocks[_][0].SECUCODE!==e.stocks[_][0].SECUCODE)return!1;return!0})));var g;const F=A.memo((E=>{const[e,_]=A.useState(!1),[t,T]=A.useState([]),z=A.useMemo((()=>E.codes.map((E=>{const[e,_]=E.split(".");return`${_}${e}`}))),[E.codes]);return A.useEffect((()=>{if(!z.length)return;_(!0);let E=!1;return(async()=>{const e=await D(z);E||T(e),_(!1)})(),()=>{E=!0}}),[z]),e?A.createElement("div",{className:"flex items-center h-full w-full justify-center"},A.createElement(s,null)):A.createElement("div",{className:"grid grid-cols-3 gap-x-10 gap-y-10"},n.map((E=>A.createElement(U,{key:E.title,stocks:t,func:E.func,title:E.title,danger:E.danger}))))}),((E,e)=>{if(E.codes.length!==e.codes.length)return!1;for(let _=0;_<E.codes.length;_++)if(E.codes[_]!==e.codes[_])return!1;return!0})),p=`//data.eastmoney.com/dataapi/xuangu/list?st=CHANGE_RATE&sr=-1&ps=50&p=1&sty=SECUCODE%2CSECURITY_CODE%2CSECURITY_NAME_ABBR%2CNEW_PRICE%2CCHANGE_RATE%2CVOLUME_RATIO%2CHIGH_PRICE%2CLOW_PRICE%2CPRE_CLOSE_PRICE%2CVOLUME%2CDEAL_AMOUNT%2CTURNOVERRATE%2CPE9%2CTOTAL_MARKET_CAP%2CROE_WEIGHT%2CLISTING_DATE%2CINDUSTRY&filter=(${encodeURIComponent("PE9>=0.00")})(${encodeURIComponent("PE9<=30.00")})(${encodeURIComponent("TOTAL_MARKET_CAP>=30000000000")})(${encodeURIComponent("ROE_WEIGHT>=10.00")})(${encodeURIComponent('@LISTING_DATE="OVER5Y"')})&source=SELECT_SECURITIES&client=WEB`;function u(){const[E,e]=A.useState([]),[_,t]=A.useState(!1),[T,N]=A.useState([]),[s,I]=A.useState(""),j=A.useMemo((()=>[{title:"代码",dataIndex:"SECUCODE",width:130},{title:"名称",dataIndex:"SECURITY_NAME_ABBR",width:150,render:(E,e)=>A.createElement("span",{className:"text-blue-400 cursor-pointer",onClick:()=>{t(!0),N([e.SECUCODE])}},E)},{title:"行业",dataIndex:"INDUSTRY",width:150,render:E=>A.createElement(l,{title:"点击筛选"},A.createElement("span",{className:"text-blue-400 cursor-pointer",onClick:()=>{I(E)}},E)),sorter:{compare:(E,e)=>E.INDUSTRY<e.INDUSTRY?-1:1}},{title:"价格",dataIndex:"HIGH_PRICE",render:E=>A.createElement("span",null,E.toFixed(2)),sorter:{compare:(E,e)=>Number(E.HIGH_PRICE)-Number(e.HIGH_PRICE),multiple:2},defaultSortOrder:"ascend"},{title:"PE",dataIndex:"PE9",sorter:{compare:(E,e)=>Number(E.PE9)-Number(e.PE9),multiple:1},render:E=>A.createElement("span",null,E.toFixed(2)),defaultSortOrder:"descend"},{title:"ROE",dataIndex:"ROE_WEIGHT",sorter:{compare:(E,e)=>Number(E.ROE_WEIGHT)-Number(e.ROE_WEIGHT),multiple:3},defaultSortOrder:"descend"}]),[]);return A.useEffect((()=>{(async()=>{const E=await async function(){const E=await fetch(p);return(await E.json()).result.data.map((E=>z(z({},E),{key:E.SECUCODE})))}();e(E)})()}),[]),A.createElement(A.Fragment,null,A.createElement("div",{className:"h-full p-4"},A.createElement("div",{className:"left-5 bottom-8 mb-2"},A.createElement(d,{type:"primary",onClick:()=>t(!0),className:"mb-4 mr-6"},"对比"),s&&A.createElement(A.Fragment,null,A.createElement("span",{className:"mr-2"},"当前筛选行业: ",s),A.createElement(d,{type:"primary",onClick:()=>I(""),className:"mb-4"},"取消筛选"))),A.createElement(R,{rowSelection:{type:"checkbox",selectedRowKeys:T,onChange(E){N(E)}},pagination:{pageSize:15},columns:j,dataSource:E.filter((E=>!s||E.INDUSTRY===s))})),A.createElement(c,{title:"无值表示被除数为〇",width:"calc(100% - 250px)",open:_,onClose:()=>t(!1),maskClosable:!0},A.createElement(F,{codes:T})))}function B(){return A.createElement(I,null,A.createElement(j,null,A.createElement(O,{exact:!0,path:"/sanye",component:u}),A.createElement(O,{exact:!0,path:"/",component:u})))}function b(){return A.createElement(B,null)}S.render(A.createElement(A.StrictMode,null,A.createElement(b,null)),document.getElementById("root"));
