import { createUseStyles } from 'react-jss'
import { Colors } from '../../appColors'

const useJSS = createUseStyles({
  CVContainer: {
    backgroundColor: (colors: Colors) => colors.tertiary,
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
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },

  CVInnerContainer: {
    backgroundColor: (colors: Colors) => colors.secondary,
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
    backgroundColor: (colors: Colors) => colors.primary,
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0',
    padding: '10px',
  },

  ChapterName: {
    borderColor: 'white',
    borderStyle: 'solid',
  },

  SubChapter: {
    backgroundColor: (colors: Colors) => colors.primary,
    flexGrow: '1',
    flexShrink: '1',
    flexBasis: '0',
    alignSelf: 'center',
    height: '5vmin'
  },
})

export default useJSS;