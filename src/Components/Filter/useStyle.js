import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contacts_input: {
    width: 200,
    height: 30,
    margin: 'auto',
    background: '#fff',

    borderRadius: 20,
    border: 0,
    padding: 10,

    textShadow: '1px 1px 0 white',
    outline: 'none',
    fontSize: 16,
    fontFamily: 'Abel sans-serif',
    color: '#5E6472',
    transition: '0.2s linear',
  },
  contacts_label: {
    marginRight: 10,
  },
});

export default useStyles;
