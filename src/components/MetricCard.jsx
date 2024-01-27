import React from 'react';
import totalOrder from '../assets/img/total_order.png';
import totalRefund from '../assets/img/total_refund.png';
import averageSales from '../assets/img/average_sales.png';
import totalIncome from '../assets/img/total_income.png';
import greenChart from '../assets/img/green_chart.png';
import redChart from '../assets/img/red_chart.png';
import upChart from '../assets/img/up_green.png';
import downChart from '../assets/img/down_red.png';
import style from '../assets/stylesheets/metric-card.module.css';
const metricInfo = [
    {
        logo: totalOrder,
        chart: greenChart,
        metric: '33.5%',
        unit: '350',
        description: 'Total Order',
        level: upChart
    },
    {
        logo: totalRefund,
        chart: redChart,
        metric: '23.5%',
        unit: '270',
        description: 'Total Refund',
        level: downChart,
    },
    {
        logo: averageSales,
        chart: redChart,
        metric: '23.5%',
        unit: '1567',
        description: 'Average Sales',
        level: downChart,
    },
    {
        logo: totalIncome,
        chart: greenChart,
        metric: '23.5%',
        unit: '$350.000',
        description: 'Total Income',
        level: upChart
    },
]

const MetricCard = () => {
 const items = metricInfo.map((item, index) => (
    <div key={index} className={style.metric_card}>
        <div className='flex justify-between'>
            <img src={item.logo} alt='logo' className={style.logo} />
            <img src={item.chart} alt='chart' className={style.metric_card__chart}/>
        </div>
        <div>
            <p className={style.metric_card__description}>{item.description}</p>   
            <p className={`${style.metric_card__unit}`}>{item.unit}</p>         
        </div>
        <div className={`${style.metric_card__metric} flex justify-between`}>
            <span className={`${style.metric_card__progress} flex items-center`}><img src={item.level} className={`${style} h-3 w-4 mx-2`} alt='level' />{item.metric}</span>
            <p> vs. previous</p>
        </div>      

    </div>
))
  return (
    <div className={`${style.metric_card__container}`}>
            {items}
    </div>
)
  }

export default MetricCard