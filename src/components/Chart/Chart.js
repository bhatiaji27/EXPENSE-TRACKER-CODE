import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataValues = props.dataPoints.map( dataPoint => dataPoint.value);
    const getMaximum = Math.max(...dataValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return <ChartBar 
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={getMaximum}
                />
            })}
        </div>
    )
}

export default Chart;