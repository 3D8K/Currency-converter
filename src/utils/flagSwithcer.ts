import getCountryFlag from 'country-flag-icons/unicode';

export function flagSwithcer(currencyName: string) {
  switch (currencyName) {
    case 'EUR': {
      return getCountryFlag('EU');
    }

    default: {
      return getCountryFlag(currencyName.slice(0, -1));
    }
  }
}
