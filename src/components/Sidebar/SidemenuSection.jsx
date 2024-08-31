import { prisma } from "../../../prisma/prisma";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ item }) => {
  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${
          item.children && item.children.length > 0 ? "dropdown-indicator" : ""
        }`}
        href={`${
          item.children && item.children.length > 0 ? "#" + item.url : item.url
        }`}
        role="button"
        data-bs-toggle={
          item.children && item.children.length > 0 ? "collapse" : ""
        }
        aria-expanded="false"
        aria-controls={item.url}
      >
        <div className="d-flex align-items-center">
          <span className="nav-link-icon">
            {/* <Icon iconClass="fa-solid fa-shopping-cart" size="xs" /> */}
            <FontAwesomeIcon icon={item.icon || `fas fa-car`} />
          </span>
          <span className="nav-link-text ps-1">{item.name}</span>
        </div>
      </Link>
      {item.children && item.children.length > 0 && (
        <ul className="nav collapse" id={item.url}>
          {item.children.map((child, index) => (
            <NavItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const SidemenuSection = async () => {
  const menu = await prisma.menu.findMany({
    where:{
        parentId: null
    },
    select: {
      name: true,
      id: true,
      url: true,
      icon:true,
      children: {
        select: {
          name: true,
          id: true,
          url: true,
          children: {
            select: {
              name: true,
              id: true,
              url: true,
              children:true
            },
          },
        },
      },
    },
    //   include: {
    //     children: {
    //       include: {
    //         children: {
    //           include: {
    //             children: true,
    //           },
    //         },
    //       },
    //     },
    //   },
  });

  console.log(menu, "res");

  return menu.map((item, index) => <NavItem key={index} item={item} />);
};

// export default SidemenuSection
