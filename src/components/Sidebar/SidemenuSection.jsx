
import React from 'react'
import { prisma } from '../../../prisma/prisma';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee, faAppleAlt, faCar,faShoppingCart);

export const Icon = ({iconClass}) => {
    // console.log(iconClass, "hjhjg");
    const iconParts = iconClass?.split(' ');
    const prefix = iconParts[0]?.replace('fa-', '');
    const iconName = iconParts[1]?.replace('fa-', '');

    return <FontAwesomeIcon icon={[prefix, iconName]} size="xs" />;
}



const NavItem = ({ item }) => {
    return (
        <li className="nav-item">
            <Link
                className={`nav-link ${item.children && item.children.length > 0 ? 'dropdown-indicator' : ''}`}
                href={`${item.children && item.children.length > 0 ? "#" + item.url : item.url}`}
                role="button"
                data-bs-toggle={item.children && item.children.length > 0 ? 'collapse' : ''}
                aria-expanded="false"
                aria-controls={item.url}
            >
                <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                        {/* <Icon iconClass="fa-solid fa-shopping-cart" size="xs" /> */}
                        <FontAwesomeIcon icon="fas fa-shopping-cart" />
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
        where: {
            userPermissions: {
                every: {
                    userId: 3
                }
            }
        },
        include: {
            children: {
                include: {
                    children: {
                        include: {
                            children: true
                        }
                    }
                }
            }
        }
    });

    console.log(menu, "res");



    return menu.map((item, index) => (
        <NavItem key={index} item={item} />
    ))
}

// export default SidemenuSection