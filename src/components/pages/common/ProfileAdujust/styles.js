
export const styles = theme => ({
    cropContainer: {
      position: 'relative',
      width: '100%',
      height: 200,
      background: '#D6D3CA',
      [theme.breakpoints.up('sm')]: {
        height: 400,
      },
    },
    cropButton: {
      flexShrink: 0,
      marginLeft: 16,
    },
    controls: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sliderContainer: {
      display: 'flex',
      flex: '1',
      alignItems: 'center',
    },
    sliderLabel: {
      fontWeight:'bold',
      [theme.breakpoints.down('xs')]: {
        minWidth: 65
      },
    },
    slider: {
      padding: '22px 0px',
      marginLeft: 16,
      color:'#000',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '0 16px',
      },
    },
  })
  