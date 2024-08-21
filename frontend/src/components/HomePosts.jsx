const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-6 ">
      {/* left */}
      <div className=" w-[35%] h-[200px] flex justify-center items-center ">
        <img

          src="https://oasis.opstatics.com/content/dam/oasis/page/brand/blog/insight-into-the-materials-oneplus-chooses-for-its-devices/1600x720.jpg"
          alt=""
           className="w-full h-full object-cover"
        />
      </div>
      {/* right */}
      <div className=" flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl ">
          Smartphone Materials Q&A with OnePlus' COO & Head of R&D
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500  item-center md:mb-4 ">
          <p>@oneplus dev </p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45 </p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          OnePlus is known for the best hardware coupled with the best software
          to drive a burdenless experience for our users. However, hardware
          doesn’t only mean the best SoC or the biggest battery, it also means
          the materials used in the development of a device. Throughout our
          history we have explored and used a range of materials within our
          products from stainless steel to sapphire to glass to ceramic and
          more, so we wanted to get insight from OnePlus’ COO and Head of R&D,
          Kinder Liu, on the range of materials used within consumer devices and
          how OnePlus continues to evaluate them
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
