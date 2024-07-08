/** Currently unused */
const CHROME_EXTENSIONS_PATH_UBLOCK = '../browser/browser_extensions/ublock_origin/chromium'

/**
 * BrowserContext properties
 */
const BROWSER_CONFIG = {
    dataDir: '/./Users/Pengwin/Desktop/data-node-js/browser/browser-data', 
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.3',
    viewport: { width: 1280, height: 1024 },
    args: [/*
        `--disable-extensions-except=${CHROME_EXTENSIONS_PATH_UBLOCK}`,
        `--load-extension=${CHROME_EXTENSIONS_PATH_UBLOCK}` 
    */]
};


export { BROWSER_CONFIG };

