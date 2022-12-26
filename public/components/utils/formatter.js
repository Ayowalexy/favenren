export const currencyFormat = (num) => {
    return num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  
  let DECIMAL_SEPARATOR = '.';
  let GROUP_SEPARATOR = ',';
  
  export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // return x.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  };
  
  export const formatNumber = (valString, mode = false) => {
    // return num.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
    if (!valString) {
      return '';
    }
  
    if (mode) {
      let val = valString.toString();
      const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);
  
      var res =
        parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
        (!parts[1] ? '' : DECIMAL_SEPARATOR + parts[1]);
  
      return res;
    } else {
      let val = valString.toString();
  
      const parts = unFormatNumber(val).split(DECIMAL_SEPARATOR);
  
      var res =
        parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, GROUP_SEPARATOR) +
        (!parts[1] ? '' : DECIMAL_SEPARATOR + parts[1]);
  
      return res;
    }
  };
  
  export const unFormatNumber = (val) => {
    if (typeof val === 'number') {
      return val;
    }
    if (!val) {
      return '';
    }
    val = val.replace(/^0+/, '');
  
    if (GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
    } else {
      return val.replace(/\./g, '');
    }
  };
  