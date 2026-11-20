export type AppTheme = 'light' | 'neon' | 'neon-new' | 'green'

export const WEB_APP_THEME_KEY = 'blobba.theme.webapp.v1'

export function isStandaloneApp() {
  return window.matchMedia('(display-mode: standalone)').matches
    || (navigator as Navigator & { standalone?: boolean }).standalone === true
}

export function loadInitialTheme(standalone: boolean): AppTheme {
  if (!standalone) return 'green'
  try {
    const saved = localStorage.getItem(WEB_APP_THEME_KEY)
    return saved === 'light' || saved === 'neon' || saved === 'neon-new' || saved === 'green' ? saved : 'green'
  } catch {
    return 'green'
  }
}

export function saveWebAppTheme(theme: AppTheme, standalone: boolean) {
  if (!standalone) return
  try {
    localStorage.setItem(WEB_APP_THEME_KEY, theme)
  } catch {
    // The selection remains active in memory if storage is unavailable.
  }
}
