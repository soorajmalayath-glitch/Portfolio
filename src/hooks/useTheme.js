import { useEffect, useState } from 'react'
export function useTheme() { const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark'); useEffect(() => { document.documentElement.classList.toggle('light', theme === 'light'); localStorage.setItem('portfolio-theme', theme) }, [theme]); return [theme, () => setTheme((current) => current === 'dark' ? 'light' : 'dark')] }
