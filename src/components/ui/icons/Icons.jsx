import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCoffee, faAppleAlt, faCar,faShoppingCart);

// export const Icon = ({iconClass}) => {
//     const iconParts = iconClass?.split(' ');
//     const prefix = iconParts[0]?.replace('fa-', '');
//     const iconName = iconParts[1]?.replace('fa-', '');

//     return <FontAwesomeIcon icon={[prefix, iconName]} size="xs" />;
// }