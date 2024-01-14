import Image from "next/image";
import Link from "next/link";

const blogs = () => {
  return (
    <div className="max-w-6xl px-5 my-5 m-auto">
      <h1 className="text-3xl font-bold mb-8">Blogs</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-8">
        <div className="w-full">
          <p className="text-gray-600 mb-4">Published on: September 10, 2022</p>
          <Image
            src="https://i.ibb.co/YfTVZWJ/about-2.jpg"
            width={400}
            height={300}
            alt="blog"
            priority
            style={{ maxWidthidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div className="w-full">
          <p className="text-gray-600 mb-4 leading-6">
            As technology continues to shape our world, the role of developers
            becomes increasingly pivotal. In this ever-evolving landscape,
            Placeholder JSON emerges as a beacon of innovation. Our journey is
            fueled by the passion to simplify the complexities of data handling,
            enabling developers to unleash their creativity seamlessly. At
            Placeholder JSON, we believe in the power of clean and
            well-organized data. Our tools are meticulously crafted to empower
            developers, offering them a robust platform for efficient JSON
            manipulation. Whether you are a seasoned coder or just starting your
            coding journey, our commitment is to provide you with intuitive
            solutions that elevate your development experience. Join our
            community and embark on a journey where collaboration and innovation
            converge. Explore the possibilities, streamline your workflow, and
            let Placeholder JSON be your trusted companion in the dynamic world
            of web development.
          </p>

          <Link
            href="/blog/1"
            className="bg-customBg p-3 text-white rounded cursor-pointer"
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
        <div className="w-full">
          <p className="text-gray-600 mb-4">Published on: December 12, 2022</p>
          <Image
            src="https://i.ibb.co/pXFrJ2L/2021-12-26.jpg"
            width={400}
            height={300}
            alt="blog"
            priority
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="w-full">
          <p className="text-gray-600 mb-4 leading-6">
            In the ever-changing tech landscape, developers play a crucial role.
            Enter Placeholder JSON, an innovative force simplifying data
            handling. We are passionate about empowering developers, providing
            intuitive tools for efficient JSON manipulation. Whether you are a
            seasoned coder or just starting, our commitment is to elevate your
            development experience. Join our community, explore possibilities,
            streamline your workflow, and let Placeholder JSON be your trusted
            companion in web developments dynamic world.
          </p>

          <Link
            href="/blog/1"
            className="bg-customBg p-3 text-white rounded cursor-pointer"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default blogs;
