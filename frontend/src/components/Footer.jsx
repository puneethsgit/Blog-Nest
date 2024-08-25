const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-zinc-300 px-8 md:px-[300px] flex md:flex-row flex-col items-start  md:space-y-0 justify-between text-sm md:text-md py-8 md:mt-8 ">
        <div className="flex flex-col text-black ">
          <p>Featured Blogs</p>
          <p>Popular Blogs</p>
          <p>Your Choice</p>
        </div>
        <div className="flex flex-col text-black">
          <p>Support</p>
          <p>Contact</p>
          <p>Recent Posts</p>
        </div>
        <div className="flex flex-col text-black">
          <p>About us</p>
          <p>Privacy Policy</p>
          <p>Terms of Services </p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <p className="py-2 pb-6  text-center text-black bg-zinc-300 text-sm">All Rights Resvered @puneethsgit</p>
    </>
  );
};

export default Footer;
