'use client';
import { useState } from 'react';

import styles from './piano.module.css';
import * as Tone from "tone";

function Synth() {
    const [oscillatorType, setOscillatorType] = useState("sine");
    const [attack, setAttack] = useState(0);
    const [decay, setDecay] = useState(0.2);
    const [sustain, setSustain] = useState(1);
    const [release, setRelease] = useState(1.0);
    const [playingNote, setPlayingNote] = useState(null);

    const synth = new Tone.Synth({
        oscillator: {
            type: oscillatorType,
        },
        envelope: {
            attack,
            decay,
            sustain,
            release,
        },
    }).toDestination();

    if (oscillatorType === "square") {
        synth.volume.value = -15;
    } else if (oscillatorType === "sawtooth") {
        synth.volume.value = -15;
    } else if (oscillatorType === "triangle") {
        synth.volume.value = -2;
    } else {
        synth.volume.value = 0;
    }

    const handleOscillatorChange = (type) => {
        setOscillatorType(type);

    };

    const handleEnvelopeChange = () => {
        synth.set({
            envelope: {
                attack,
                decay,
                sustain,
                release,
            },
        });
    };

    const handleMouseDown = (note) => {
        const now = Tone.now();
        synth.triggerAttackRelease(note, "4n", now);
        setPlayingNote(note);
    };
    
    const handleMouseEnter = (note, e) => {
        if (e.buttons === 1) {
            handleMouseDown(note);
        }
    };
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <>
            <h4 className={styles.heading}>Oscillator Selection</h4>
            <div className={styles.oscillator}>
                <button onClick={() => handleOscillatorChange("sine")}>Sine</button>
                <button onClick={() => handleOscillatorChange("square")}>Square</button>
                <button onClick={() => handleOscillatorChange("sawtooth")}>Saw Tooth</button>
                <button onClick={() => handleOscillatorChange("triangle")}>Triangle</button>
            </div>
            <h4 className={styles.heading}>Envelope Settings</h4>
            <div className={styles.envelope}>
                <label>Attack: <input type="number" value={attack} onChange={(e) => setAttack(parseFloat(e.target.value))} onBlur={handleEnvelopeChange} /></label>
                <label>Decay: <input type="number" value={decay} onChange={(e) => setDecay(parseFloat(e.target.value))} onBlur={handleEnvelopeChange} /></label>
                <label>Sustain: <input type="number" value={sustain} onChange={(e) => setSustain(parseFloat(e.target.value))} onBlur={handleEnvelopeChange} /></label>
                <label>Release: <input type="number" value={release} onChange={(e) => setRelease(parseFloat(e.target.value))} onBlur={handleEnvelopeChange} /></label>
            </div>
            <div className={styles.piano}>
                <button className={styles.key} onMouseDown={() => handleMouseDown("C2")} onMouseEnter={(e) => handleMouseEnter("C2", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("C#2")} onMouseEnter={(e) => handleMouseEnter("C#2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("D2")} onMouseEnter={(e) => handleMouseEnter("D2", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("D#2")} onMouseEnter={(e) => handleMouseEnter("D#2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("E2")} onMouseEnter={(e) => handleMouseEnter("E2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("F2")} onMouseEnter={(e) => handleMouseEnter("F2", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("F#2")} onMouseEnter={(e) => handleMouseEnter("F#2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("G2")} onMouseEnter={(e) => handleMouseEnter("G2", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("G#2")} onMouseEnter={(e) => handleMouseEnter("G#2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("A2")} onMouseEnter={(e) => handleMouseEnter("A2", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("A#2")} onMouseEnter={(e) => handleMouseEnter("A#2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("B2")} onMouseEnter={(e) => handleMouseEnter("B2", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("C3")} onMouseEnter={(e) => handleMouseEnter("C3", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("C#3")} onMouseEnter={(e) => handleMouseEnter("C#3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("D3")} onMouseEnter={(e) => handleMouseEnter("D3", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("D#3")} onMouseEnter={(e) => handleMouseEnter("D#3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("E3")} onMouseEnter={(e) => handleMouseEnter("E3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("F3")} onMouseEnter={(e) => handleMouseEnter("F3", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("F#3")} onMouseEnter={(e) => handleMouseEnter("F#3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("G3")} onMouseEnter={(e) => handleMouseEnter("G3", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("G#3")} onMouseEnter={(e) => handleMouseEnter("G#3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("A3")} onMouseEnter={(e) => handleMouseEnter("A3", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("A#3")} onMouseEnter={(e) => handleMouseEnter("A#3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("B3")} onMouseEnter={(e) => handleMouseEnter("B3", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("C4")} onMouseEnter={(e) => handleMouseEnter("C4", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("C#4")} onMouseEnter={(e) => handleMouseEnter("C#4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("D4")} onMouseEnter={(e) => handleMouseEnter("D4", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("D#4")} onMouseEnter={(e) => handleMouseEnter("D#4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("E4")} onMouseEnter={(e) => handleMouseEnter("E4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("F4")} onMouseEnter={(e) => handleMouseEnter("F4", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("F#4")} onMouseEnter={(e) => handleMouseEnter("F#4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("G4")} onMouseEnter={(e) => handleMouseEnter("G4", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("G#4")} onMouseEnter={(e) => handleMouseEnter("G#4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("A4")} onMouseEnter={(e) => handleMouseEnter("A4", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("A#4")} onMouseEnter={(e) => handleMouseEnter("A#4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("B4")} onMouseEnter={(e) => handleMouseEnter("B4", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("C5")} onMouseEnter={(e) => handleMouseEnter("C5", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("C#5")} onMouseEnter={(e) => handleMouseEnter("C#5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("D5")} onMouseEnter={(e) => handleMouseEnter("D5", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("D#5")} onMouseEnter={(e) => handleMouseEnter("D#5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("E5")} onMouseEnter={(e) => handleMouseEnter("E5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("F5")} onMouseEnter={(e) => handleMouseEnter("F5", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("F#5")} onMouseEnter={(e) => handleMouseEnter("F#5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("G5")} onMouseEnter={(e) => handleMouseEnter("G5", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("G#5")} onMouseEnter={(e) => handleMouseEnter("G#5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("A5")} onMouseEnter={(e) => handleMouseEnter("A5", e)}></button>
                <button className={styles.black} onMouseDown={() => handleMouseDown("A#5")} onMouseEnter={(e) => handleMouseEnter("A#5", e)}></button>
                <button className={styles.key} onMouseDown={() => handleMouseDown("B5")} onMouseEnter={(e) => handleMouseEnter("B5", e)}></button>
            </div>
        </>
    )
}

export default Synth 