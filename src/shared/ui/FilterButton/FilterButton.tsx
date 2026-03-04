import styles from './FilterButton.module.css';

export const FilterButton = ({ filter, variants, onChange }: {
  filter: string;
  onChange: (newFilter: string) => void;
  variants: { [key: string]: string };
}) => {
  return (
    <div className={styles.Container}>
      {Object.entries(variants).map(([name, title]) => (
        <label className={styles.Item} key={name}>
          <input type="radio" name="filter" checked={name === filter} onClick={() => onChange(name)} />
          {title}
        </label>
      ))}
    </div>
  );
}
