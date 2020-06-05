import { createUseStyles } from 'react-jss'
import { Colors } from '../../appColors'

const useJSS = createUseStyles({
  CVContainer: {
    backgroundColor: (colors: Colors) => colors.primary,
    //position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflowY: 'scroll',
    width: '30vh',
    height: '50vmin',
    flexGrow: '3',
    flexShrink: '3',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    margin: '10px'
  },

  CVInnerContainer: {
    //backgroundColor: (colors: Colors) => colors.secondary,
    //position: 'absolute',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: '15px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    userSelect: 'none',
    overflowY: 'scroll',
    width: '30vh',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },

  Chapter: {
    //backgroundColor: (colors: Colors) => colors.primary,
    //flexGrow: '1',
    //flexShrink: '1',
    //flexBasis: '0',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  ChapterName: {
    //borderColor: 'white',
    //borderStyle: 'solid',
    padding: '5px',
  },

  SubChapter: {
    //backgroundColor: (colors: Colors) => colors.primary,
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0',
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //height: '3vmin'
  },
})

export default useJSS;