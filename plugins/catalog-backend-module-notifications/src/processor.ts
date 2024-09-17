import { LoggerService } from '@backstage/backend-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { LocationSpec } from '@backstage/plugin-catalog-common';
import {
    CatalogProcessor,
    CatalogProcessorEmit,
    CatalogProcessorCache,
  } from '@backstage/plugin-catalog-node';
import { NotificationService } from '@backstage/plugin-notifications-node';

export class NotificationsSendProcessor implements CatalogProcessor {
    private logger: LoggerService;
    private notificationService: NotificationService;

    constructor(logger: LoggerService, notificationService: NotificationService) {
        this.logger = logger;
        this.notificationService = notificationService;
    }

    getProcessorName(): string {
        return 'NotificationsSendProcessor';
    }

    /**
    * Processes an entity after it has been updated in the catalog.
    * Sends a notification with the details of the entity.
    * 
    * @param {Entity} entity - The entity from the catalog.
    * @param {LocationSpec} location - The specification of the location where the entity was found.
    * @param {CatalogProcessorEmit} emit - A function to emit events during processing.
    * @param {CatalogProcessorCache} cache - A cache for storing and retrieving processed entities.
    * 
    * @returns {Promise<Entity>} - The processed entity, unchanged in this case.
    */
    async postProcessEntity(entity: Entity, location: LocationSpec, emit: CatalogProcessorEmit, cache: CatalogProcessorCache): Promise<Entity> {
        this.notificationService.send({
            recipients: {
                type: 'broadcast'
            },
            payload: {
                title: `Entity Updated: ${entity.metadata.name}`,
                description: `The entity ${entity.metadata.name} has been updated in the catalog.`,
                link: `/catalog/${entity.metadata.namespace}/${entity.kind}/${entity.metadata.name}`
            }
        });
        this.logger.debug(`Notification sent for entity: ${entity.metadata.name}`);
        return entity;
    }
}