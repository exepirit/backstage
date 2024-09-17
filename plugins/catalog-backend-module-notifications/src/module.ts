import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { notificationService } from '@backstage/plugin-notifications-node';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { NotificationsSendProcessor } from './processor';

export const catalogModuleNotifications = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'notifications',
  register(reg) {
    reg.registerInit({
      deps: {
        logger: coreServices.logger,
        notificationService: notificationService,
        catalog: catalogProcessingExtensionPoint,
      },
      async init({ logger, notificationService, catalog }) {
        catalog.addProcessor(new NotificationsSendProcessor(logger, notificationService));
      },
    });
  },
});
