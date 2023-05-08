import dayjs from "dayjs";

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const humanizeTaskDueDate = (dueDate) => dayjs(dueDate).format('DD MMM');

const duration = (dateFrom, dateTo) =>  {
    const start = dayjs(dateFrom);
    const end = dayjs(dateTo);
    const difference = end.diff(start, 'minute');

    const days = Math.floor(difference / MINUTES_PER_DAY);
    const restHours = Math.floor((difference - days * MINUTES_PER_DAY) / MINUTES_PER_HOUR);
    const restMinutes = difference - (days * MINUTES_PER_DAY + restHours * MINUTES_PER_HOUR);

    const daysOutput = (days) ? `${days}D` : '';
    const hoursOutput = (restHours) ? `${restHours}H` : '';
    const minutesOutput = (restMinutes) ? `${restMinutes}M` : '';

    return `${daysOutput} ${hoursOutput} ${minutesOutput}`;
};

const convertDate = (date) => dayjs(date).format('YYYY-MM-DD');
const convertTime = (date) => dayjs(date).format('hh:mm');
const convertDateTime = (date) => dayjs(date).format('YYYY-MM-DD hh:mm')

export { getRandomInteger, duration };