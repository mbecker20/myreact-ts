# API:

## Components:
  
### Item Components:
  
**Tile** <br />
*inputs*: { classes: JSSobject, number, onClick }

**TilePuzzle** <br />
*inputs*: { none }

**Button** <br />
*inputs*: { style: object, onClick: function }

**TextButton** <br />
*inputs*: { text: string, style: object }

### Utility Components:

**Grid.Container** <br />
*inputs*: { padding: number, numRows: number, numCols:number }

**Grid.Item** <br />
*inputs*: { gridPos: Array(2)[number] }

**Grid Example** <br />

      import { Grid } from './componenents/all'

      <Grid.Container padding={5} numRows={4} numCols={4}>
        <Grid.Item gridPos={[1,2]}>
          <h1>grid example</h1>
        </Grid.Item>
      </Grid.Container>

## Javascript Functions:

**range** <br />
*inputs*: { start: integer, stop: integer } <br />
*location*: { src/helpers/vecFuncs.js } <br />
*description*: { generates array of integers from start (inclusive) to stop (exclusive) }

**makeGrid** <br />
*inputs*: { numRows: integer, numCols: integer, valFunc: function }  <br />
*location*: { src/helpers/vecFuncs.js }

**randomGen** <br />
*inputs*: { min: number, max: number } <br />
*location*: { src/helpers/randomGen.js } <br />
*description*: { generates random number between max and min, inclusive of both }

**randomGenInt** <br />
*inputs*: { min: number, max: number } <br />
*location*: { src/helpers/randomGen.js } <br />
*description*: { generates random integer between max and min, inclusive of both }

# Structure:

Components are in the 'src/components' folder. Each component is a folder which contains the javascript
for the component in main.js, as well as a 'style.js' to create jss (and maybe additional css) to style the component. Sub components necessary to exported component are in this folder as well. To make importing easier, the component is then re-exported from /components/all.js.

Because NavBar component is tied in so closely with style of whole app,
style for NavBar is placed into style.js of App.