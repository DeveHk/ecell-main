import Link from 'next/link';

const Pagination = ({ numPages, currentPage }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blogs/blog/page/${currentPage - 1}`;
  const nextPage = `/blogs/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={prevPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              Previous
            </li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blogs/blog/page/${i + 1}`} key={i}>
            <li
              className={`relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:cursor-pointer ${
                currentPage === i + 1
                  ? 'bg-primary text-gray-100'
                  : 'hover:bg-gray-200'
              }`}
              
            >
              {i + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
