/*
Name: jsDate
Desc: VBScript native Date functions emulated for Javascript
Author: Rob Eberhardt, Slingshot Solutions - http://slingfive.com/
Note: see jsDate.txt for more info
*/

// constants
var vbGeneralDate = 0,
	vbLongDate = 1,
	vbShortDate = 2,
	vbLongTime = 3,
	vbShortTime = 4, // NamedFormat
	vbUseSystemDayOfWeek = 0,
	vbSunday = 1,
	vbMonday = 2,
	vbTuesday = 3,
	vbWednesday = 4,
	vbThursday = 5,
	vbFriday = 6,
	vbSaturday = 7, // FirstDayOfWeek
	vbUseSystem = 0,
	vbFirstJan1 = 1,
	vbFirstFourDays = 2,
	vbFirstFullWeek = 3; // FirstWeekOfYear

// arrays (1-based)
Date.MonthNames = [
	null,
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
Date.WeekdayNames = [
	null,
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

Date.IsDate = (p_Expression) => {
	if (p_Expression === null) {
		return false;
	}
	return !isNaN(new Date(p_Expression)); // <-- review further
};

Date.CDate = (p_Date) => {
	if (Date.IsDate(p_Date)) {
		return new Date(p_Date);
	}

	var strTry = p_Date.replace(/-/g, '/').replace(/\./g, '/').replace(/ /g, '/'); // fix separators
	strTry = strTry.replace(/pm$/i, ' pm').replace(/am$/i, ' am'); // and meridian spacing
	if (Date.IsDate(strTry)) {
		return new Date(strTry);
	}

	var strTryYear = strTry + '/' + new Date().getFullYear(); // append year
	if (Date.IsDate(strTryYear)) {
		return new Date(strTryYear);
	}

	if (strTry.indexOf(':')) {
		// if appears to have time
		var strTryYear2 = strTry.replace(/ /, '/' + new Date().getFullYear() + ' '); // insert year
		if (Date.IsDate(strTryYear2)) {
			return new Date(strTryYear2);
		}

		var strTryDate = new Date().toDateString() + ' ' + p_Date; // pre-pend current date
		if (Date.IsDate(strTryDate)) {
			return new Date(strTryDate);
		}
	}

	return false; // double as looser IsDate
	//throw("Error #13 - Type mismatch");	// or is this better?
};

Date.DateAdd = (p_Interval, p_Number, p_Date) => {
	if (!Date.CDate(p_Date)) {
		return "invalid date: '" + p_Date + "'";
	}
	if (isNaN(p_Number)) {
		return "invalid number: '" + p_Number + "'";
	}

	p_Number = new Number(p_Number);
	var dt = Date.CDate(p_Date);

	switch (p_Interval.toLowerCase()) {
		case 'yyyy': {
			dt.setFullYear(dt.getFullYear() + p_Number);
			break;
		}
		case 'q': {
			dt.setMonth(dt.getMonth() + p_Number * 3);
			break;
		}
		case 'm': {
			dt.setMonth(dt.getMonth() + p_Number);
			break;
		}
		case 'y': // day of year
		case 'd': // day
		case 'w': {
			// weekday
			dt.setDate(dt.getDate() + p_Number);
			break;
		}
		case 'ww': {
			// week of year
			dt.setDate(dt.getDate() + p_Number * 7);
			break;
		}
		case 'h': {
			dt.setHours(dt.getHours() + p_Number);
			break;
		}
		case 'n': {
			// minute
			dt.setMinutes(dt.getMinutes() + p_Number);
			break;
		}
		case 's': {
			dt.setSeconds(dt.getSeconds() + p_Number);
			break;
		}
		case 'ms': {
			// JS extension
			dt.setMilliseconds(dt.getMilliseconds() + p_Number);
			break;
		}
		default: {
			return "invalid interval: '" + p_Interval + "'";
		}
	}
	return dt;
};

Date.DateDiff = (p_Interval, p_Date1, p_Date2, p_FirstDayOfWeek) => {
	if (!Date.CDate(p_Date1)) {
		return "invalid date: '" + p_Date1 + "'";
	}
	if (!Date.CDate(p_Date2)) {
		return "invalid date: '" + p_Date2 + "'";
	}
	p_FirstDayOfWeek =
		isNaN(p_FirstDayOfWeek) || p_FirstDayOfWeek == 0
			? vbSunday
			: parseInt(p_FirstDayOfWeek); // set default & cast

	var dt1 = Date.CDate(p_Date1);
	var dt2 = Date.CDate(p_Date2);

	// correct DST-affected intervals ("d" & bigger)
	if ('h,n,s,ms'.indexOf(p_Interval.toLowerCase()) == -1) {
		if (p_Date1.toString().indexOf(':') == -1) {
			dt1.setUTCHours(0, 0, 0, 0);
		} // no time, assume 12am
		if (p_Date2.toString().indexOf(':') == -1) {
			dt2.setUTCHours(0, 0, 0, 0);
		} // no time, assume 12am
	}

	// get ms between UTC dates and make into "difference" date
	var iDiffMS = dt2.valueOf() - dt1.valueOf();
	var dtDiff = new Date(iDiffMS);

	// calc various diffs
	var nYears = dt2.getUTCFullYear() - dt1.getUTCFullYear();
	var nMonths =
		dt2.getUTCMonth() - dt1.getUTCMonth() + (nYears != 0 ? nYears * 12 : 0);
	var nQuarters = parseInt(nMonths / 3); //<<-- different than VBScript, which watches rollover not completion

	var nMilliseconds = iDiffMS;
	var nSeconds = parseInt(iDiffMS / 1000);
	var nMinutes = parseInt(nSeconds / 60);
	var nHours = parseInt(nMinutes / 60);
	var nDays = parseInt(nHours / 24); // <-- now fixed for DST switch days
	var nWeeks = parseInt(nDays / 7);

	if (p_Interval.toLowerCase() == 'ww') {
		// set dates to 1st & last FirstDayOfWeek
		var offset = Date.DatePart('w', dt1, p_FirstDayOfWeek) - 1;
		if (offset) {
			dt1.setDate(dt1.getDate() + 7 - offset);
		}
		var offset = Date.DatePart('w', dt2, p_FirstDayOfWeek) - 1;
		if (offset) {
			dt2.setDate(dt2.getDate() - offset);
		}
		// recurse to "w" with adjusted dates
		var nCalWeeks = Date.DateDiff('w', dt1, dt2) + 1;
	}
	// TODO: similar for 'w'?

	// return difference
	switch (p_Interval.toLowerCase()) {
		case 'yyyy':
			return nYears;
		case 'q':
			return nQuarters;
		case 'm':
			return nMonths;
		case 'y': // day of year
		case 'd':
			return nDays;
		case 'w':
			return nWeeks;
		case 'ww':
			return nCalWeeks; // week of year
		case 'h':
			return nHours;
		case 'n':
			return nMinutes;
		case 's':
			return nSeconds;
		case 'ms':
			return nMilliseconds; // not in VBScript
		default:
			return "invalid interval: '" + p_Interval + "'";
	}
};

Date.DatePart = (p_Interval, p_Date, p_FirstDayOfWeek) => {
	if (!Date.CDate(p_Date)) {
		return "invalid date: '" + p_Date + "'";
	}

	var dtPart = Date.CDate(p_Date);

	switch (p_Interval.toLowerCase()) {
		case 'yyyy':
			return dtPart.getFullYear();
		case 'q':
			return parseInt(dtPart.getMonth() / 3) + 1;
		case 'm':
			return dtPart.getMonth() + 1;
		case 'y':
			return Date.DateDiff('y', '1/1/' + dtPart.getFullYear(), dtPart) + 1; // day of year
		case 'd':
			return dtPart.getDate();
		case 'w':
			return Date.Weekday(dtPart.getDay() + 1, p_FirstDayOfWeek); // weekday
		case 'ww':
			return (
				Date.DateDiff(
					'ww',
					'1/1/' + dtPart.getFullYear(),
					dtPart,
					p_FirstDayOfWeek,
				) + 1
			); // week of year
		case 'h':
			return dtPart.getHours();
		case 'n':
			return dtPart.getMinutes();
		case 's':
			return dtPart.getSeconds();
		case 'ms':
			return dtPart.getMilliseconds(); // <-- JS extension, NOT in VBScript
		default:
			return "invalid interval: '" + p_Interval + "'";
	}
};

Date.MonthName = (p_Month, p_Abbreviate) => {
	if (isNaN(p_Month)) {
		// v0.94- compat: extract real param from passed date
		if (!Date.CDate(p_Month)) {
			return "invalid month: '" + p_Month + "'";
		}
		p_Month = DatePart('m', Date.CDate(p_Month));
	}

	var retVal = Date.MonthNames[p_Month];
	if (p_Abbreviate == true) {
		retVal = retVal.substring(0, 3);
	} // abbr to 3 chars
	return retVal;
};

Date.WeekdayName = (p_Weekday, p_Abbreviate, p_FirstDayOfWeek) => {
	if (isNaN(p_Weekday)) {
		// v0.94- compat: extract real param from passed date
		if (!Date.CDate(p_Weekday)) {
			return "invalid weekday: '" + p_Weekday + "'";
		}
		p_Weekday = DatePart('w', Date.CDate(p_Weekday));
	}
	p_FirstDayOfWeek =
		isNaN(p_FirstDayOfWeek) || p_FirstDayOfWeek == 0
			? vbSunday
			: parseInt(p_FirstDayOfWeek); // set default & cast

	var nWeekdayNameIdx =
		((p_FirstDayOfWeek - 1 + parseInt(p_Weekday) - 1 + 7) % 7) + 1; // compensate nWeekdayNameIdx for p_FirstDayOfWeek
	var retVal = Date.WeekdayNames[nWeekdayNameIdx];
	if (p_Abbreviate == true) {
		retVal = retVal.substring(0, 3);
	} // abbr to 3 chars
	return retVal;
};

// adjusts weekday for week starting on p_FirstDayOfWeek
Date.Weekday = (p_Weekday, p_FirstDayOfWeek) => {
	p_FirstDayOfWeek =
		isNaN(p_FirstDayOfWeek) || p_FirstDayOfWeek == 0
			? vbSunday
			: parseInt(p_FirstDayOfWeek); // set default & cast

	return ((parseInt(p_Weekday) - p_FirstDayOfWeek + 7) % 7) + 1;
};

Date.FormatDateTime = (p_Date, p_NamedFormat) => {
	if (p_Date.toUpperCase().substring(0, 3) == 'NOW') {
		p_Date = new Date();
	}
	if (!Date.CDate(p_Date)) {
		return "invalid date: '" + p_Date + "'";
	}
	if (isNaN(p_NamedFormat)) {
		p_NamedFormat = vbGeneralDate;
	}

	var dt = Date.CDate(p_Date);

	switch (parseInt(p_NamedFormat)) {
		case vbGeneralDate:
			return dt.toString();
		case vbLongDate:
			return Format(p_Date, 'DDDD, MMMM D, YYYY');
		case vbShortDate:
			return Format(p_Date, 'MM/DD/YYYY');
		case vbLongTime:
			return dt.toLocaleTimeString();
		case vbShortTime:
			return Format(p_Date, 'HH:MM:SS');
		default:
			return "invalid NamedFormat: '" + p_NamedFormat + "'";
	}
};

Date.Format = function (p_Date, p_Format, p_FirstDayOfWeek, p_firstweekofyear) {
	if (!Date.CDate(p_Date)) {
		return "invalid date: '" + p_Date + "'";
	}
	if (!p_Format || p_Format == '') {
		return dt.toString();
	}

	var dt = Date.CDate(p_Date);

	// Zero-padding formatter
	this.pad = (p_str) => {
		if (p_str.toString().length == 1) {
			p_str = '0' + p_str;
		}
		return p_str;
	};

	var ampm = dt.getHours() >= 12 ? 'PM' : 'AM';
	var hr = dt.getHours();
	if (hr == 0) {
		hr = 12;
	}
	if (hr > 12) {
		hr -= 12;
	}
	var strShortTime =
		hr +
		':' +
		this.pad(dt.getMinutes()) +
		':' +
		this.pad(dt.getSeconds()) +
		' ' +
		ampm;
	var strShortDate =
		dt.getMonth() +
		1 +
		'/' +
		dt.getDate() +
		'/' +
		new String(dt.getFullYear()).substring(2, 4);
	var strLongDate =
		Date.MonthName(dt.getMonth() + 1) +
		' ' +
		dt.getDate() +
		', ' +
		dt.getFullYear(); //

	var retVal = p_Format;

	// switch tokens whose alpha replacements could be accidentally captured
	retVal = retVal.replace(/C/gi, 'CCCC');
	retVal = retVal.replace(/mmmm/gi, 'XXXX');
	retVal = retVal.replace(/mmm/gi, 'XXX');
	retVal = retVal.replace(/dddddd/gi, 'AAAAAA');
	retVal = retVal.replace(/ddddd/gi, 'AAAAA');
	retVal = retVal.replace(/dddd/gi, 'AAAA');
	retVal = retVal.replace(/ddd/gi, 'AAA');
	retVal = retVal.replace(/timezone/gi, 'ZZZZ');
	retVal = retVal.replace(/time24/gi, 'TTTT');
	retVal = retVal.replace(/time/gi, 'TTT');

	// now do simple token replacements
	retVal = retVal.replace(/yyyy/gi, dt.getFullYear());
	retVal = retVal.replace(/yy/gi, new String(dt.getFullYear()).substring(2, 4));
	retVal = retVal.replace(/y/gi, Date.DatePart('y', dt));
	retVal = retVal.replace(/q/gi, Date.DatePart('q', dt));
	retVal = retVal.replace(/mm/gi, this.pad(dt.getMonth() + 1));
	retVal = retVal.replace(/m/gi, dt.getMonth() + 1);
	retVal = retVal.replace(/dd/gi, this.pad(dt.getDate()));
	retVal = retVal.replace(/d/gi, dt.getDate());
	retVal = retVal.replace(/hh/gi, this.pad(dt.getHours()));
	retVal = retVal.replace(/h/gi, dt.getHours());
	retVal = retVal.replace(/nn/gi, this.pad(dt.getMinutes()));
	retVal = retVal.replace(/n/gi, dt.getMinutes());
	retVal = retVal.replace(/ss/gi, this.pad(dt.getSeconds()));
	retVal = retVal.replace(/s/gi, dt.getSeconds());
	retVal = retVal.replace(/t t t t t/gi, strShortTime);
	retVal = retVal.replace(/am\/pm/g, dt.getHours() >= 12 ? 'pm' : 'am');
	retVal = retVal.replace(/AM\/PM/g, dt.getHours() >= 12 ? 'PM' : 'AM');
	retVal = retVal.replace(/a\/p/g, dt.getHours() >= 12 ? 'p' : 'a');
	retVal = retVal.replace(/A\/P/g, dt.getHours() >= 12 ? 'P' : 'A');
	retVal = retVal.replace(/AMPM/g, dt.getHours() >= 12 ? 'pm' : 'am');
	// (always proceed largest same-lettered token to smallest)

	// now finish the previously set-aside tokens
	retVal = retVal.replace(/XXXX/gi, Date.MonthName(dt.getMonth() + 1, false)); //
	retVal = retVal.replace(/XXX/gi, Date.MonthName(dt.getMonth() + 1, true)); //
	retVal = retVal.replace(/AAAAAA/gi, strLongDate);
	retVal = retVal.replace(/AAAAA/gi, strShortDate);
	retVal = retVal.replace(
		/AAAA/gi,
		Date.WeekdayName(dt.getDay() + 1, false, p_FirstDayOfWeek),
	); //
	retVal = retVal.replace(
		/AAA/gi,
		Date.WeekdayName(dt.getDay() + 1, true, p_FirstDayOfWeek),
	); //
	retVal = retVal.replace(
		/TTTT/gi,
		dt.getHours() + ':' + this.pad(dt.getMinutes()),
	);
	retVal = retVal.replace(
		/TTT/gi,
		hr + ':' + this.pad(dt.getMinutes()) + ' ' + ampm,
	);
	retVal = retVal.replace(/CCCC/gi, strShortDate + ' ' + strShortTime);

	// finally timezone
	tz = dt.getTimezoneOffset();
	timezone = tz < 0 ? 'GMT-' + tz / 60 : tz == 0 ? 'GMT' : 'GMT+' + tz / 60;
	retVal = retVal.replace(/ZZZZ/gi, timezone);

	return retVal;
};

// ====================================

/* if desired, map new methods to direct functions
 */
var IsDate = Date.IsDate;
var CDate = Date.CDate;
var DateAdd = Date.DateAdd;
var DateDiff = Date.DateDiff;
var DatePart = Date.DatePart;
var MonthName = Date.MonthName;
var WeekdayName = Date.WeekdayName;
var Weekday = Date.Weekday;
var FormatDateTime = Date.FormatDateTime;
var Format = Date.Format;

/* and other capitalizations for easier porting
isDate = IsDate;
dateAdd = DateAdd;
dateDiff = DateDiff;
datePart = DatePart;
monthName = MonthName;
weekdayName = WeekdayName;
formatDateTime = FormatDateTime;
format = Format;

isdate = IsDate;
dateadd = DateAdd;
datediff = DateDiff;
datepart = DatePart;
monthname = MonthName;
weekdayname = WeekdayName;
formatdatetime = FormatDateTime;

ISDATE = IsDate;
DATEADD = DateAdd;
DATEDIFF = DateDiff;
DATEPART = DatePart;
MONTHNAME = MonthName;
WEEKDAYNAME = WeekdayName;
FORMATDATETIME = FormatDateTime;
FORMAT = Format;
*/
