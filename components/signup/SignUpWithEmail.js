const SignUpWithEmail = () => {
  return (
    <section>
      <div>
        <h2 className="text-center underline mt-4 font-bold">OR</h2>
      </div>
      <div className="flex flex-col items-center content-center mt-8">
        <input
          className="border-2 w-11/12 lg:w-3/12 h-12 mb-4"
          type="email"
          placeholder="E-mail address"
          required
        />
        <input
          className="border-2 w-11/12 lg:w-3/12 h-12 mb-4"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div className="flex gap-2 mt-8 justify-center">
        <input className="ml-2" type="checkbox" required />
        <p className="text-slate-500 lg:w-6/12">
          I agree lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis animi eligendi deleniti iste culpa voluptatum tenetur, sunt
          nesciunt accusantium dicta eveniet placeat perferendis exercitationem
          quasi vero eaque vitae eum odit, nobis ut labore itaque illum ab?
          Voluptates repellendus ratione dignissimos!
        </p>
      </div>
      <button className="block ml-auto mr-auto border-2 w-11/12 lg:w-2/12 h-12 bg-blue-400 text-white font-semibold mt-4 mb-4">
        Sign Up
      </button>
    </section>
  );
};

export default SignUpWithEmail;
