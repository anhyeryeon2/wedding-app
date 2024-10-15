import {parseISO,format,getDay} from 'date-fns'
import classNames from "classnames/bind";
import styles from './Heading.module.scss'
import Section from '../shared/Section';

const cx = classNames.bind(styles)

function Heading({date}: {date:string}){
    const weddingDate = parseISO(date)
    const DAYS = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return(
        <Section className={cx('container')}>
            <div className={cx('txt-date')}>{format(weddingDate,'yy.mm.dd')}</div>
            <div className={cx('txt-day')}>{DAYS[getDay(weddingDate)]}</div>

        </Section>
    )
}

export default Heading;