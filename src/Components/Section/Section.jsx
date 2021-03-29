import PropTypes from 'prop-types';
import style from './Section.module';

const Section = ({ title, children }) => {
  return (
    <section>
      <hi className={style.title}>{title}</hi>
      {children}
    </section>
  );
};

Section.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    }),
  ),
};

export default Section;
