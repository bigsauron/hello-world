const SETTINGS = require('./settings');

const paths = {};
paths.profile = (username) => `/${SETTINGS.ENVIRONMENT}/user/${username}`;
paths.task = (taskId, type) => `/${SETTINGS.ENVIRONMENT}/task/${(type === 'predefined' ? 'predefined' : 'adhoc')}/${taskId}`;
paths.jobActivity = (activityId, activityTrackerId) => `/${SETTINGS.ENVIRONMENT}/activity/${activityId}/${activityTrackerId}`;
paths.device = (deviceId, name) => `/${SETTINGS.ENVIRONMENT}/template/${deviceId}/virtualdevice/${name}`;
paths.logoTemplate = (templateId, name) => `/${SETTINGS.ENVIRONMENT}/template/${templateId}/logo/${name}`;
paths.templateImage = (templateId, taskId) => `/${SETTINGS.ENVIRONMENT}/template/${templateId}/${taskId}`;

module.exports = paths;
