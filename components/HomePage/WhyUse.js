const WhyUse = () => {
  return (
    <section className="mt-6 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      <div className="mt-2 md:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-navbar inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h2 className="inline-block mx-6 text-black font-semibold">
          Find a doctor or an expert
        </h2>
        <p className="my-4 text-slate-600 lg:w-72 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
          harum, impedit error ipsam nemo?
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-navbar inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h2 className="inline-block mx-6 text-black font-semibold">
          Take appointment online
        </h2>
        <p className="my-4 text-slate-600 lg:w-72 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
          harum, impedit error ipsam nemo?
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-navbar inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="inline-block mx-6 text-black font-semibold">
          Appointment reminder
        </h2>
        <p className="my-4 text-slate-600 lg:w-72 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
          harum, impedit error ipsam nemo?
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-navbar inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <h2 className="inline-block mx-6 text-black font-semibold">
          Rate and share experience
        </h2>
        <p className="my-4 text-slate-600 lg:w-72 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officia
          harum, impedit error ipsam nemo?
        </p>
      </div>
      <hr className="w-full mb-4" />
    </section>
  );
};

export default WhyUse;
