import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import base_styles from 'util/css/base.module.scss';
import styles from './style.module.scss';

const To_top = () => {
  const { windowScroll } = useGlobalStateContext();

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div 
      className={`${styles['to-top']} ${windowScroll.sy > 500 ? styles.show : ''}`}
      onClick={returnTop}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  );
}

export default To_top;