import sizes from './sizes';

export default {
  palette: {
    height: '95vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0px auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      color: 'rgba(255,255,255,0.8)',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none'
    },
    [sizes.down('lg')]: {
      height: '33.3333%',
      width: '25%'
    },
    [sizes.down('md')]: {
      height: '20%',
      width: '50%'
    },

    [sizes.down('xs')]: {
      height: '10%',
      width: '100%'
    }
  }
};
