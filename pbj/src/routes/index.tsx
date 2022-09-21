import Temp1 from '../pages/temp1';
import Temp2 from '../pages/temp2';

export interface RootChildren {
    path: string;
    label: string;
    element: JSX.Element;
}

export interface Root {
    label: string;
    children: Array<RootChildren>
}

const RouteArr: Array<Root> = [
    {
        label: 'INTRO',
        children: [
            {
                path: '/pbj/t1',
                label: 'COMPANY',
                element: (<><Temp1 /></>)
            },
            {
                path: '/pbj/t2',
                label: 'NOTICE',
                element: (<><Temp2 /></>)
            }
        ]
    },
];

export default RouteArr;