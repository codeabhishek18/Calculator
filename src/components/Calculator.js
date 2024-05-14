import styles from './Calculator.module.css'
import { useState } from 'react'

const Calculator = () =>
{
    const [input, setInput] = useState('');
    const [expression, setExpression] = useState(null) 

    const handleClick = (symbol) =>
    {
        if(symbol === 'C')
        {
            setInput('');
            setExpression(null);
            return;
        }

        if(input === '0/0')
        {
            setExpression('NaN');
            return
        }

        if(symbol !== '=')
        {
            setInput((prev) => prev+ symbol.toString())
        }
        else
        {   
            if(!input)
            {
                setExpression('Error');
                return;
            }
            setExpression(eval(input))
        }
    }

    return(
        <div className={styles.container}>
            <h1>React Calculator</h1>
            <input value={input}/>
            {expression && <div className={styles.result}>{expression}</div>}
            <div className={styles.calculator}>
                <button className={styles.item} onClick={()=>handleClick(7)}>7</button>
                <button className={styles.item} onClick={()=>handleClick(8)}>8</button>
                <button className={styles.item} onClick={()=>handleClick(9)}>9</button>
                <button className={styles.item} onClick={()=>handleClick('+')}>+</button>
                <button className={styles.item} onClick={()=>handleClick(4)}>4</button>
                <button className={styles.item} onClick={()=>handleClick(5)}>5</button>
                <button className={styles.item} onClick={()=>handleClick(6)}>6</button>
                <button className={styles.item} onClick={()=>handleClick('-')}>-</button>
                <button className={styles.item} onClick={()=>handleClick(1)}>1</button>
                <button className={styles.item} onClick={()=>handleClick(2)}>2</button>
                <button className={styles.item} onClick={()=>handleClick(3)}>3</button>
                <button className={styles.item} onClick={()=>handleClick('*')}>*</button>
                <button className={styles.item} onClick={()=>handleClick('C')}>C</button>
                <button className={styles.item} onClick={()=>handleClick(0)}>0</button>
                <button className={styles.item} onClick={()=>handleClick('=')}>=</button>
                <button className={styles.item} onClick={()=>handleClick('/')}>/</button>
            </div>
        </div>
    )
}
export default Calculator