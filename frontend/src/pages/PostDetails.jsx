import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-[200px] mt-8 px-8">
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
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt
          deserunt iure ullam ipsam necessitatibus provident id eaque quibusdam
          reiciendis numquam dolorem voluptatum expedita saepe, velit, neque ad
          doloribus. Voluptatem? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quaerat perferendis facere reiciendis, laborum aut
          in officia tempora debitis et? Aliquid sequi natus praesentium ipsam
          at beatae doloribus et qui perferendis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quam, et deserunt. Similique ex
          doloribus unde sunt, fugit omnis esse, ducimus eveniet debitis
          quisquam excepturi quo, aperiam hic. Rem, provident dolorum!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Mobile</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold ">Comments:</h3>

          {/* Comments */}
          <Comment/>
          <Comment/>

        </div>
        {/* WRITE A COMMENT */}

        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input type="text" className="md:w-[90%] outline-none px-4 mt-4 md:mt-0" placeholder="Write a comment" />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
