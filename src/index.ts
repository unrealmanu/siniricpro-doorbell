const {
  SinricPro,
  SinricProActionsObservable,
  raiseEvent,
  eventNames,
} = require('sinricpro');

import ENV from './env';

const sinricpro = new SinricPro(ENV.appKey, ENV.deviceId, ENV.secretKey, true);

SinricProActionsObservable(sinricpro).subscribe(
  (emit: any) => {
    console.log(emit);
    raiseEvent(sinricpro, eventNames.powerState, ENV.deviceId, { state: 'On' });
    raiseEvent(sinricpro, eventNames.doorBell, ENV.deviceId, { state: 'On' });
    process.exit();
  },
  (err: Error) => {
    console.error(err);
  },
  () => {
    console.log('Disconnected');
  }
);

/*
setInterval(() => {
 
}, 2000);
*/
