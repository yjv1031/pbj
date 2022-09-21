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
        label: '??',
        children: [
            {
                path: '/phaser/t1',
                label: '예시1',
                element: (<><Temp1 /></>)
            },
            {
                path: '/phaser/t2',
                label: '예시2',
                element: (<><Temp2 /></>)
            }
        ]
    },
];

export default RouteArr;