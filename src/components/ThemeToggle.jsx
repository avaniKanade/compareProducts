
const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        checked={darkMode}
        onChange={onToggle}
        id="themeSwitch"
      />
      <label className="form-check-label" htmlFor="themeSwitch">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
};

export default ThemeToggle;
