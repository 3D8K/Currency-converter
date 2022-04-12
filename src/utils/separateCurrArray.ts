import {flagSwithcer} from './flagSwithcer';

interface currencyObject {
    name : {
        ID: string,
        NumCode: string,
        CharCode: string,
        Nominal: number,
        Name: string,
        Value: number,
        Previous: number
    }
}

export function separateCurrArray(currencyArr: currencyObject[]) {
  const result = Object.values(currencyArr)
      .map((currency: any) => {
        if (currency.Nominal > 1) {
          currency.ID = currency.Value / currency.Nominal;
        } else {
          currency.ID = currency.Value;
        }
        return {
          code: currency.NumCode,
          flag: flagSwithcer(currency.CharCode),
          nominal: currency.Nominal,
          name: currency.Name,
          value: currency.ID.toFixed(2),
          tableValue: currency.Value.toFixed(2),
          charCode: currency.CharCode,
          difference: ((((currency.Value - currency.Previous) /
                    currency.Previous) * 100)).toFixed(2),
        };
      });
  result.push({code: 643,
    flag: flagSwithcer('RUS'),
    nominal: 1,
    name: 'Российсикй рубль',
    tableValue: 1,
    value: '1', charCode: 'RUB', difference: ''});
  return result;
}
