<div align="center">
  <h1>HoYoAPI - TypeScript/JavaScript HoYoAPI</h1>

  <p>
        <a href="https://github.com/wavyflow/hoyoapi/actions/workflows/test.yml">
            <img src="https://img.shields.io/github/actions/workflow/status/wavyflow/hoyoapi/test.yml?branch=master&amp;label=test&amp;style=flat-square" alt="GitHub Test Action Status">
        </a>
        <a href="https://github.com/wavyflow/hoyoapi/actions/workflows/test.yml">
            <img src="https://raw.githubusercontent.com/wavyflow/hoyoapi/gh-pages/badges.svg" alt="Coverage">
        </a>
        <a href="https://www.npmjs.com/package/hoyoapi">
            <img src="https://img.shields.io/npm/dt/hoyoapi.svg?style=flat-square" alt="Total Downloads">
        </a>
        <a href="LICENSE">
            <img src="https://img.shields.io/github/license/wavyflow/hoyoapi?style=flat-square" alt="LICENSE">
        </a>
    </p>
    <p>
      <a href="https://www.npmjs.com/package/hoyoapi">
          <img src="https://img.shields.io/npm/v/hoyoapi.svg?style=flat-square" alt="Latest Version on Packagist">
      </a>
      <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/wavyflow/hoyoapi/master?style=flat-square&label=github">
      <a href="https://github.com/wavyflow/hoyoapi/releases/latest">
          <img src="https://img.shields.io/github/release-date/wavyflow/hoyoapi?style=flat-square" alt="GitHub Release Date - Published_At">
      </a>
      <img alt="node-current" src="https://img.shields.io/node/v/hoyoapi?style=flat-square">
    </p>
</div>

This is a NodeJS library designed as a connector to the Official HoYoLab API, commonly accessed by browsers easily and quickly. This library supports both ESM and CJS, but can only be used in NodeJS environments starting from version 8.17 and above.

## Install

For NPM <br>
`npm install hoyoapi`

For Yarn <br>
`yarn install hoyoapi`

## Features

| Features          | Genshin Impact     | Honkai Impact      | Honkai Star Rails  |
| ----------------- | ------------------ | ------------------ | ------------------ |
| Daily Check-In    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Redeem            | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Battle Chronicles | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Diary             | :white_check_mark: | :x:                | :x:                |
| Daily Note        | :white_check_mark: | :x:                | :white_check_mark: |

## How to obtain HoYoLab Cookie

1. To begin, login with your [HoYoLab](https://www.hoyolab.com/home) Account or from [Battlepass](https://act.hoyolab.com/app/community-game-records-sea/index.html?bbs_presentation_style=fullscreen&bbs_auth_required=true&gid=2&user_id=122516750&utm_source=hoyolab&utm_medium=gamecard&bbs_theme=light&bbs_theme_device=1#/ys).
2. Type `java` in the address bar followed by the script down below.
3. ```
   script:check = document.cookie.includes('ltoken') && document.cookie.includes('ltuid') || alert('Please logout and log back in before trying again, cookie is currently expired/invalid!'); cookie = document.cookie; check && document.write(`<p>${cookie}</p><br><button onclick="navigator.clipboard.writeText('${cookie}')">Click here to copy!</button><br>`)
   ```
4. Once you've successfully ran the script, click the Click here to copy! button to copy the cookie.
5. Finally, you can copy your cookie

## Documentation

[![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://wavyflow.github.io/hoyoapi/ 'Go to project documentation')

## License

MIT License

Copyright (c) 2023 Ashary Vermaysha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.