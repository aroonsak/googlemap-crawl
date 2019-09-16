const puppeteer = require('puppeteer')
const notifier = require('node-notifier')


;(async () => {
                const browser = await puppeteer.launch()
                const page = await browser.newPage()
                await page.setViewport({
                  width: 2000,
                  height: 2000,
                  deviceScaleFactor: 1
                })
                const lat = 15.02198;
                const lng = 104.797501;
                const line = 9;
                // const position = '15.02198,104.838501'
                for(i=-1;i<0;i++){
                  const position = `${lat-(line*0.031)},${lng+(i*0.041)}`
                  await page.goto(
                    `https://www.google.co.th/maps/place/%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD+%E0%B9%80%E0%B8%94%E0%B8%8A%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A1+%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5/@${position},4011m/data=!3m1!1e3!4m5!3m4!1s0x31141e1be7696775:0x302b54113606010!8m2!3d14.8548457!4d105.0791228?hl=th`
                  )
                  await page.waitFor(20000)
                  await page.click('.widget-pane-toggle-button-container button')
                  await page.screenshot({path: `line${line}/${i}.png`})
                  await console.log(`saved : line ${line}-${i}`)
                  await notifier.notify(`saved : line ${line}-${i}`)
                }
                await browser.close()
              })()
