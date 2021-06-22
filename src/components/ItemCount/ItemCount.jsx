import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
    const [result, setResult] = useState("");
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");

    return (
        <div className="itemcount">
            <label htmlFor="number1">
                Number 1:
                <input
                    id="number1"
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                />
            </label>
            <label htmlFor="number2">
                Number 2:
                <input
                    id="number2"
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                />
            </label>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
            <p>El resultado es{result}</p>
        </div>
    );
};

export { ItemCount };
