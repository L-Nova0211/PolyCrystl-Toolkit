# PolyCrystal UIkit

[![Version](https://img.shields.io/npm/v/@crystals/uikit)](https://www.npmjs.com/package/@crystals/uikit) [![Size](https://img.shields.io/bundlephobia/min/@crystals/uikit)](https://www.npmjs.com/package/@crystals/uikit)

PolyCrystal UIkit is a set of React components and hooks used to build pages on PolyCrystal's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @crystals/uikit`

## Setup

### Theme

Before using PolyCrystal UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@crystals/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@crystals/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIKit

If you want to use components from the UIkit, check the [Storybook documentation](https://polycrystal.github.io/uikit/)
