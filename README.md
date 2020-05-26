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

**makeLayoutGrid** <br />
*inputs*: { padding: number, numRows: number, numCols: number }
*description*: { creates the grid object that holds the container and item components }

**Grid.Container** <br />
*inputs*: { style: object }

**Grid.Item** <br />
*inputs*: { gridPos: Array(2)[number], style: object }

**Grid Example** <br />

      import { makeLayoutGrid } from './componenents/Grid/main'

      const padding = 5
      const numRows = 4
      const numCols = 4

      const layoutGrid = makeLayoutGrid(padding, numRows, numCols)

      <layoutGrid.Container>
        <layoutGrid.Item gridPos={[1,2]}>
          <h1>grid example</h1>
        </layoutGrid.Item>
      </layoutGrid.Container>

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