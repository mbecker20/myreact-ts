const primary = '#282c34' // grey
//const primary = '#4d4d4d' // grey
const secondary = '#281c34' //purple
const tertiary = '#182c54' // blue

export interface Colors {
  primary: string,
  secondary: string,
  tertiary: string,
}

export interface Theme {
  colors: Colors
}

const colors: Colors = {
  primary: primary,
  secondary: secondary,
  tertiary: tertiary,
}

export default colors


