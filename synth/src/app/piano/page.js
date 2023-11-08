'use client';
import { useState } from 'react';

import styles from './piano.module.css';
import * as Tone from "tone";

function Synth() {
    const [oscillatorType, setOscillatorType] = useState("sine");

    const synth = new Tone.Synth({
        oscillator: {
          type: oscillatorType,
        },
    }).toDestination();

    const handleOscillatorChange = (type) => {
        setOscillatorType(type);
    };
      

    const C2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C2", "4n", now);
    }

    const Csharp2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C#2", "4n", now);
    }

    const D2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D2", "4n", now);
    }

    const Dsharp2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D#2", "4n", now);
    }

    const E2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("E2", "4n", now);
    }

    const F2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F2", "4n", now);
    }

    const Fsharp2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F#2", "4n", now);
    }

    const G2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G2", "4n", now);
    }

    const Gsharp2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G#2", "4n", now);
    }

    const A2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A2", "4n", now);
    }

    const Asharp2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A#2", "4n", now);
    }

    const B2 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("B2", "4n", now);
    }
//-----------------------------------------------------------------------------------------------
    const C3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C3", "4n", now);
    }

    const Csharp3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C#3", "4n", now);
    }

    const D3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D3", "4n", now);
    }

    const Dsharp3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D#3", "4n", now);
    }

    const E3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("E3", "4n", now);
    }

    const F3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F3", "4n", now);
    }

    const Fsharp3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F#3", "4n", now);
    }

    const G3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G3", "4n", now);
    }

    const Gsharp3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G#3", "4n", now);
    }

    const A3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A3", "4n", now);
    }

    const Asharp3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A#3", "4n", now);
    }

    const B3 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("B3", "4n", now);
    }
    //-----------------------------------------------------------------------------------------------
    const C4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C4", "4n", now);
    }

    const Csharp4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("C#4", "4n", now);
    }

    const D4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D4", "4n", now);
    }

    const Dsharp4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("D#4", "4n", now);
    }

    const E4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("E4", "4n", now);
    }

    const F4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F4", "4n", now);
    }

    const Fsharp4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("F#4", "4n", now);
    }

    const G4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G4", "4n", now);
    }

    const Gsharp4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("G#4", "4n", now);
    }

    const A4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A4", "4n", now);
    }

    const Asharp4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("A#4", "4n", now);
    }

    const B4 = () => {
        const now = Tone.now();
        synth.triggerAttackRelease("B4", "4n", now);
    }
        //-----------------------------------------------------------------------------------------------
        const C5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("C5", "4n", now);
        }
    
        const Csharp5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("C#5", "4n", now);
        }
    
        const D5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("D5", "4n", now);
        }
    
        const Dsharp5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("D#5", "4n", now);
        }
    
        const E5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("E5", "4n", now);
        }
    
        const F5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("F5", "4n", now);
        }
    
        const Fsharp5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("F#5", "4n", now);
        }
    
        const G5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("G5", "4n", now);
        }
    
        const Gsharp5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("G#5", "4n", now);
        }
    
        const A5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("A5", "4n", now);
        }
    
        const Asharp5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("A#5", "4n", now);
        }
    
        const B5 = () => {
            const now = Tone.now();
            synth.triggerAttackRelease("B5", "4n", now);
        }
    



    return (
        <>
        <h4 className={styles.heading}>Oscillator Selection</h4>
        <div className={styles.oscillator}>
            <button onClick={() => handleOscillatorChange("sine")}>Sine</button>
            <button onClick={() => handleOscillatorChange("square")}>Square</button>
            <button onClick={() => handleOscillatorChange("sawtooth")}>Saw Tooth</button>
            <button onClick={() => handleOscillatorChange("triangle")}>Triangle</button>
        </div>
        <div className={styles.piano}>
            <button className={styles.key} onMouseEnter={C2} ></button>
            <button className={styles.black} onMouseEnter={Csharp2} ></button>
            <button className={styles.key} onMouseEnter={D2} ></button>
            <button className={styles.black} onMouseEnter={Dsharp2} ></button>
            <button className={styles.key} onMouseEnter={E2} ></button>
            <button className={styles.key} onMouseEnter={F2} ></button>
            <button className={styles.black} onMouseEnter={Fsharp2} ></button>
            <button className={styles.key} onMouseEnter={G2} ></button>
            <button className={styles.black} onMouseEnter={Gsharp2} ></button>
            <button className={styles.key} onMouseEnter={A2} ></button>
            <button className={styles.black} onMouseEnter={Asharp2} ></button>
            <button className={styles.key} onMouseEnter={B2} ></button>
            <button className={styles.key} onMouseEnter={C3} ></button>
            <button className={styles.black} onMouseEnter={Csharp3} ></button>
            <button className={styles.key} onMouseEnter={D3} ></button>
            <button className={styles.black} onMouseEnter={Dsharp3} ></button>
            <button className={styles.key} onMouseEnter={E3} ></button>
            <button className={styles.key} onMouseEnter={F3} ></button>
            <button className={styles.black} onMouseEnter={Fsharp3} ></button>
            <button className={styles.key} onMouseEnter={G3} ></button>
            <button className={styles.black} onMouseEnter={Gsharp3} ></button>
            <button className={styles.key} onMouseEnter={A3} ></button>
            <button className={styles.black} onMouseEnter={Asharp3} ></button>
            <button className={styles.key} onMouseEnter={B3} ></button>
            <button className={styles.key} onMouseEnter={C4} ></button>
            <button className={styles.black} onMouseEnter={Csharp4} ></button>
            <button className={styles.key} onMouseEnter={D4} ></button>
            <button className={styles.black} onMouseEnter={Dsharp4} ></button>
            <button className={styles.key} onMouseEnter={E4} ></button>
            <button className={styles.key} onMouseEnter={F4} ></button>
            <button className={styles.black} onMouseEnter={Fsharp4} ></button>
            <button className={styles.key} onMouseEnter={G4} ></button>
            <button className={styles.black} onMouseEnter={Gsharp4} ></button>
            <button className={styles.key} onMouseEnter={A4} ></button>
            <button className={styles.black} onMouseEnter={Asharp4} ></button>
            <button className={styles.key} onMouseEnter={B4} ></button>
            <button className={styles.key} onMouseEnter={C5} ></button>
            <button className={styles.black} onMouseEnter={Csharp5} ></button>
            <button className={styles.key} onMouseEnter={D5} ></button>
            <button className={styles.black} onMouseEnter={Dsharp5} ></button>
            <button className={styles.key} onMouseEnter={E5} ></button>
            <button className={styles.key} onMouseEnter={F5} ></button>
            <button className={styles.black} onMouseEnter={Fsharp5} ></button>
            <button className={styles.key} onMouseEnter={G5} ></button>
            <button className={styles.black} onMouseEnter={Gsharp5} ></button>
            <button className={styles.key} onMouseEnter={A5} ></button>
            <button className={styles.black} onMouseEnter={Asharp5} ></button>
            <button className={styles.key} onMouseEnter={B5} ></button>
         
       
        </div>
        </>
    )
}

export default Synth 