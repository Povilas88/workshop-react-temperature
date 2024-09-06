import style from './Buttons.module.css';

function Buttons({ setCount }) {
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
        <div className={style.btnContainer}>
            <button onClick={increment} style={{ backgroundColor: "red" }}>+</button>
            <button onClick={decrement} style={{ backgroundColor: "cyan" }}>-</button>
        </div >
    )
}

export default Buttons;