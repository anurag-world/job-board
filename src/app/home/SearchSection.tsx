import { Button } from '@mui/material';

type SearchProps = {
  styles: { readonly [key: string]: string };
  skills: string;
  setSkills: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  handleSearch: () => void;
};

export default function SearchSection({
  styles,
  skills,
  setSkills,
  location,
  setLocation,
  handleSearch,
}: SearchProps) {
  return (
    <section className="flex justify-center mb-20">
      <form onSubmit={handleSearch}>
        <div className={styles.formContainer}>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter skills / designations / companies"
            className={styles.formControl}
            style={{ minWidth: 350 }}
            required
          />
          <div className={styles.pipe}></div>
          <select className={styles.selectFormControl} required>
            <option>No Experience</option>
          </select>
          <div className={styles.pipe}></div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            className={styles.formControl}
            style={{ minWidth: 210 }}
            required
          />
          <Button variant="contained" type="submit" className={styles.search}>
            Search
          </Button>
        </div>
      </form>
    </section>
  );
}
