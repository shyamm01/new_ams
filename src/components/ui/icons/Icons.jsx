import { faChartPie, faCartPlus, faPlay, faInfinity, faRecycle, faTruck, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChartPie, faCartPlus, faPlay, faInfinity, faRecycle, faTruck, faLayerGroup);

// export const Icon = ({iconClass}) => {
//     const iconParts = iconClass?.split(' ');
//     const prefix = iconParts[0]?.replace('fa-', '');
//     const iconName = iconParts[1]?.replace('fa-', '');

//     return <FontAwesomeIcon icon={[prefix, iconName]} size="xs" />;
// }