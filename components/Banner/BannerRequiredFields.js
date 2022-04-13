const BannerRequiredFields = () => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center">
      <div>
        <select
          aria-required
          className="border-2 w-11/12 h-12 mb-4 text-slate-400"
        >
          <option disabled selected>
            What is your issue?
          </option>
          <option>Eye</option>
          <option>Dentist</option>
          <option>Dietician</option>
          <option>Urology</option>
          <option>ENT</option>
          <option>Orthopedics</option>
          <option>Sexual Health</option>
          <option>Physiotherapy</option>
          <option>Renal Unit</option>
        </select>
      </div>
      <div>
        <select
          aria-required
          className="border-2 w-11/12 h-12 mb-4 text-slate-400"
        >
          <option disabled>Choose a state</option>
          <option>Alabama</option>
          <option>Alaska</option>
          <option>Arizona</option>
          <option>Arkansas</option>
          <option>California</option>
          <option>Colorado</option>
          <option>Connecticut</option>
          <option>Delaware</option>
          <option>Florida</option>
          <option>Alabama</option>
          <option>Georgia</option>
          <option>Hawaii</option>
          <option>Idaho</option>
          <option>Kansas</option>
          <option>Kentucky</option>
          <option>Michigan</option>
          <option>Minnesota</option>
          <option>Mississippi</option>
          <option>Montana</option>
          <option>Nebraska</option>
          <option>Nevada</option>
          <option>New Mexico</option>
          <option>New York</option>
          <option>Oregon</option>
          <option>Texas</option>
          <option>Utah</option>
          <option>Vermont</option>
          <option>Washington</option>
        </select>
      </div>
      <div>
        <button className="mt-8 rounded-sm bg-green-800 w-8/12 lg:w-11/12 h-12">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="w-4 ml-auto mr-auto inline-block"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#000"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
          <span className="ml-2">Search</span>
        </button>
      </div>
    </div>
  );
};

export default BannerRequiredFields;
