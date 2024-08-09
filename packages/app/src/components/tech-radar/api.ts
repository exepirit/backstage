import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage-community/plugin-tech-radar';
import { radarLayout } from './layout';

export class TechRadarProvdier implements TechRadarApi {
  async load(_id: string | undefined): Promise<TechRadarLoaderResponse> {
    return {
      ...radarLayout,
      entries: [
        {
          id: 'debian',
          title: 'Debian',
          quadrant: 'infrastructure',
          key: 'debian',
          description:
            'Debian is a free and open-source software community project that develops and distributes an influential operating system called the Debian Linux distribution, which consists of various software packages precompiled for installation on personal computers, servers, or other devices.',
          timeline: [
            {
              moved: 0,
              ringId: 'adopt',
              date: new Date('2024-08-09'),
              description: '',
            },
          ],
        },
      ],
    };
  }
}
