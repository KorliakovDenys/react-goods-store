import _ from 'lodash'

const formatToMoney = (amountString:string, currency:string = 'USD', locale:string = 'en-US'):string => {
	const amount = parseFloat(amountString);
	if(_.isNaN(amount)) {
		return 'error';
	}

	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency
	});

	return formatter.format(amount);
}

export {formatToMoney}