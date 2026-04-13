import { useState, type ReactNode } from 'react';
import styles from './Tooltip.module.css';
import { createPortal } from 'react-dom';

export const Tooltip = ({ children, text }: {
  children: ReactNode;
  text: string;
}) => {
  const [isShown, setIsShown] = useState(false);
  return createPortal(
    <div className={styles.tooltip}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={(e) => e.stopPropagation() /* не всплывать при клике на дочерний элемент */}>
      {text && <div className={styles.tooltipText} style={{ display: isShown ? 'block' : 'none'}}>{text}</div>}
      {children}
    </div>,
    document.getElementById('tooltip-root')!
  );
};
