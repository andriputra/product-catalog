// Breadcrumb.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-600 mb-4 text-md container mx-auto flex mt-8 pt-5">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.isLast ? (
            <span className="font-bold">{item.label}</span>
          ) : (
            <span>
              <a href={item.href} className="hover:text-blue-600">{item.label}</a>
              {index < items.length - 1 && (
                <span className="mx-2">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              )}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
