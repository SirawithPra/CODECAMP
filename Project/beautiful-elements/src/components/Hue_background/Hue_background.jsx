import React, { useEffect } from 'react';
import './Hue_background.css';

export default function Hue_background() {
    useEffect(() => {
        const hueInput = document.getElementById("hue");
        const handleInput = (e) => {
            document.documentElement.style.setProperty('--hue', e.target.value);
        };
        hueInput.addEventListener('input', handleInput);

        return () => {
            hueInput.removeEventListener('input', handleInput);
        };
    }, []);

    const players = [
        { name: 'Virat Kohli', score: 973 },
        { name: 'Shubman Gill', score: 890 },
        { name: 'Jos Buttler', score: 863 },
        { name: 'AB de Villiers', score: 687 },
        { name: 'Rohit Sharma', score: 538 },
    ];

    return (
        <div className='container-hue'>
            <div className="scoreboard">
                <header>
                    <h2>Top 5 Players</h2>
                </header>
                <ol>
                    {players.map((player, index) => (
                        <li key={index} style={{ '--i': index + 1, '--_bg': `oklch(calc(75% - ${(index + 1) * 5}%) .2 calc(var(--hue) - ${(index + 1) + 5}))` }}>
                            <span className="number">{index + 1}</span>
                            <p>{player.name}</p>
                            <span className="score">{player.score}</span>
                        </li>
                    ))}
                </ol>
            </div>
            <input type="range" defaultValue="230" min="0" max="360" id="hue" />
        </div>
    );
}
