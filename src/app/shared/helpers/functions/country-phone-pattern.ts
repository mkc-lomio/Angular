import {CountryCodes} from '../../enum/country-codes';

export function getCountryPhoneNumberPattern(countryCode: string): any {
    switch(countryCode){                                         // Example Phone Numbers
      case CountryCodes.Indonesia: return /^(\+62)\d{10}$/  // +628342024961
      case CountryCodes.Philippines: return /^(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/  // +639770190489 - TEST SITE: https://www.regextester.com/95375
      case CountryCodes.Malaysia: return /^(\+60)\d{8}$/  // +6044848199
      case CountryCodes.Thailand: return /^(\+66)\d{8}$/  //  +6643123456
      default: return null
    }
} 