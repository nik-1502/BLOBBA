import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { loadInitialTheme, saveWebAppTheme, WEB_APP_THEME_KEY } from '../src/themePreference.ts'

const stored = new Map()
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key) => stored.get(key) ?? null,
    setItem: (key, value) => stored.set(key, value),
  },
})

test('browser always starts green without changing the web app preference', () => {
  stored.clear()
  saveWebAppTheme('light', true)
  assert.equal(loadInitialTheme(false), 'green')
  saveWebAppTheme('neon', false)
  assert.equal(loadInitialTheme(true), 'light')
})

test('web app starts green, then remembers each selected design', () => {
  stored.clear()
  assert.equal(loadInitialTheme(true), 'green')
  for (const theme of ['light', 'neon', 'neon-new', 'green']) {
    saveWebAppTheme(theme, true)
    assert.equal(stored.get(WEB_APP_THEME_KEY), theme)
    assert.equal(loadInitialTheme(true), theme)
  }
  stored.set(WEB_APP_THEME_KEY, 'unknown')
  assert.equal(loadInitialTheme(true), 'green')
})

test('early page background agrees with the browser and web app defaults', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8')
  const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1]
  assert.ok(script)
  for (const [standalone, saved, expected] of [[false, 'light', 'green'], [true, null, 'green'], [true, 'light', 'light'], [true, 'neon-new', 'neon-new']]) {
    const document = { documentElement: { dataset: {} }, querySelector: () => ({ content: '' }) }
    runInNewContext(script, {
      document,
      window: { matchMedia: () => ({ matches: standalone }) },
      navigator: {},
      localStorage: { getItem: () => saved },
    })
    assert.equal(document.documentElement.dataset.themeChoice, expected)
  }
})
