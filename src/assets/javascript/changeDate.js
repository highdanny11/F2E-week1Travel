import * as moment from 'moment';

const changeDate = (date) => moment(new Date(date).getTime()).format('YYYY-MM-DD');
export default changeDate;
