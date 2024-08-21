import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-2xl">
            Smartphone Materials Q&A with OnePlus' COO & Head of R&D{" "}
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4 ">
          <p>@oneplus dev </p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45 </p>
          </div>
        </div>
        <img
          src=" https://oasis.opstatics.com/content/dam/oasis/page/brand/blog/insight-into-the-materials-oneplus-chooses-for-its-devices/1600x720.jpg"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p></p>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
