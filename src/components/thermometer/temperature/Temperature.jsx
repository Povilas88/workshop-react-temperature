import style from './Temperature.module.css';

function Temperature({ count }) {
    const backgroundColor = count < 0 ? 'cyan' : 'red';
    const height = Math.abs(count) * 2;
    const transformValue = count < 0 ? `translateY(${height}px)` : 'translateY(0)';

    return (
        <div className={style.temperatureContainer}>
            <div className={style.temperatureBar}>
                <div className={style.temperature}
                    style={{ height: height, backgroundColor, transform: transformValue }}></div>
                <div className={style.middleBar}></div>
            </div>
            <div className={style.countContainer}>
                <span>{count}</span>
                <span>C</span>
            </div>
        </div>
    );
}

export default Temperature;