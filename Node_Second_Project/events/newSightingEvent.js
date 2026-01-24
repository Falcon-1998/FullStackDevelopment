import { EventEmitter } from 'events';
import { createAlert } from '../js/createAlert.js';
export const eventEmitter = new EventEmitter();

// Register the listener newSightingEvent
eventEmitter.on('newSightingEvent', createAlert);

