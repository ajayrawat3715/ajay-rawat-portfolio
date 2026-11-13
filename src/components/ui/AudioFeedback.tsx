"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playBeep: () => void;
  playSuccess: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: false,
  toggleSound: () => {},
  playClick: () => {},
  playBeep: () => {},
  playSuccess: () => {},
});

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Check localStorage
    const saved = localStorage.getItem("ajay_sound_enabled");
    if (saved === "true") {
      setSoundEnabled(true);
    }
  }, []);

  const getAudioContext = () => {
    if (!audioCtx && typeof window !== "undefined") {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioCtx(ctx);
      return ctx;
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("ajay_sound_enabled", String(next));
    if (next) {
      // Play activation tone
      const ctx = getAudioContext();
      if (ctx) {
        playTone(ctx, 880, 0.05, "sine");
        setTimeout(() => playTone(ctx, 1320, 0.08, "sine"), 60);
      }
    }
  };

  const playTone = (
    ctx: AudioContext,
    freq: number,
    duration: number,
    type: OscillatorType = "sine",
    gainLevel: number = 0.04
  ) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not permitted or interrupted
    }
  };

  const playClick = () => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (ctx) playTone(ctx, 1200, 0.02, "triangle", 0.02);
  };

  const playBeep = () => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (ctx) playTone(ctx, 740, 0.04, "sine", 0.03);
  };

  const playSuccess = () => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (ctx) {
      playTone(ctx, 587.33, 0.05, "sine", 0.04);
      setTimeout(() => playTone(ctx, 880, 0.08, "sine", 0.04), 50);
    }
  };

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        playClick,
        playBeep,
        playSuccess,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);

export const SoundToggle: React.FC = () => {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      className={`p-1.5 rounded-md border text-xs font-mono transition-all flex items-center gap-1.5 ${
        soundEnabled
          ? "bg-accent/15 border-accent text-accent shadow-[0_0_10px_rgba(0,229,255,0.3)]"
          : "bg-canvas-surface border-canvas-border text-sand-muted hover:text-sand hover:border-canvas-border-bright"
      }`}
      title={soundEnabled ? "Mute interface feedback audio" : "Enable tactile interface audio clicks"}
      aria-label="Toggle UI Audio"
    >
      {soundEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-accent" />
          <span className="hidden sm:inline text-[10px] font-bold">AUDIO ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[10px]">AUDIO OFF</span>
        </>
      )}
    </button>
  );
};

