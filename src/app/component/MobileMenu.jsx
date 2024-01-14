import Link from "next/link";

const MobileMenu = ({ isMenuOpen, handleNavigate }) => {
  return (
    <div
      className={`md:hidden absolute top-20 left-0 right-0 bg-customBg flex gap-3 flex-col items-center py-5 text-white transition-transform transform border-t border-solid border-gray-500  ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href="/about" onClick={() => handleNavigate("/about")}>
        About
      </Link>
      <Link href="/blogs" onClick={() => handleNavigate("/blogs")}>
        Blogs
      </Link>
      <Link href="/faqs" onClick={() => handleNavigate("/faqs")}>
        Faqs
      </Link>
      <button
        className="text-white font-bold"
        onClick={() => handleNavigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default MobileMenu;
