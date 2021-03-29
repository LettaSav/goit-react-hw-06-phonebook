import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contact_list: {
    listStyle: 'none',
    marginTop: 40,
  },
  contact_item: {
    width: 300,
    marginBottom: 5,
    margin: 0,

    display: 'flex',
    justifyContent: 'space-beetwen',
    alignItems: 'center',
  },
  btn: {
    color: '#61677C',

    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',

    border: 0,
    outline: 0,
    borderRadius: 16 * 20,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 0,
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: '#B8F2E6',
      color: '#5E6472',
      transform: 'translatey(3px)',
      boxShadow: 'none',
    },
  },
});

export default useStyles;
